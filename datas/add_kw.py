import os, pymysql, uuid, time

db = pymysql.connect(
    host='113.31.114.17',
    user='root',
    password='xxxx',
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
    '1':{'uuid':'6b4fd669bf2d4be59bcb74f6492e5515'},
    '2':{'uuid':'e1468e42ce1a43d3aced7f8b3ae97e32'},
    '3':{'uuid':'d2b77a758936416480004185bfe396d5'},
    '4':{'uuid':'3caa232689284d05a99f1aeeff79858a'},
    '5':{'uuid':'43371b5675a74549833ade74d76c0a24'},
    '6':{'uuid':'bd6b64f0490a4c3db78054257c4daf7a'},
    '7':{'uuid':'7464184961714b6893e7151216d1691a'},
    '8':{'uuid':'85d217125843478b8f21537e5377157f'},
    '9':{'uuid':'36f25136333a43ab88b496d24107d155'},
    '10':{'uuid':'b8e313c1b97e48adbdbd15d682f65b71'},
    '11':{'uuid':'d8573717569347758a4197a44ea3e24d'},
}

def getUUID(name):
    return uuid.uuid3(uuid.NAMESPACE_DNS, name)

def getTime():
    return time.strftime("%Y-%m-%d %H:%M", time.localtime())

files_list = load_files()
for f in files_list:
    print(f)
    content = transferContent(get_text(f))
    tag_id = int(f.split('/')[1]) + 1
    title = f.split('/')[-1].split('.md')[0]
    s_id = title.split('.')[0]
    tc_uuid = m[str(tag_id)]['uuid']
    uuid_bak = getUUID(title)
    publish_time = getTime()
    print(uuid_bak)
    url = f
    with db.cursor() as conn:
        sql = f'''INSERT INTO wx_items(uuid, tc_uuid, s_id, title, publish_time, url, content) VALUES("{uuid_bak}", "{tc_uuid}", {int(s_id)}, "{title}", "{publish_time}", "{url}", "{content}")'''
        conn.execute(sql)
        db.commit()
