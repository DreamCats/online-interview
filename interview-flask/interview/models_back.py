# __author__: Mai feng
# __file_name__: models.py
# __time__: 2019:04:23:19:54


from datetime import datetime
from . import db, constants
from werkzeug.security import generate_password_hash,check_password_hash

class BaseModel(object):
    """模型基类"""
    create_time=db.Column(db.DateTime, default=datetime.now()) #记录模型类创建时间
    update_time=db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now())#记录模型类更新时间


class UserBaseModel(object):
    id = db.Column(db.Integer, primary_key=True) # 用户id
    name = db.Column(db.String(32)) # 用户名字
    password = db.Column(db.String(128), nullable=False) # 用户密码
    phone = db.Column(db.String(11), nullable=False) # 用户手机号码， 用手机号码注册
    age = db.Column(db.String(3), nullable=True)  # 用户年龄
    email = db.Column(db.String(128), nullable=True) # 用户邮箱
    avatar_url = db.Column(db.String(256), nullable=True) # 用户头像
    address = db.Column(db.String(128), nullable=True) # 用户地址
    

class User(BaseModel, UserBaseModel, db.Model):
    '''病人模型类'''
    __tablename__ = 'mi_user_profile'


    level = db.Column(db.String(16), nullable=True) # 用户级别
    grade = db.Column(db.Enum('common', 'vip')) # 普通用户和高级用户
    status = db.Column(db.Enum('null', 'min', 'max')) # 健康， 亚健康， 不健康
    questions = db.relationship('Question', backref='user')
    answers = db.relationship('Answer', backref='user')

    @property
    def password_hash(self):
        raise AttributeError('不能访问该属性')

    @password_hash.setter
    def password_hash(self, password):
        # 给密码加密
        self.password = generate_password_hash(password)

    def check_password(self, password):
        # 校验密码是否正确
        return check_password_hash(self.password, password)

    def to_dict(self):
        '''返回一个用户信息字典接口，方便外界调用
        '''
        user_info = {
            'user_id': self.id,
            'name': self.name,
            'phone': self.phone,
            'avatar_url': self.avatar_url,
            'age': self.age,
            'address': self.address,
            'level': self.level,
            'grade': self.grade,
            'status': self.status,
        }
        if self.avatar_url:
            user_info['avatar_url'] = constants.QINIU_DOMIN_PREFIX + self.avatar_url
        return user_info

class Expert(BaseModel, UserBaseModel, db.Model):
    '''专家模型类'''
    __tablename__ = 'mi_expert_profile'

    grade = db.Column(db.Enum('professor', 'assprofessor')) # 教授， 副教授
    major = db.Column(db.String(32), nullable=True) # 主治
    position_id = db.Column(db.Integer, db.ForeignKey('mi_position.id'),nullable=True) # 外键 关联position
    answers = db.relationship('Answer', backref='expert')

    @property
    def password_hash(self):
        raise AttributeError('不能访问该属性')

    @password_hash.setter
    def password_hash(self, password):
        # 给密码加密
        self.password = generate_password_hash(password)

    def check_password(self, password):
        # 校验密码是否正确
        return check_password_hash(self.password, password)
    
    def to_dict(self):
        '''返回一个expert信息字典接口，方便外界调用
        '''
        expert_info = {
            'user_id': self.id,
            'name': self.name,
            'phone': self.phone,
            'avatar_url': self.avatar_url,
            'age': self.age,
            'address': self.address,
            'grade': self.grade,
            'major': self.major,
            'position_id': self.position_id,
            
        }
        if self.avatar_url:
            expert_info['avatar_url'] = constants.QINIU_DOMIN_PREFIX + self.avatar_url
        return expert_info


class Position(BaseModel, db.Model):
    '''专家职位类'''
    __tablename__ = 'mi_position'

    id = db.Column(db.Integer, primary_key=True) # id
    nickname = db.Column(db.String(32), nullable=True) # 职位名称
    experts = db.relationship('Expert', backref='position') # 关系  一对多 一个职位对应多个专家 不考虑多对多


    def to_dict(self):
        '''外界调用方法
        '''
        position_info = {
            'position_id': self.id,
            'nickname': self.nickname,
        }
        return position_info

    def get_experts(self):
        '''获取experts
        '''
        return self.experts
        
class Essay(BaseModel, db.Model):
    '''软文'''
    __tablename__ = 'mi_essay'

    id = db.Column(db.Integer, primary_key=True) # id
    title = db.Column(db.String(64), nullable=False) # 文章标题
    abstract = db.Column(db.String(255), nullable=False) # 文章摘要
    cover_img_url = db.Column(db.String(128), nullable=True) # 文章封面
    content = db.Column(db.Text, nullable=False) # 文章内容
    types = db.Column(db.Enum('common', 'shop')) # 普通软文 商家优惠活动

    def to_dict_section(self):
        '''外界调用，一部分
        '''
        essay_info = {
            'essay_id': self.id,
            'title': self.title,
            'abstract': self.abstract,
            'cover_img_url': self.cover_img_url,
            'types': self.types,
            'create_time': self.create_time,
            'update_time': self.update_time
        }
        if self.cover_img_url:
            essay_info['cover_img_url'] = constants.QINIU_DOMIN_PREFIX + self.cover_img_url
        return essay_info

    def to_dict_content(self):
        essay_info = {
            'essay_id': self.id,
            'title': self.title,
            'abstract': self.abstract,
            'cover_img_url': self.cover_img_url,
            'types': self.types,
            'content': self.content,
            'create_time': self.create_time,
            'update_time': self.update_time
        }
        if self.cover_img_url:
            essay_info['cover_img_url'] = constants.QINIU_DOMIN_PREFIX + self.cover_img_url
        return essay_info
 
class PrivateOrder(BaseModel, db.Model):
    '''私人订制'''
    __tablename__ = 'mi_private_order'
    id = db.Column(db.Integer, primary_key=True) # id
    avatar_url = db.Column(db.String(128), nullable=True) # 订制图片
    title = db.Column(db.String(64), nullable=False) # 定制标题

    def to_dict(self):
        '''外界调用
        '''
        order_info = {
            'order_id': self.id,
            'avatar_url': self.avatar_url,
            'title': self.title
        }
        if self.avatar_url:
            order_info['cover_img_url'] = constants.QINIU_DOMIN_PREFIX + self.order_info
        return order_info

class MedicineShop(BaseModel, db.Model):
    '''商家'''
    __tablename__ = 'mi_medicine_shop'
    id = db.Column(db.Integer, primary_key=True) # id
    name = db.Column(db.String(64), nullable=False) # 商家名字
    activity_list = db.Column(db.String(255), nullable=True) # 活动列表
    videos = db.relationship('Video', backref='medicine_shop') # 一对多， 一个商家有多个视频

    def to_dict(self):
        '''外界调用接口
        '''
        shop_info = {
            'shop_id': self.id,
            'name': self.name,
            'activity_list': self.activity_list,
            
        }
        return shop_info
    
    def get_videos(self):
        '''获取videos
        '''
        return self.videos

class Video (BaseModel, db.Model):
    '''视频类
    '''
    __tablename__ = 'mi_video'
    id = db.Column(db.Integer, primary_key=True) # id
    avatar_url = db.Column(db.String(128), nullable=True) # 视频封面
    video_url = db.Column(db.String(128), nullable=True) # 视频链接
    medicine_id = db.Column(db.Integer, db.ForeignKey('mi_medicine_shop.id'),nullable=False) # 商家id

    def to_dict(self):
        '''外界调用
        '''
        video_info = {
            'video_id': self.id,
            'avatar_url': self.avatar_url,
            'video_url': self.video_url,
            'medicine_id': self.medicine_id
        }
        return video_info


class Question(BaseModel, db.Model):
    '''问题
    '''
    __tablename__ = 'mi_question'
    id = db.Column(db.Integer, primary_key=True) # id
    content = db.Column(db.String(255), nullable=True) # 问题内容
    user_id = db.Column(db.Integer, db.ForeignKey('mi_user_profile.id'), nullable=False) # 病人id
    answers = db.relationship('Answer', backref='question')

    def to_dict(self):
        '''外界调用
        '''
        question_info = {
            'question_id': self.id,
            'content': self.content,
            'user_id': self.user_id
        }
        return question_info
    
    def get_answers(self):
        '''外界调用
        '''
        return self.answers

class Answer(BaseModel, db.Model):
    '''回答
    '''
    __tablename__ = 'mi_answer'
    id = db.Column(db.Integer, primary_key=True) # id
    question_id = db.Column(db.Integer, db.ForeignKey('mi_question.id'), nullable=False) # 问题id
    user_id = db.Column(db.Integer, db.ForeignKey('mi_user_profile.id'), nullable=True) # 病人id 可以为空
    expert_id = db.Column(db.Integer, db.ForeignKey('mi_expert_profile.id'), nullable=True) # 医生id 可以为空
    content = db.Column(db.String(255), nullable=False) # 回答内容

    def to_dict(self):
        '''外界调用
        '''
        answer_info = {
            'answer_id': self.id,
            'question_id': self.question_id,
            'user_id': self.user_id,
            'expert_id': self.expert_id,
            'content': self.content
        }
        return answer_info





    
