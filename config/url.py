#!/usr/bin/env python
# coding: utf-8

pre_fix = 'controllers.psychologytest.'

urls = (
    '/',                pre_fix + 'Index',
    '/register',        pre_fix + 'Register',
    '/getcondition',    pre_fix + 'GetCondition',
    
    '/grouping',        pre_fix + 'Grouping',
    '/group1_1',        pre_fix + 'Group1_1',
    '/group1_2',        pre_fix + 'Group1_2',
    '/group2',          pre_fix + 'Group2',
    
    '/admin',           pre_fix + 'Admin',
    '/saveexcel',       pre_fix + 'SaveExcel',
    '/setcondition',    pre_fix + 'SetCondition',
    
)
