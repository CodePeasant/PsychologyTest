#!/usr/bin/env python
# coding: utf-8
import web
from config import settings
import extendlib.simplejson
import extendlib.pyExcelerator
import StringIO
render = settings.render
db = settings.db  
session=web.config._session

class Index:
    '''The index page for user portal'''
    def GET(self):
        return render.index()

class Register:
    '''Process with the user register information'''
    def GET(self):
        information=web.input()
        session.age=information.age
        session.sex=information.sex
        session.major=information.major
    
class Grouping:
    '''Process with the grouping information and store into the database'''
    def GET(self):
        information=web.input()
        #insert the user information into the table user
        session.user_id=db.insert("user",age=session.age, sex=session.sex, major=session.major,group_id=information.group_id)
        return information.group_id

class Group1_1:
    '''Process with the answer of the first question in group 1'''
    def GET(self):
        information=web.input()
        session.group1_1=information.group1_1

class Group1_2:
    '''Process with the answer of the second question in group 1 
        and store the disussion the user make in the experiment into the database'''
    def GET(self):
        information=web.input()
        db.insert("group1",user_id=session.user_id, answer1=session.group1_1, answer2=information.group1_2)

class Group2:
    '''Process with the answer in group 2 
        and store the disussion the user make in the experiment into the database'''
    def GET(self):
        information=web.input()
        db.insert("group2",user_id=session.user_id, answer=information.group2, condition_id=session.condition_id)

class GetCondition:
    '''query the js global setting data from the databaseand then post the data to the client'''
    def GET(self):
        results = db.select('cond', what="probility_good,bonus_good,bonus_bad,bonus_fix,condition_id", where="is_default=1")
        data=results[0]
        session.condition_id=data.condition_id
        return extendlib.simplejson.dumps(data)

class Admin:
    def GET(self):
        return render.admin()

class SetCondition:
    def GET(self):
        info=web.input()
        db.update("cond",where="condition_id=1", probility_good=info.probility_good, bonus_good=info.bonus_good, bonus_bad=info.bonus_bad, bonus_fix=info.bonus_fix)
        return "保存修改成功"
             
class SaveExcel:
    
    def GET(self):
        web.header('content-type','application/vnd.ms-excel;charset=utf-8')
        web.header('Content-Disposition','attachment; filename=psychologytest.xls')
        memoryFile = StringIO.StringIO() #Memory file
        
        w = extendlib.pyExcelerator.Workbook() 
        ws = w.add_sheet('psychologytest')
        #write title
        ws.write(0,0,u'被试编号')       
        ws.write(0,1,u'年龄')      
        ws.write(0,2,u'性别')
        ws.write(0,3,u'专业')       
        ws.write(0,4,u'所选分组')      
        ws.write(0,5,u'所选方案')
        #wirite content
        users = db.select('user')
        count=0
        for item in users:
            #read data from database
            user_id=item["user_id"]
            age=item["age"]
            sex=item["sex"]
            major=item["major"]
            group_id=item["group_id"]
            choose=""
            if group_id==1:
                chooses=db.select("group1",where="user_id="+str(user_id))[0]
                choose=chooses["answer1"]+chooses["answer2"]
            elif group_id==2:
                chooses=db.select("group2",where="user_id="+str(user_id))[0]
                choose=chooses["answer"]
            else:
                group_id=""
            
            #write data into database
            count+=1
            ws.write(count,0,user_id)       
            ws.write(count,1,age)      
            ws.write(count,2,sex)
            ws.write(count,3,major)
            ws.write(count,4,group_id)
            ws.write(count,5,choose)   
        w.save(memoryFile)
        return memoryFile.getvalue()
