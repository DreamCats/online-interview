from interview.api_1_0 import api
from flask import request, jsonify, current_app, session
from interview.utils.response_code import RET
from interview import redis_conn, db
from interview.utils.common import login_required
from interview.model import Kw, KwType


@api.route('/kwtype/add', methods=['POST'])
def add_kw_type():
    '''添加知识分类
    :param type_name: 分类名称
            type: 类型 0，前，1，后
    '''
    data = request.json
    current_app.logger.debug(data)
    type_name = data.get('type_name')
    type = data.get('type')
    # 判断是否缺少
    if not all([type_name, type]):
        current_app.logger.debug('缺少参数...')
        return jsonify(re_code=RET.PARAMERR, msg='缺少参数')

    # 判断类型参数传递是否正确
    if type != '0' and type != '1' :
        return jsonify(re_code=RET.PARAMERR, msg='types参数不正确')

    # 创建实体
    kt = KwType()
    kt.type_name = type_name
    kt.type = int(type)

    try:
        db.session.add(kt)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='添加分类失败')

    return jsonify(re_code=RET.OK, msg='添加成功')


@api.route('/kwtype/list', methods=['GET'])
def get_kwtype_list():
    '''查找公司
    :param type: 0， 前，1，后
    '''
    type = request.args.get('type', '0')
    
    # 参数判断省略

    # 查找
    try:
        kt = KwType.query.filter(KwType.type == type).order_by(KwType.id)
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')

    if kt is None:
        return jsonify(re_code=RET.NODATA, msg='没有数据')
    datas = []
    for k in kt:
        datas.append(k.to_dict())
    
    return jsonify(re_code=RET.OK, msg='请求成功', data=datas)