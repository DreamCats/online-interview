import requests
from flask import app, current_app, json
# xxx
appid = 'wx525579a990736877'
secret = 'e1d5bb1814d6009685a8e61ba6fedcbc'

# 全局，毕竟是从我这发送的
ss = requests.session()


# 获取买老师的token，希望大家不要乱用哇...
def get_token():
    # 性能可能稍微差了点
    url = f'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={appid}&secret={secret}'
    wx_token = ''
    resp = ss.get(url)
    if resp.status_code == 200:
        datas = resp.json()
        if 'access_token' in datas:
            wx_token = datas['access_token']
    else:
        current_app.logger.debug("get token is err")
    return wx_token


def get_code2Session(code):
    '''
    '''
    url = f'https://api.weixin.qq.com/sns/jscode2session?appid={appid}&secret={secret}&js_code={code}&grant_type=authorization_code'
    openId = ''
    try:
        resp = ss.get(url)
        if resp.status_code == 200:
            datas = resp.json()
            print(datas)
            if 'openid' in datas:
                openId = datas['openid']
    except Exception as e:
        current_app.logger.debug('get_code2session:', e)
        return None
    return openId

def send_msg():
    token = get_token()
    url = f'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token={token}'
    datas = {
        'access_token': token,
        'touser': 'oYb8l0Z_v6ne_hJMR0M9GI-9nfIo',
        'template_id': 'wOd0s2XUSMxCtScN-7lDGX9z4aD_e7F4bxi8w4M7E3s',
        'data': {
            'thing4':{
                'value': "Maifeng",
            },
            'time1': {
                'value': '21:00'
            },
            'thing3': {
                'value': '1.两数之和 2.lala n'
            },
            'thing2': {
                'value': 'dasa'
            }
        }
    }
    resp = ss.post(url, json=datas)
    print(resp.text)

、、