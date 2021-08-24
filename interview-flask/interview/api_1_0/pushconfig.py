from operator import is_not
import re
from threading import local
from interview.api_1_0 import api, tag
from flask import request, jsonify, current_app, session
from interview.utils.response_code import RET
from interview import redis_conn, db, scheduler,app
from interview.utils.common import login_required
from interview.model import PushConfig, Tag, Mj
import random,time, uuid
from interview.utils import send_wx


@api.route('/pushconfig/add', methods=['POST'])
def add_pushconfig():
    '''添加推送
    :param wx_id: 
            push_token：
            tag_id：标签
            tag_name: 标签名字
            push_time:
            push_number:
            push_status:
    '''
    data = request.json
    current_app.logger.debug(data)
    wx_id = data.get('wx_id')
    push_token = data.get('push_token')
    tag_id = data.get('tag_id')
    tag_name = data.get('tag_name')
    push_time = data.get('push_time')
    push_number = data.get('push_number')
    push_status = data.get('push_status')
    # 判断是否缺少
    if not all([wx_id, push_token, tag_id, tag_name, push_time, push_number, push_status]):
        current_app.logger.debug('缺少参数...')
        return jsonify(re_code=RET.PARAMERR, msg='缺少参数')

    # 判断类型参数传递是否正确

    # 创建实体
    p = PushConfig()
    p.wx_id = wx_id,
    p.push_token = push_token,
    p.tag_id = tag_id,
    p.tag_name = tag_name,
    p.push_time = push_time,
    p.push_number = int(push_number),
    p.push_status = push_status
    p.uuid = str(uuid.uuid1())

    try:
        db.session.add(p)
        db.session.commit()
    except Exception as e:
        current_app.logger.debug(e)
        db.session.rollback()
        return jsonify(re_code=RET.DBERR, msg='添加推送失败')

    if push_status == '1':
        print('准备添加任务...')
        add_jobs(p.uuid, push_token, tag_id, tag_name, push_time, push_number)

    return jsonify(re_code=RET.OK, msg='添加成功')

@api.route('/pushconfig/get', methods=['GET'])
def get_push_list():
    '''获取类型
    :param  page: 页码
            count: 数量
            tag: tag
    '''
    wx_id = request.args.get('wx_id', '0')
    page = request.args.get('page', '1')
    count = request.args.get('count', '10')
    # 查找
    try:
        push_pages = PushConfig.query.filter(PushConfig.wx_id == wx_id).order_by(PushConfig.id.desc()).paginate(int(page), 
                                                int(count), error_out=False)
        ps = push_pages.items
    except Exception as e:
        current_app.logger.debug(e)
        return jsonify(re_code=RET.DBERR, msg='数据库查询错误')

    if len(ps) == 0:
        return jsonify(re_code=RET.NODATA, msg='没有数据')

    ps_list = []
    for p in ps:
        ps_list.append(p.to_dict())
    
    ps_info = {
        'data': ps_list,
        'current_items': len(ps_list),
        'current_page': push_pages.page,
        'total': push_pages.total,
        'pages': push_pages.pages,
        'has_next': push_pages.has_next
    }
    return jsonify(re_code=RET.OK, msg='请求成功', data=ps_info)
 



@api.route('/pushconfig/delete', methods=['GET'])
def delete_pushconfig():
    '''
    :param  id:
    '''
    id = request.args.get('id')
    # 不判断了
    p = PushConfig.query.filter_by(id=id).first()
    db.session.delete(p)
    db.session.commit()
    if p.push_status == 1:
        try:
            remove_jobs(p.uuid)
        except Exception as e:
            current_app.logger.debug(e)
            return jsonify(re_code=RET.OK, msg='没有数据')
    

    return jsonify(re_code=RET.OK, msg='删除成功')
    

def add_jobs(uuid, token, tag_id, tag_name, push_time, number):
    # local_time = time.strftime("%Y-%m-%d", time.localtime())
    # run_date = local_time + ' ' + push_time
    task_id = f'push {uuid}'
    hour = push_time.split(':')[0]
    minute = push_time.split(':')[1]
    # job = scheduler.add_job(func=send_user_msg, id=task_id,args=(token,tag_id,number),trigger='date',run_date=run_date)
    job = scheduler.add_job(func=send_user_msg, id=task_id,args=(token,tag_id,tag_name,number),trigger='cron',hour=hour, minute=minute)
    print('job:', job)
    # 发消息

def remove_jobs(uuid):
    task_id = f'push {uuid}'
    scheduler.remove_job(task_id)
    print('delete task:', uuid)

def send_user_msg(token, tag_id, tag_name, number):
    data = get_send_datas(tag_id,number)
    send_wx.send_user_msg(tag_name, token, data)



def get_send_datas(tag_id, number):
    '''
    '''
    with app.app_context():
        # 取tab
        tag = Tag.query.filter_by(id=tag_id).first()
        print(tag.tab)
        if not tag:
            return None
        
        tab = tag.tab
        if tab == 0: # 面经
            sql = f'''
                select *
                from mj
                where id >= (select floor(rand() * ((select MAX(id) from mj where tag_id = {tag_id}) - (select MIN(id) from mj where tag_id = {tag_id})) + (select MIN(id) from mj where tag_id = {tag_id})   ))
                order by id
                limit {number};
            '''
        elif tab == 1: # 知识
            sql = f'''
                select *
                from kw
                where id >= (select floor(rand() * ((select MAX(id) from kw where tag_id = {tag_id}) - (select MIN(id) from kw where tag_id = {tag_id})) + (select MIN(id) from kw where tag_id = {tag_id})   ))
                order by id
                limit {number};
            '''
            pass
        elif tab == 2: # 刷题
            sql = f'''
                select *
                from lc
                where id >= (select floor(rand() * ((select MAX(id) from lc where tag_id = {tag_id}) - (select MIN(id) from lc where tag_id = {tag_id})) + (select MIN(id) from lc where tag_id = {tag_id})   ))
                order by id
                limit {number};
            '''
            pass
        elif tab  == 3: # 其他
            pass

        cur = db.session.execute(sql)
        res = cur.fetchall()
        datas = []
        for r in res:
            # print(r)
            print(r.tag_id, r.title, r.url)
            item = {}
            if tab == 2:
                item = {'tag_id':r.tag_id, 'title':str(r.lc_id) + '.' + r.title, 'url':r.url}
            else:
                item = {'tag_id':r.tag_id, 'title':r.title, 'url':r.url}
            datas.append(item)
        return datas

@app.before_first_request
def pushInit():
    '''启动的时候遍历pushconfig
    '''
    with app.app_context():
        pcs = PushConfig.query.filter_by(push_status=1) # 开启
        
        if not pcs:
            print('没有定时任务')
            return 
        
        for pc in pcs:
            uid = str(uuid.uuid1())    
            add_jobs(uid, pc.push_token, pc.tag_id, pc.tag_name, pc.push_time, pc.push_number)


pushInit()