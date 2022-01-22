import json
from datetime import datetime
from . import db

class User(db.Model):
    '''用户模型'''
    __tablename__ = 'wx_user'
    id = db.Column(db.Integer, primary_key=True) # id
    uuid = db.Column(db.String, nullable=False) # 用户id
    user_name = db.Column(db.String(256), nullable=False) # 用户名字
    url = db.Column(db.String, nullable=False) # 头像url
    active = db.Column(db.Integer) # 是否激活

    
    def to_dict(self):
        '''
        '''
        info = {
            'id': self.id,
            'uuid': self.uuid,
            'user_name': self.user_name,
            'url': self.url,
            'active': self.active
        }
        return info

class Tag(db.Model):
    __tablename__ = 'wx_tag'
    id = db.Column(db.Integer, primary_key=True) # id
    uuid = db.Column(db.String,nullable=False) # type
    tag_name = db.Column(db.String, nullable=False) # 
    url = db.Column(db.String) # 

    def to_dict(self):
        '''
        '''
        t_info = {
            'id': self.id,
            'uuid': self.uuid,
            'tag_name': self.tag_name,
            'url': self.url
        }
        return t_info

class Cp(db.Model):
    __tablename__ = 'wx_cp'
    id = db.Column(db.Integer, primary_key=True) # id
    uuid = db.Column(db.String,nullable=False) # type
    cp_name = db.Column(db.String, nullable=False) # type_name

    def to_dict(self):
        '''
        '''
        cp_info = {
            'id': self.id,
            'uuid': self.uuid,
            'cp_name': self.cp_name,
        }
        return cp_info

class Items(db.Model):
    __tablename__ = 'wx_items'
    id = db.Column(db.Integer, primary_key=True) # id
    uuid = db.Column(db.String, nullable=False) # uuid
    tc_uuid = db.Column(db.String, nullable=False) # tc_uuid
    s_id = db.Column(db.Integer) # k_id
    title = db.Column(db.String, nullable=False) # title
    url = db.Column(db.String) # url
    publish_time = db.Column(db.String) # url
    view_count = db.Column(db.Integer, nullable=False) # 点击次数
    like_count = db.Column(db.Integer, nullable=False) # 点击次数
    content = db.Column(db.Text) # c

    def to_dict(self):
        '''
        '''
        a_info = {
            'id': self.id,
            'uuid': self.uuid,
            'tc_uuid': self.tc_uuid,
            's_id': self.s_id,
            'title': self.title,
            'url': self.url,
            'publish_time': self.publish_time,
            'view_count': self.view_count,
            'like_count': self.like_count,
            'content': self.content,
        }
        return a_info


class Msg(db.Model):
    __tablename__ = 'wx_msg'
    id = db.Column(db.Integer, primary_key=True) # id
    status = db.Column(db.Integer) # id
    content = db.Column(db.String) # id
    create_time=db.Column(db.DateTime, default=datetime.now()) #记录模型类创建时间

    def to_dict(self):
        '''
        '''
        msg_info = {
            'id': self.id,
            'status': self.status,
            'content': self.content
        }
        return msg_info


class UserLikeItem(db.Model):
    __tablename__ = 'wx_user_like_item'
    id = db.Column(db.Integer, primary_key=True) # id
    uuid = db.Column(db.String,nullable=False) # type
    user_id = db.Column(db.String,nullable=False) # type
    item_id = db.Column(db.String,nullable=False) # type

    def to_dict(self):
        '''
        '''
        cp_info = {
            'id': self.id,
            'uuid': self.uuid,
            'user_id': self.user_id,
            'item_id':self.item_id
        }
        return cp_info