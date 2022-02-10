from interview.api_2_0 import api
from flask import request, jsonify, current_app, session
from interview.utils.response_code import RET
from interview.utils.common import getUUID
from interview import db
from interview.model import Data
import uuid, requests
from sqlalchemy import func, text



@api.route('/data/list/all', methods=['GET'])
def get_data_list_all():
    '''
    '''
    day = request.args.get('day', '0')
    if day == '0':
        items = db.session.query(Data, func.sum(Data.view_count).label('total_count')) \
        .filter(func.date_format(Data.create_time, '%Y%m%d')==func.date_format(func.now(), '%Y%m%d')) \
        .order_by(Data.update_time.desc(), Data.view_count.desc()).group_by(Data.path_name).all()
    else:
        items = db.session.query(Data, func.sum(Data.view_count).label('total_count')) \
        .filter(func.date_format(Data.create_time, '%Y%m%d')<=func.date_format(func.now(), '%Y%m%d'), 
        func.date_format(Data.create_time, '%Y%m%d')>=func.date_format(func.date_sub(func.curdate(), text(f'interval {day} day')), '%Y%m%d')) \
        .order_by(Data.update_time.desc(), Data.view_count.desc()).group_by(Data.path_name).all()
    db.session.commit()
    datas = []
    for item in items:
        a = item[0].to_dict()
        a['total_count'] = float(item[1])
        datas.append(a)
    return jsonify(re_code=RET.OK, msg='请求成功', data=datas)

@api.route('/data', methods=['GET'])
def get_data_path_name():
    '''
    '''
    day = request.args.get('day', '0')
    path_name = request.args.get('path_name', 'wx_pv')
    if day == '0':
        items = db.session.query(Data, func.sum(Data.view_count).label('total_count')) \
        .filter(Data.path_name==path_name, func.date_format(Data.create_time, '%Y%m%d')<=func.date_format(func.now(), '%Y%m%d')) \
        .order_by(Data.update_time.desc(), Data.view_count.desc()).group_by(Data.path_name).all()
    else:
        items = db.session.query(Data, func.sum(Data.view_count).label('total_count')) \
        .filter(Data.path_name==path_name, func.date_format(Data.create_time, '%Y%m%d')<=func.date_format(func.now(), '%Y%m%d'), 
        func.date_format(Data.create_time, '%Y%m%d')>=func.date_format(func.date_sub(func.curdate(), text(f'interval {day} day')), '%Y%m%d')) \
        .order_by(Data.update_time.desc(), Data.view_count.desc()).group_by(Data.path_name).all()
    db.session.commit()
    datas = []
    for item in items:
        a = item[0].to_dict()
        a['total_count'] = float(item[1])
        datas.append(a)
    return jsonify(re_code=RET.OK, msg='请求成功', data=datas)

# https://www.cnblogs.com/echeng192/p/7791984.html
# https://blog.csdn.net/weixin_43343144/article/details/104348175
# https://blog.csdn.net/qq_kbyd/article/details/79994914
# https://www.cnblogs.com/ggjucheng/p/3352280.html