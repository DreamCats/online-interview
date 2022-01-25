import requests
import pymysql
import time
ss = requests.session()
db = pymysql.connect(
    host='39.108.93.119',
    user='root',
    password='123456',
    db='interview',
    port=3306,
    charset='utf8'
)

lc_base_url = 'https://leetcode-cn.com/graphql/'
query_val = '''
query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
  problemsetQuestionList(
    categorySlug: $categorySlug
    limit: $limit
    skip: $skip
    filters: $filters
  ) {
    hasMore
    total
    questions {
      acRate
      difficulty
      freqBar
      frontendQuestionId
      isFavor
      paidOnly
      solutionNum
      status
      title
      titleCn
      titleSlug
      topicTags {
        name
        nameTranslated
        id
        slug
      }
      extra {
        hasVideoSolution
        topCompanyTags {
          imgUrl
          slug
          numSubscribed
        }
      }
    }
  }
}
'''
question_val = '''
query questionData($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    questionId
    questionFrontendId
    categoryTitle
    boundTopicId
    title
    titleSlug
    content
    translatedTitle
    translatedContent
    isPaidOnly
    difficulty
    likes
    dislikes
    isLiked
    similarQuestions
    contributors {
      username
      profileUrl
      avatarUrl
      __typename
    }
    langToValidPlayground
    topicTags {
      name
      slug
      translatedName
      __typename
    }
    companyTagStats
    codeSnippets {
      lang
      langSlug
      code
      __typename
    }
    stats
    hints
    solution {
      id
      canSeeDetail
      __typename
    }
    status
    sampleTestCase
    metaData
    judgerAvailable
    judgeType
    mysqlSchemas
    enableRunCode
    envInfo
    book {
      id
      bookName
      pressName
      source
      shortDescription
      fullDescription
      bookImgUrl
      pressImgUrl
      productUrl
      __typename
    }
    isSubscribed
    isDailyQuestion
    dailyRecordStatus
    editorType
    ugcQuestionId
    style
    exampleTestcases
    __typename
  }
}
'''


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


def get_lc_list(current_page):
    '''
    '''
    datas = {
        'operationName': "problemsetQuestionList",
        'query': query_val,
        'variables': {
            'categorySlug': "",
            'filters': {},
            'limit': 50,
            'skip': current_page * 50
        }
    }
    resp = ss.post(url=lc_base_url, json=datas)
    datas = resp.json()['data']['problemsetQuestionList']
    questions = datas['questions']  # list
    items = []
    for q in questions:
        if q['solutionNum'] < 500:
            continue
        item = {
            'difficulty': q['difficulty'],
            'id': q['frontendQuestionId'],
            'solutionNum': q['solutionNum'],
            'title': q['titleCn'],
            'titleSlug': q['titleSlug'],
            'content': transferContent(get_lc_question(q['titleSlug'])),
            'url': f"https://leetcode-cn.com/problems/{q['titleSlug']}",
        }
        tag_id = 47 if q['difficulty'] == 'EASY' else (
            48 if q['difficulty'] == 'MEDIUM' else 49)
        print(item['title'])
        with db.cursor() as conn:
            try:
                sql = f'''INSERT INTO article(tag_id, n_id, content, url, title) VALUES({int(tag_id)}, {int(item['id'])}, "{item['content']}", "{item['url']}", "{item['title']}")'''
                conn.execute(sql)
                db.commit()
            except Exception as e:
                db.rollback()
                print('sql:', e)
            items.append(item)


def get_lc_question(titleSlug):
    '''
    '''
    datas = {
        'operationName': "questionData",
        'query': question_val,
        'variables': {
            'titleSlug': titleSlug,
        }
    }
    resp = ss.post(url=lc_base_url, json=datas)
    return resp.json()['data']['question']['translatedContent']


for page in range(40):
    get_lc_list(page)
    time.sleep(1)
print('ok...')


def get_haha():
    print('奇怪了')
    print('hahah')
    print('dasdsa')
