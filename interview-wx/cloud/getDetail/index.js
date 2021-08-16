// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
  let id = event.id;
  let type = event.type;
  // let database = type === '算法' ? 'alg' : 'mj';
  let database = ''
  if (type === '算法') {
    database = 'alg'
  } else if (type === '面经') {
    database = 'mj'
  } else {
    database = 'kw'
  }
  return cloud.database().collection(database)
    .where({
      _id: id
    })
    .get() 
}