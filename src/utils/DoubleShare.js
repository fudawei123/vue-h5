import {
  getWeiSignGetWeiSign
} from '@/api/common/api'

export default function (title, summary, pic) {
  const url = window.location.href

  getWeiSignGetWeiSign({
      url
    })
    .then(({
      data
    }) => {
      console.log(data)
      var {
        appid,
        noncestr,
        signature,
        timestamp
      } = data

      console.log(title, pic, url)
      setShareInfo({
        title,
        summary: title,
        pic,
        url,
        // 微信权限验证配置信息，若不在微信传播，可忽略
        WXconfig: {
          swapTitleInWX: true, // 是否标题内容互换（仅朋友圈，因朋友圈内只显示标题）
          appId: appid, // 公众号的唯一标识
          timestamp: timestamp, // 生成签名的时间戳
          nonceStr: noncestr, // 生成签名的随机串
          signature: signature // 签名
        }
      })
    })
}
