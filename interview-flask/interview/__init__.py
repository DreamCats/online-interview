# __author__: Mai feng
# __file_name__: __init__.py
# __time__: 2019:04:22:16:43
import logging
from logging.handlers import RotatingFileHandler
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import CSRFProtect
from config import configs
from flask_session import Session
from flask_apscheduler import APScheduler
from apscheduler.schedulers.background import BackgroundScheduler

import redis

#定义能被外部调用的对象
db=SQLAlchemy()
redis_conn=None
scheduler = APScheduler(BackgroundScheduler(timezone="Asia/Shanghai"))
app = Flask(__name__)
def setupLogging(levle):
    # 业务逻辑已开启就加载日志
    # 设置日志的记录等级
    logging.basicConfig(level=levle)  # 调试debug级
    # 创建日志记录器，指明日志保存的路径、每个日志文件的最大大小、保存的日志文件个数上限
    file_log_handler = RotatingFileHandler("logs/interview.log", maxBytes=1024 * 1024 * 100, backupCount=10)
    # 为全局的日志工具对象（flask app使用的）添加日志记录器
    logging.getLogger().addHandler(file_log_handler)


# def heart():
#     '''
#     '''
#     print('--------------------------------心跳--------------------------')

def get_app(config_name):
    '''
    app工厂函数
    :param config_name: 传入现在开发的环境名字
    :return: 返回app对象
    '''

    # 调用封装的日志
    setupLogging(configs[config_name].LOGGIONG_LEVEL)

    # 创建app
    global app
    # app = Flask(__name__)
    # 加载配置文件
    # configs[config_name].JOBS[0]['func'] = heart
    app.config.from_object(configs[config_name])

    # 创建Redis数据库连接对象
    # global redis_conn
    # redis_conn = redis.StrictRedis(host=configs[config_name].REDIS_HOST, 
    #                                 port=configs[config_name].REDIS_PORT, 
    #                                 decode_responses=True)
    # session绑定app
    # Session(app)
    # 创建数据库连接对象,赋值给全局db
    global db
    db.init_app(app)

    # 开启CSRF保护
    # CSRFProtect(app)

    # 定时任务
    global scheduler
    
    scheduler.init_app(app)
    scheduler.start()


    # 哪里需要哪里导入蓝图
    from interview.api_1_0 import api
    app.register_blueprint(api)
    # from medicine.api_2_0 import api
    # app.register_blueprint(api)
    # 注册蓝图
    # app.register_blueprint(api)
    # app.register_blueprint(api)
    

    return app
