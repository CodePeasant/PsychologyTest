#!/usr/bin/env python
# coding: utf-8
import web
from config import settings

render = settings.render
db = settings.db
tb = 'todo'

class Index:

    def GET(self):
        return render.index("Hello World")