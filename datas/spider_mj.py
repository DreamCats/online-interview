from pyquery import PyQuery as pq
import time,requests,json,pymysql,base64,schedule,uuid


s = requests.session()
db = pymysql.connect(
    host='113.31.114.17',
    user='root',
    password='xxx',
    db='wx_interview',
    port=3306,
    charset='utf8'
)
# 修改c_id参数
cs = {
    '1': {'tagId':665, 'expTag':644, 'uuid': '3dd371f979db41c786606eeda47580c4'}, # 字节前端 13
    '2': {'tagId':665, 'expTag':639, 'uuid': 'a0adad4c677f43e79d200ae4b864a37c'}, # 字节后端 26
    '3': {'tagId':134, 'expTag':644, 'uuid': '2f0440dbe491437487a5e096edf2a355'}, # 阿里前端 7
    '4': {'tagId':134, 'expTag':639, 'uuid': 'f8ca2500d425483f8891bbe590248616'}, # 阿里后端 26
    '5': {'tagId':138, 'expTag':644, 'uuid': '7a89cff5df2d4ebb9993d0ba986c6d98'}, # 腾讯前端 12
    '6': {'tagId':138, 'expTag':639, 'uuid': '8cb8d566f9e24198935c382b2d1d56cd'}, # 腾讯后端 19
    '7': {'tagId':898, 'expTag':644, 'uuid': '933e5d7e8c224ab1ad663f5dba6f3b64'}, # 快手前端 3
    '8': {'tagId':898, 'expTag':639, 'uuid': '3695a49d5534464d85131e3f22318f7d'}, # 快手后端 9
    '9': {'tagId':151, 'expTag':644, 'uuid': '626bd457b5ee4db1914f8a87e9c9944f'}, # 京东前端 5
    '10': {'tagId':151, 'expTag':639, 'uuid': '4932c5cd44ff405d82b60b4021b1f76c'}, # 京东后端 13
    '11': {'tagId':732, 'expTag':644,'uuid': 'b2079ebe32a94537ba0e6669b42c5496'}, # 拼多多前端 2
    '12': {'tagId':732, 'expTag':639,'uuid': '9e3c9366a4114d41a432f2c4fba1f801'}, # 拼多多后端 5
    '13': {'tagId':179, 'expTag':644,'uuid': 'b7a0b038c5ba44c4b39576e9a89e4a3f'}, # 美团前端 9
    '14': {'tagId':179, 'expTag':639,'uuid': '3891f18847a940a299851a471848754f'}, # 美团后端 22
    '15': {'tagId':139, 'expTag':644,'uuid': 'a6543a816024486cb863c7e1695abb66'}, # 百度前端 5
    '16': {'tagId':139, 'expTag':639,'uuid': 'a6543a816024486cb863c7e1695abb65'}, # 百度后端 10
    '17': {'tagId':149, 'expTag':644,'uuid': 'b3fafc7cbaaa44aabc807cb95e7f325c'}, # 网易前端 5
    '18': {'tagId':149, 'expTag':639,'uuid': 'b3fafc7cbaaa44aabc807cb95e7f3251'}, # 网易后端 11
    # '20': {'tagId':147, 'expTag':644,'tag_id': 45}, # 小米前端 4
    # '21': {'tagId':147, 'expTag':639,'tag_id': 38}, # 小米后端 8
    # '22': {'tagId':239, 'expTag':644,'tag_id': 41}, # 华为前端 1
    # '23': {'tagId':239, 'expTag':639,'tag_id': 46}, # 华为后端 9
    # '24': {'tagId':652, 'expTag':644,'tag_id': 37}, # 滴滴前端 2
    # '25': {'tagId':652, 'expTag':639,'tag_id': 40}, # 滴滴后端 6
    # '26': {'tagId':153, 'expTag':644,'tag_id': 42}, # 携程前端 2
    # '27': {'tagId':153, 'expTag':639,'tag_id': 36}, # 携程后端 3
    # '28': {'tagId':935, 'expTag':644,'tag_id': 39}, # 哔哩前端 1
    # '29': {'tagId':935, 'expTag':639,'tag_id': 43}, # 哔哩后端 1
}

dirs = f'mianjing/'


def time2str(value):
    return time.strftime("%Y-%m-%d %H:%M", time.localtime(value // 1000))

def transferContent(content):
    if content is None:
        return None
    else:
        stri = ""
        for c in content:
            if c == '"':
                stri += c.replace('"', '\\\"')
            elif c == "'":
                stri += c.replace("'", "\\\'")
            elif c == "\\":
                stri += "\\\\"
            else:
                stri += str(c)
    return stri


def addDbItems(item):
    '''添加
    '''
    with db.cursor() as conn:
        # 添加
        try:
            sql = f'''INSERT INTO wx_items(uuid, tc_uuid, title, publish_time, url, content) VALUES({int(item['uuid'])}, "{item['tc_uuid']}", "{item['title']}", "{item['publish_time']}", "{item['url']}", "{item['content']}")'''
            conn.execute(sql)
            db.commit()
        except Exception as e:
            db.rollback()
            print('addWxItems:', e)
            return False
    return True

def getUUID(name):
    return uuid.uuid3(uuid.NAMESPACE_DNS, name)

def spider(url, c_id):
    ''' 抓取
    '''
    res = s.get(url=url)
    datas = res.json()
    datas = datas['data']['discussPosts']
    for idx, value in enumerate (datas):
        url = f'https://www.nowcoder.com/discuss/{value["postId"]}'
        t = time2str(value['createTime'])
        title = value['postTitle'],
        title = title[0] if isinstance(title, tuple) else title
        item = {
            'tc_uuid': cs[c_id]['uuid'],
            'title' : title,
            'publish_time': t,
            'url': f'https://www.nowcoder.com/discuss/{value["postId"]}',
            'uuid': getUUID(url),
        }
        res = s.get(url=url)
        doc = pq(res.text)
        ct = doc('.post-topic-des')
        content = f'''[原文链接]("{url})\n{item["title"]}\n## 时间:{item["publish_time"]}\n## 内容:\n{ct.text()}'''
        item['content'] = transferContent(content)
        print(item['title'])
        # 添加数据库
        if not addDbItems(item):
            continue

def run():
    for idx in range(1, 19):
        c_id = str(idx)
        page = 1
        totalPage = 1
        tagId = cs[c_id]['tagId']
        expTag = cs[c_id]['expTag']
        print('序列：' + c_id)
        for idx in range(page, totalPage + 1):
            url = f'https://www.nowcoder.com/discuss/tag/{tagId}-json?token=&type=2&tagId={tagId}&subType=0&appendTagId=0&page={idx}&order=0&expTag={expTag}&query=&_=1611144993314'
            spider(url, c_id)
            time.sleep(1)
    print('今天抓取结束...')

if __name__ == "__main__":
    # run()
    print("每日定时抓取面经存到数据库中...")
    schedule.every().day.at("01:00").do(run)
    while True:
        schedule.run_pending()   # 运行所有可以运行的任务
        time.sleep(2)

