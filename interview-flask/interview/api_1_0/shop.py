# __author__: Mai feng
# __file_name__: shop.py
# __time__: 2019:05:09:10:25



from medicine.api_1_0 import api
from flask import request, jsonify, current_app, session
from medicine.utils.response_code import RET
from medicine import redis_conn, db
from medicine.utils.common import login_required
from medicine.models import MedicineShop, Video

@api.route('/shops')
def get_shops():
    '''分页获取药膳
    :param page: 页数
           count: 数量
    :reuturn: json
    ''' 
    # 检测参数
    page = request.args.get('page', '1')
    count = request.args.get('count', '5')

    try:
        shop_pages = MedicineShop.query.order_by(MedicineShop.create_time.desc()).paginate(int(page), 
                                                int(count), error_out=False)
        shops = shop_pages.items
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')

    if len(shops) == 0:
        return jsonify(re_code=RET.NODATA, msg='没有数据')

    shops_list = []
    for shop in shops:
        videos_list = []
        videos = shop.get_videos()
        for video in videos:
            videos_list.append(video.to_dict())
        shop_dict = shop.to_dict()
        shop_dict['videos'] = videos_list
        shops_list.append(shop_dict)

    shops_info = {
        'data': shops_list,
        'current_items': len(shops),
        'current_page': shop_pages.page,
        'total': shop_pages.total,
        'pages': shop_pages.pages,
        'has_next': shop_pages.has_next
    }
    return jsonify(re_code=RET.OK, msg='请求成功', data=shops_info)


@api.route('/addShop', methods=['POST'])
def add_shop():
    '''添加药膳
    :param name: 药膳名字
           activity_list: 药膳活动信息
    '''
    data = request.json
    name = data.get('name')
    activity_list = data.get('activity_list')
    # 检测参数
    if not all([name, activity_list]):
        return jsonify(re_code=RET.PARAMERR, msg='缺少参数')

    # 判断是否已经存在
    try:
        shop = MedicineShop.query.filter(MedicineShop.name == name).first()
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')
    
    if shop:
        return jsonify(re_code=RET.PARAMERR, msg='药膳已经存在')
    
    shop = MedicineShop()
    shop.name = name
    shop.activity_list = activity_list

    # 添加
    try:
        db.session.add(shop)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback() # 事务回滚
        return jsonify(re_code=RET.DBERR, msg='添加药膳失败')

    return jsonify(re_code=RET.OK, msg='添加成功')

@api.route('/delShop', methods=['POST'])
def del_shop():
    '''删除药膳
    '''
    data = request.json
    shop_id = data.get('shop_id')

    # 检测参数
    if not shop_id:
        return jsonify(re_code=RET.PARAMERR, msg='缺少参数')

    
    try:
        shop = MedicineShop.query.filter(MedicineShop.id == shop_id).first()
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')
    
    if not shop:
        return jsonify(re_code=RET.PARAMERR, msg='药膳不存在')

    # 删除
    try:
        db.session.delete(shop)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback() # 事务回滚
        return jsonify(re_code=RET.DBERR, msg='删除药膳失败')

    return jsonify(re_code=RET.OK, msg='删除成功')


@api.route('/allShops')
def get_all_shops():
    '''获取全部药膳
    '''
    shops_list = []

    try:
        shops = MedicineShop.query.all()
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='数据库错误')
    
    if not shops:
        return jsonify(re_code=RET.NODATA, msg='没有数据')
    
    for shop in shops:
        shops_list.append(shop.to_dict())
    
    shops_info = {
        'data': shops_list,
        'num': len(shops_list)
    }
    
    return jsonify(re_code=RET.OK, msg='返回成功', data=shops_info)