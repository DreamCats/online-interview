from interview.api_1_0 import api
from flask import request, jsonify, current_app, session
from interview.utils.response_code import RET
from interview import redis_conn, db
from interview.utils.common import login_required
from interview.model import Tag


@api.route('/tag/add', methods=['POST'])
def add_kw_type():
    '''添加知识分类
    :param priority: 优先级
            tab：板块
            tag：标签
            tag_name: 标签名字
    '''
    data = request.json
    current_app.logger.debug(data)
    priority = data.get('priority')
    tab = data.get('tab')
    tag = data.get('tag')
    tag_name = data.get('tag_name')
    # 判断是否缺少
    if not all([priority, tab, tag, tag_name]):
        current_app.logger.debug('缺少参数...')
        return jsonify(re_code=RET.PARAMERR, msg='缺少参数')

    # 判断类型参数传递是否正确

    # 创建实体
    t = Tag()
    t.priority = int(priority)
    t.tab = int(tab)
    t.tag = int(tag)
    t.tag_name = tag_name

    try:
        db.session.add(t)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='添加标签失败')

    return jsonify(re_code=RET.OK, msg='添加成功')


@api.route('/tag/list', methods=['GET'])
def get_tag_list():
    '''查找公司
    :param tab: 0， 面经，1，知识，2，算法
            tag: 标签：0，前面，1，后面，2，前知，3，后知，4，算法
    '''
    tab = request.args.get('tab', '0')
    tag = request.args.get('tag', '0')
    
    # 参数判断省略

    # 查找
    try:
        db.session.commit()
        kt = Tag.query.filter(Tag.tag == tag).order_by(Tag.priority)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')

    if kt is None:
        return jsonify(re_code=RET.NODATA, msg='没有数据')
    datas = []
    for k in kt:
        datas.append(k.to_dict())
    
    return jsonify(re_code=RET.OK, msg='请求成功', data=datas)

@api.route('/tag/list/all', methods=['GET'])
def get_tag_list_all():
    '''
    '''
    tags = Tag.query.filter()
    db.session.commit()
    datas = []
    for tag in tags:
        datas.append(tag.to_dict())
    return jsonify(re_code=RET.OK, msg='请求成功', data=datas)