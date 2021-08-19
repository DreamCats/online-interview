# __author__: Mai feng
# __file_name__: model.py
# __time__: 2021:08:15:23:32

import datetime
from . import db

# class BaseModel(object):
#     """模型基类"""
#     create_time=db.Column(db.DateTime, default=datetime.now()) #记录模型类创建时间
#     update_time=db.Column(db.DateTime, default=datetime.now(), onupdate=datetime.now())#记录模型类更新时间

class User(db.Model):
    '''用户模型'''
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True) # id
    uuid = db.Column(db.Integer, nullable=False) # 用户id
    wx_id = db.Column(db.String, nullable=False) # wx id
    user_name = db.Column(db.String(256), nullable=False) # 用户名字
    push_token = db.Column(db.String, nullable=False) # push token # 预留
    url = db.Column(db.String, nullable=False) # 头像url
    

class Mj(db.Model):
    __tablename__ = 'mj'
    id = db.Column(db.Integer, primary_key=True) # id
    c_id = db.Column(db.Integer,nullable=False) # id
    publish_time = db.Column(db.String, nullable=False) # publish_time # 预留
    title = db.Column(db.String, nullable=False) # title
    url = db.Column(db.String, nullable=False) # url
    content = db.Column(db.Text) # c

class Lc(db.Model):
    __tablename__ = 'lc'
    id = db.Column(db.Integer, primary_key=True) # id
    lc_id = db.Column(db.Integer,nullable=False) # lc_id
    type = db.Column(db.Integer,nullable=False) # type
    title = db.Column(db.String, nullable=False) # title
    url = db.Column(db.String, nullable=False) # url
    content = db.Column(db.Text) # c

class Company(db.Model):
    __tablename__ = 'company'
    id = db.Column(db.Integer, primary_key=True) # id
    c_name = db.Column(db.String, nullable=False) # c_name
    c_id = db.Column(db.Integer,nullable=False) # c_id
    type = db.Column(db.Integer,nullable=False) # type

    def to_dict(self):
        '''
        '''
        c_info = {
            'id': self.id,
            'c_name': self.c_name,
            'c_id': self.c_id,
            'type': self.type
        }
        return c_info

class KwType(db.Model):
    __tablename__ = 'kw_type'
    id = db.Column(db.Integer, primary_key=True) # id
    type = db.Column(db.Integer,nullable=False) # type
    type_name = db.Column(db.String, nullable=False) # type_name

    def to_dict(self):
        '''
        '''
        k_info = {
            'id': self.id,
            'type': self.type,
            'type_name': self.type_name,
        }
        return k_info


class Kw(db.Model):
    __tablename__ = 'kw'
    id = db.Column(db.Integer, primary_key=True) # id
    k_id = db.Column(db.Integer,nullable=False) # k_id
    k_type_id = db.Column(db.Integer,nullable=False) # type
    title = db.Column(db.String, nullable=False) # title
    url = db.Column(db.String, nullable=False) # url
    content = db.Column(db.Text) # c