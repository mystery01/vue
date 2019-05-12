import axios from 'axios'
import md5 from 'js-md5'
import store from '../../store'
axios.defaults.withCredentials = true
// let serverUrl = '/api/v1' // 本地调试时
// let serverUrl = 'http://i.qijizuopin.net/' // 本地服务器部署
// let serverUrl = 'api/' // 本地服务器部署
// let serverUrl = 'https://i_pre.qijizuopin.com/' // 打包部署上预发布时
let serverUrl = 'http://39.106.231.192/' // 打包部署上线时

axios.defaults.withCredentials = true

export default {
  request (param) {
    axios.defaults.withCredentials = true;
    return axios({
      // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      method: param.method || 'get',
      url: serverUrl + param.url || '',
      data: param.data || ''
    }).then(res => res.data)
  },
  signName (param) {
    // console.log('data', param.data)
    var ordered = this.objKeySort(param.data)
    var orderedStr = ''
    for (var i in ordered) {
      // if (ordered[i] instanceof Array) {
      //   orderedStr += i + ':[' + ordered[i] + ']'
      // } else {
      //   orderedStr += i + ':' + ordered[i]
      // }
      if (typeof ordered[i] !== 'undefined') {
        orderedStr += i + ':' + ordered[i]
      }
    }
    // alert('/' + param.url + param.method + orderedStr + 'qijiyuedu-h5')
    // var res = md5(param.url + '+' + param.method + '+' + orderedStr + '+' + 'qijiyuedu-h5')
    var res = md5('/' + param.url + param.method + orderedStr + 'qijiyuedu-h5')
    return res
  },
  objKeySort (obj) { // 排序的函数
    var newkey = Object.keys(obj).sort() // 先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
    var newObj = {} // 创建一个新的对象，用于存放排好序的键值对
    for (var i = 0; i < newkey.length; i++) { // 遍历newkey数组
      newObj[newkey[i]] = obj[newkey[i]]
    }
    return newObj // 返回排好序的新对象
  },
  // evn () {
  //   var u = navigator.userAgent
  //   if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
  //     return 'android'
  //   } else {
  //     return 'ios'
  //   }
  // },
  getQjToken (xmLoginObj, callback) {
    this.request({
      data: xmLoginObj.isLogin ? {
        xima_uid: xmLoginObj.uid,
        xima_token: xmLoginObj.token,
        nickname: xmLoginObj.nickName,
        logoPic: xmLoginObj.imgUrl,
        uuid: xmLoginObj.uuid,
        timestampName: Math.round(new Date().getTime() / 1000)
      } : {
        uuid: xmLoginObj.uuid,
        timestampName: Math.round(new Date().getTime() / 1000)
      },
      method: 'post',
      url: xmLoginObj.isLogin ? 'v1/user/token' : 'v1/user/visitor',
      succ (res) {
        if (res.data.code === 200 && res.data.data) {
          store.commit('setToken', res.data.data.token)
          store.commit('setQjuid', res.data.data.uid)
        }
      },
      callback: callback
    })
  },
  __sdonclick (btvalue) {
    var objForBi = document.getElementById('added_object_for_bi')
    if (objForBi) {
      objForBi.value = btvalue
      objForBi.click()
    }
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
  },
  reLogin (callback) {
    let that = this
    // 判断登陆状态&换取token
    store.state.ly.invokeApp('account.getUserInfo', { // 判断是否登陆
      success (data) {
        if (data.isLogin) { // 登陆用户获取登陆信息及uuid换token
          store.commit('setUid', data.uid)
          store.state.ly.invokeApp('device.getDeviceInfo', {
            success (res) {
              store.commit('setUuid', res.uuid)
              let msgObj = Object.assign(data, {
                uuid: res.uuid
              })
              that.getQjToken(msgObj, callback)
            }
          })
        } else {
          store.state.ly.invokeApp('device.getDeviceInfo', { // 未登陆用户用uuid换token
            success (res) {
              store.commit('setUuid', res.uuid)
              let msgObj = {
                uuid: res.uuid
              }
              that.getQjToken(msgObj, callback)
            }
          })
        }
      }
    })
  }
}
