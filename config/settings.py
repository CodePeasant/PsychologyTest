#!/usr/bin/env python
# coding: utf-8
import web

db = web.database(dbn='mysql', db='todo', user='root', pw='')

render = web.template.render('templates/', cache=False)

web.config.debug = True

config = web.storage(
    email='1032197148@qq.com',
    site_name = '李乐乐的心理测验',
    site_desc = '',
    static = '/static',
)


web.template.Template.globals['config'] = config
web.template.Template.globals['render'] = render
