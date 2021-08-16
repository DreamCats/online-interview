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

  // 实现一个max的云函数功能

  // let a = event.a;
  // let b = event.b;
  // let c = a <= b ? b : a;
  // return c;
  let url = event.url
  let res = await cloud.downloadFile({
    fileID: url,
  })
  let buffer = res.fileContent;
  return buffer.toString();
}