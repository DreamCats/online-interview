# __author__: Mai feng
# __file_name__: model.py
# __time__: 2021:08:15:23:32

from . import db

class User(db.Model):
    '''用户模型'''
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True) # 用户id
    name = db.Column(db.String(256)) # 用户名字

class Mj(db.Model):
    __tablename__ = 'mj'
    id = db.Column(db.Integer, primary_key=True) # id
    # user_id = db.Column(db.Integer)