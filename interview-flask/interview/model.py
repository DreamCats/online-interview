import json
from datetime import datetime
from . import db
class BaseModel(object):
    """模型基类"""
    create_time=db.Column(db.DateTime, default=datetime.now()) #记录模型类创建时间
    update_time=db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)#记录模型类更新时间

class User(db.Model):
    '''用户模型'''
    __tablename__ = 'wx_user'
    id = db.Column(db.Integer, primary_key=True) 
    uuid = db.Column(db.String, nullable=False) 
    user_name = db.Column(db.String(256), nullable=False) 
    publish_status = db.Column(db.Integer, default=0)
    url = db.Column(db.String, nullable=False) 
    active = db.Column(db.Integer) 
    current_date =db.Column(db.DateTime, default=datetime.now()) 

    def to_dict(self):
        '''
        '''
        info = {
            'id': self.id,
            'uuid': self.uuid,
            'user_name': self.user_name,
            'publish_status': self.publish_status,
            'url': self.url,
            'active': self.active,
            'current_date':self.current_date.strftime('%Y-%m-%d %H:%M:%S'),
        }
        return info

class Tag(db.Model):
    __tablename__ = 'wx_tag'
    id = db.Column(db.Integer, primary_key=True) 
    uuid = db.Column(db.String,nullable=False) 
    tag_name = db.Column(db.String, nullable=False)  
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
    id = db.Column(db.Integer, primary_key=True) 
    uuid = db.Column(db.String,nullable=False) 
    cp_name = db.Column(db.String, nullable=False) 
    url = db.Column(db.String, nullable=False) 

    def to_dict(self):
        '''
        '''
        cp_info = {
            'id': self.id,
            'uuid': self.uuid,
            'cp_name': self.cp_name,
            'url':self.url
        }
        return cp_info

class Items(db.Model):
    __tablename__ = 'wx_items'
    id = db.Column(db.Integer, primary_key=True) 
    uuid = db.Column(db.String, nullable=False) 
    tc_uuid = db.Column(db.String, nullable=False) 
    tag_type = db.Column(db.Integer) 
    s_id = db.Column(db.Integer) 
    title = db.Column(db.String, nullable=False) 
    url = db.Column(db.String) 
    publish_time = db.Column(db.String) 
    abstract = db.Column(db.String) 
    view_count = db.Column(db.Integer, nullable=False) 
    like_count = db.Column(db.Integer, nullable=False) 
    content = db.Column(db.Text) 

    def to_dict(self):
        '''
        '''
        a_info = {
            'id': self.id,
            'uuid': self.uuid,
            'tc_uuid': self.tc_uuid,
            'tag_type': self.tag_type,
            's_id': self.s_id,
            'title': self.title,
            'url': self.url,
            'publish_time': self.publish_time,
            'abstract': self.abstract,
            'view_count': self.view_count,
            'like_count': self.like_count,
            'content': self.content,
        }
        return a_info


class Msg(db.Model):
    __tablename__ = 'wx_msg'
    id = db.Column(db.Integer, primary_key=True) 
    status = db.Column(db.Integer) 
    content = db.Column(db.String) 
    create_time=db.Column(db.DateTime, default=datetime.now()) 

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
    id = db.Column(db.Integer, primary_key=True) 
    uuid = db.Column(db.String,nullable=False) 
    user_id = db.Column(db.String,nullable=False) 
    item_id = db.Column(db.String,nullable=False) 

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

class Data(db.Model, BaseModel):
    __tablename__ = 'wx_data'
    id = db.Column(db.Integer, primary_key=True) 
    uuid = db.Column(db.String,nullable=False) 
    path_name = db.Column(db.String, nullable=False) 
    view_count = db.Column(db.Integer) 

    def to_dict(self):
        '''
        '''
        d_info = {
            'id': self.id,
            'uuid': self.uuid,
            'path_name': self.path_name,
            'view_count':self.view_count,
            'create_time':self.create_time.strftime('%Y-%m-%d %H:%M:%S'),
            'update_time':self.update_time.strftime('%Y-%m-%d %H:%M:%S')
        }
        
        return d_info


class PublishItem(db.Model):
    __tablename__ = 'wx_user_publish_item'
    id = db.Column(db.Integer, primary_key=True) 
    uuid = db.Column(db.String,nullable=False) 
    user_uuid = db.Column(db.String, nullable=False) 
    item_uuid = db.Column(db.String, nullable=False) 

    def to_dict(self):
        '''
        '''
        i_info = {
            'id': self.id,
            'uuid': self.uuid,
            'user_uuid': self.user_uuid,
            'item_uuid':self.item_uuid,
            'create_time':self.create_time.strftime('%Y-%m-%d %H:%M:%S'),
            'update_time':self.update_time.strftime('%Y-%m-%d %H:%M:%S')
        }
        
        return i_info
