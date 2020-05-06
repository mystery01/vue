import axios from 'axios'

let serverUrl = 'http://39.106.231.192/' // 打包部署上线时

// let serverUrl = 'http://empoweru.xyz.com/' // 打包部署上线时
// let serverUrl = ''
export default {
  request (param) {
    axios.defaults.withCredentials = true
    return axios({
      // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      method: param.method || 'get',
      url: serverUrl + param.url || '',
      data: param.data || ''
    }).then(res => res.data)
  },
  env () {
    var u = navigator.userAgent
    return {
      trident: u.indexOf('Trident') > -1, // IE内核
      presto: u.indexOf('Presto') > -1, // opera内核
      webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或uc浏览器
      iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, // 是否iPad
      webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
      phoneApp: u.indexOf('iting') > -1, // 是否在手机app内
      weiXin: u.indexOf('MicroMessenger') > -1, // 是否在微信内
      google: u.toLowerCase().match(/\s?iting\(?(\w+)*\)?\/(\d(\.\d{1,3}){2,3})\/?(android|ios)?_?(\d)?/)
    }
  }
}
