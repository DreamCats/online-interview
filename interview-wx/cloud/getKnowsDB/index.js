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
  let cId = event.cId;
  let count = event.count;
  return cloud.database().collection("kw")
  .skip(count)
  .orderBy('num', 'asc')
  .where({
    c_id: cId
  })
  .get()
}