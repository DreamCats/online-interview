import os, pymysql, uuid, time

db = pymysql.connect(
    host='113.31.114.17',
    user='root',
    password='',
    db='wx_interview',
    port=3306,
    charset='utf8'
)

def load_files():
    files_list = []
    for (root, dirs, files) in os.walk('./'):
        for f in files:
            if f.endswith('.md'):
                files_list.append(root + '/' + f)
    return files_list

def get_text(filename):
    with open(filename, 'r') as f:
        return f.read()

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

m = {
    '1':{'uuid':'6b4fd669bf2d4be59bcb74f6492e5515', 'tag_type': 1},
    '2':{'uuid':'e1468e42ce1a43d3aced7f8b3ae97e32', 'tag_type': 1},
    '3':{'uuid':'d2b77a758936416480004185bfe396d5', 'tag_type': 1},
    '4':{'uuid':'3caa232689284d05a99f1aeeff79858a', 'tag_type': 3},
    '5':{'uuid':'43371b5675a74549833ade74d76c0a24', 'tag_type': 1},
    '6':{'uuid':'bd6b64f0490a4c3db78054257c4daf7a', 'tag_type': 1},
    '7':{'uuid':'7464184961714b6893e7151216d1691a', 'tag_type': 2},
    '8':{'uuid':'85d217125843478b8f21537e5377157f', 'tag_type': 2},
    '9':{'uuid':'36f25136333a43ab88b496d24107d155', 'tag_type': 2},
    '10':{'uuid':'b8e313c1b97e48adbdbd15d682f65b71', 'tag_type': 2},
    '11':{'uuid':'d8573717569347758a4197a44ea3e24d', 'tag_type': 2},
    '12':{'uuid':'fdc2a939a72846458cf592f8fcbc291c', 'tag_type': 4},
    '13':{'uuid':'0199aac3351a442a94efa37d26c11efd', 'tag_type': 4},
    '14':{'uuid':'2bc32089dabd4cf2a4e7c3698c81b7c5', 'tag_type': 4}
}

def getUUID(name):
    return uuid.uuid3(uuid.NAMESPACE_DNS, name)

def getTime():
    return time.strftime("%Y-%m-%d %H:%M", time.localtime())

files_list = load_files()
for f in files_list:
    print(f)
    content = transferContent(get_text(f))
    try:
        tag_id = int(f.split('/')[1]) + 1
    except Exception as e:
        # print(e)
        continue
    title = f.split('/')[-1].split('.md')[0]
    s_id = title.split('.')[0]
    tag_type = m[str(tag_id)]['tag_type']
    tc_uuid = m[str(tag_id)]['uuid']
    uuid_bak = getUUID(f'{tag_id}-{s_id}-{tag_type}')
    publish_time = getTime()
    print(uuid_bak)
    url = f
    with db.cursor() as conn:
        sql_search = f'''select id from wx_items where uuid = "{uuid_bak}"'''
        res_search = conn.execute(sql_search)
        if res_search == 0:
            # 不存在
            sql_insert = f'''INSERT INTO wx_items(uuid, tc_uuid, s_id, tag_type, title, publish_time, url, content) VALUES("{uuid_bak}", "{tc_uuid}", {int(s_id)}, {tag_type}, "{title}", "{publish_time}", "{url}", "{content}")'''
            res_insert = conn.execute(sql_insert)
        else:
            # 存在, update
            sql_update = f'''update wx_items set title="{title}", publish_time="{publish_time}", content="{content}" where uuid="{uuid_bak}"'''
            res_update = conn.execute(sql_update)
        db.commit()
