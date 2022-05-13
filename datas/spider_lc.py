import requests
import pymysql
import time
ss = requests.session()


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

def save_file(file_name, content):
    with open(file_name, 'w') as f:
        f.write(content)

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
      try:
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
          str = f">难度：{item['difficulty']}\n>热度：{item['solutionNum']}\n>url:{item['url']}\n\n## 题目 \n\n{item['content']}\n## 示例 \n"
          save_file(f'./12_bak/{item["id"]}.{item["title"]}.md', str)
          items.append(item)
      except Exception as e:
          # print(e)
          continue

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


for page in range(30):
    get_lc_list(page)
    time.sleep(2)
print('ok...')
