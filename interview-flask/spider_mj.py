from pyquery import PyQuery as pq
import time,requests,json,pymysql,base64,schedule


s = requests.session()
db = pymysql.connect(
    host='39.108.93.119',
    user='root',
    password='123456',
    db='interview',
    port=3306,
    charset='utf8'
)
# 修改c_id参数
cs = {
    '0': {'tagId':665, 'expTag':644, 'tag_id': 17}, # 字节前端 13
    '1': {'tagId':665, 'expTag':639, 'tag_id': 18}, # 字节后端 26
    '2': {'tagId':134, 'expTag':644, 'tag_id': 23}, # 阿里前端 7
    '3': {'tagId':134, 'expTag':639, 'tag_id': 20}, # 阿里后端 26
    '4': {'tagId':138, 'expTag':644, 'tag_id': 34}, # 腾讯前端 12
    '5': {'tagId':138, 'expTag':639, 'tag_id': 25}, # 腾讯后端 19
    '6': {'tagId':898, 'expTag':644, 'tag_id': 19}, # 快手前端 3
    '7': {'tagId':898, 'expTag':639, 'tag_id': 32}, # 快手后端 9
    '8': {'tagId':151, 'expTag':644, 'tag_id': 30}, # 京东前端 5
    '9': {'tagId':151, 'expTag':639, 'tag_id': 29}, # 京东后端 13
    '10': {'tagId':732, 'expTag':644,'tag_id': 26}, # 拼多多前端 2
    '11': {'tagId':732, 'expTag':639,'tag_id': 24}, # 拼多多后端 5
    '12': {'tagId':179, 'expTag':644,'tag_id': 22}, # 美团前端 9
    '13': {'tagId':179, 'expTag':639,'tag_id': 27}, # 美团后端 22
    '14': {'tagId':139, 'expTag':644,'tag_id': 21}, # 百度前端 5
    '15': {'tagId':139, 'expTag':639,'tag_id': 31}, # 百度后端 10
    '16': {'tagId':758, 'expTag':644,'tag_id': 33}, # 猿辅导前端 2
    '17': {'tagId':758, 'expTag':639,'tag_id': 28}, # 猿辅导后端 5
    '18': {'tagId':149, 'expTag':644,'tag_id': 35}, # 网易前端 5
    '19': {'tagId':149, 'expTag':639,'tag_id': 44}, # 网易后端 11
    '20': {'tagId':147, 'expTag':644,'tag_id': 45}, # 小米前端 4
    '21': {'tagId':147, 'expTag':639,'tag_id': 38}, # 小米后端 8
    '22': {'tagId':239, 'expTag':644,'tag_id': 41}, # 华为前端 1
    '23': {'tagId':239, 'expTag':639,'tag_id': 46}, # 华为后端 9
    '24': {'tagId':652, 'expTag':644,'tag_id': 37}, # 滴滴前端 2
    '25': {'tagId':652, 'expTag':639,'tag_id': 40}, # 滴滴后端 6
    '26': {'tagId':153, 'expTag':644,'tag_id': 42}, # 携程前端 2
    '27': {'tagId':153, 'expTag':639,'tag_id': 36}, # 携程后端 3
    '28': {'tagId':935, 'expTag':644,'tag_id': 39}, # 哔哩前端 1
    '29': {'tagId':935, 'expTag':639,'tag_id': 43}, # 哔哩后端 1
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


def addMjDb(item):
    '''添加
    '''
    with db.cursor() as conn:
        # 添加
        try:
            sql = f'''INSERT INTO mj(tag_id, publish_time, title, url, content) VALUES({int(item['tag_id'])}, "{item['publish_time']}", "{item['title']}", "{item['url']}", "{item['content']}")'''
            conn.execute(sql)
            db.commit()
        except Exception as e:
            db.rollback()
            print('addMjDb:', e)
            return False
    return True


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
            'tag_id': cs[c_id]['tag_id'],
            'title' : title,
            'publish_time': t,
            'url': f'https://www.nowcoder.com/discuss/{value["postId"]}'
        }
        res = s.get(url=url)
        doc = pq(res.text)
        ct = doc('.post-topic-des')
        content = f'''[原文链接]("{url})\n{item["title"]}\n## 时间:{item["publish_time"]}\n## 内容:\n{ct.text()}'''
        item['content'] = transferContent(content)
        print(item['title'])
        # 添加数据库
        if not addMjDb(item):
            continue

def run():
    for idx in range(0, 30):
        c_id = str(idx)
        page = 1
        totalPage = 1
        tagId = cs[c_id]['tagId'] 
        expTag = cs[c_id]['expTag'] 
        url = f'https://www.nowcoder.com/discuss/tag/{tagId}-json?token=&type=2&tagId={tagId}&subType=0&appendTagId=0&page={page}&order=0&expTag={expTag}&query=&_=1611144993314'
        res = s.get(url=url)
        datas = res.json()
        num = datas['data']['totalCnt']
        totalPage = datas['data']['totalPage']
        totalPage = 1 if totalPage >= 1 else totalPage
        print('序列：' + c_id)
        # 一次性全部抓完，不知道封不封ip哈，速度太快，可以延迟
        for idx in range(page, totalPage + 1):
            url = f'https://www.nowcoder.com/discuss/tag/{tagId}-json?token=&type=2&tagId={tagId}&subType=0&appendTagId=0&page={idx}&order=0&expTag={expTag}&query=&_=1611144993314'
            spider(url, c_id)
            time.sleep(1)
    print('今天抓取结束...')

if __name__ == "__main__":
    print("每日定时抓取面经存到数据库中...")
    schedule.every().day.at("20:18").do(run)
    while True:
        schedule.run_pending()   # 运行所有可以运行的任务
        time.sleep(2) 

