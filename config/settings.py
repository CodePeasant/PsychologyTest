#!/usr/bin/env python
# coding: utf-8
import web
from config.url import urls



app = web.application(urls, globals())

db = web.database(dbn='mysql', db='psychologytest', user='root', pw='')

render = web.template.render('templates/', cache=False)

session = web.session.Session(app, web.session.DiskStore('sessions')) 

config = web.storage(
    email='1032197148@qq.com',
    site_name = '李乐乐的心理测验',
    site_desc = '',
    static = '/static',
)

web.template.Template.globals['config'] = config
web.template.Template.globals['render'] = render
web.config.session_parameters['timeout'] = 3600
web.config._session = session
