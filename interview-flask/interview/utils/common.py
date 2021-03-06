# __author__: Mai feng
# __file_name__: common.py
# __time__: 2019:04:30:15:46

from datetime import datetime
from functools import wraps
from flask import session, jsonify, g
from pymysql import Date
from interview.utils.response_code import RET
import uuid
from interview import db
from interview.model import Data
from sqlalchemy import func, true

def login_required(view_func):
    """登录校验装饰器
    :param func:函数名
    :return: 闭包函数名
    """
    # 装饰器装饰一个函数时，会修改该函数的__name__属性
    # 如果希望装饰器装饰之后的函数，依然保留原始的名字和说明文档,就需要使用wraps装饰器，装饰内存函数
    @wraps(view_func)
    def wrapper(*args,**kwargs):
        #从session中或取user_id
        user_id=session.get('user_id')
        if not user_id:
            #用户未登录
            return jsonify(re_code=RET.SESSIONERR,msg='用户未登录')
        else:
            #用户已登录使用g变量保存住user_id，方便被装饰的函数中调用g变量获取user_id。
            g.user_id=user_id
            return view_func(*args,**kwargs)

    return wrapper

def getUUID(name):
    return uuid.uuid3(uuid.NAMESPACE_DNS, name)

def save_data(path_name):
    # 判断path_name是否存在
    data = db.session.query(Data).filter(Data.path_name==path_name, func.date_format(Data.create_time, '%Y%m%d')==func.date_format(func.now(), '%Y%m%d')).first()
    
    if data:
        # 更新
        data.view_count = data.view_count + 1
    else:
        # 不存在
        data = Data()
        data.uuid = str(getUUID(path_name))
        data.path_name = path_name
        data.view_count = 1
        data.create_time = datetime.now()
    try:
        db.session.add(data)
        db.session.commit()
    except Exception as e :
        db.session.rollback()
        return False
    
    return True