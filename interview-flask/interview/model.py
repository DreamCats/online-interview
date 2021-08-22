# __author__: Mai feng
# __file_name__: model.py
# __time__: 2021:08:15:23:32

import datetime, json
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
    
    def to_dict(self):
        '''
        '''
        info = {
            'id': self.id,
            'uuid': self.uuid,
            'wx_id': self.wx_id,
            'user_name': self.user_name,
            'push_token': self.push_token,
            'url': self.url
        }
        return info

class Mj(db.Model):
    __tablename__ = 'mj'
    id = db.Column(db.Integer, primary_key=True) # id
    tag_id = db.Column(db.Integer,nullable=False) # id
    publish_time = db.Column(db.String, nullable=False) # publish_time # 预留
    title = db.Column(db.String, nullable=False) # title
    url = db.Column(db.String, nullable=False) # url
    content = db.Column(db.Text) # c

    def to_dict(self):
        '''
        '''
        m_info = {
            'id': self.id,
            'publish_time': self.publish_time,
            'tag_id': self.tag_id,
            'title': self.title,
            'url': self.url,
            'content': self.content
        }
        return m_info

class Lc(db.Model):
    __tablename__ = 'lc'
    id = db.Column(db.Integer, primary_key=True) # id
    lc_id = db.Column(db.Integer,nullable=False) # lc_id
    type = db.Column(db.Integer,nullable=False) # type
    title = db.Column(db.String, nullable=False) # title
    url = db.Column(db.String, nullable=False) # url
    content = db.Column(db.Text) # c


class Tag(db.Model):
    __tablename__ = 'tag'
    id = db.Column(db.Integer, primary_key=True) # id
    priority = db.Column(db.Integer,nullable=False) # type
    tab = db.Column(db.Integer,nullable=False) # type
    tag = db.Column(db.Integer,nullable=False) # type
    tag_name = db.Column(db.String, nullable=False) # type_name

    def to_dict(self):
        '''
        '''
        t_info = {
            'id': self.id,
            'priority': self.priority,
            'tab': self.tab,
            'tag': self.tag,
            'tag_name': self.tag_name,
        }
        return t_info


class Kw(db.Model):
    __tablename__ = 'kw'
    id = db.Column(db.Integer, primary_key=True) # id
    k_id = db.Column(db.Integer,nullable=False) # k_id
    tag_id = db.Column(db.Integer,nullable=False) # type
    title = db.Column(db.String, nullable=False) # title
    url = db.Column(db.String, nullable=False) # url
    content = db.Column(db.Text) # c

    def to_dict(self):
        '''
        '''
        k_info = {
            'id': self.id,
            'tag_id': self.tag_id,
            'k_id': self.k_id,
            'title': self.title,
            'url': self.url,
            'content': self.content,
        }
        return k_info

class PushConfig(db.Model):
    __tablename__ = 'push_config'
    id = db.Column(db.Integer, primary_key=True) # id
    uuid = db.Column(db.String) # id
    wx_id = db.Column(db.String) # id
    push_token = db.Column(db.String) # id
    tag_id = db.Column(db.Integer,nullable=False) # type
    tag_name = db.Column(db.String, nullable=False) # title
    push_time = db.Column(db.String, nullable=False) # title
    push_number = db.Column(db.Integer, nullable=False) # title
    push_status = db.Column(db.Integer, nullable=False) # title

    def to_dict(self):
        '''
        '''
        p_info = {
            'id': self.id,
            'uuid': self.uuid,
            'wx_id': self.wx_id,
            'push_token': self.push_token,
            'tag_id': self.tag_id,
            'tag_name': self.tag_name,
            'push_time': self.push_time,
            'push_number': self.push_number,
            'push_status': self.push_status,
        }
        return p_info