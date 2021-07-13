#!C:\Users\1371851\AppData\Local\Programs\Python\Python39 python

import cgi 
import json
import hashlib


form = cgi.FieldStorage() 
name = form.getvalue("count")

f = open('resOK.txt', 'a', encoding = "utf-8")
f.write("%s\n" % (name))
f.close