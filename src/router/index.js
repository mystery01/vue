import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store'
import util from '../assets/js/util.js'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    { // 首页
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/index')
    },
    { // 评测报告
      path: '/report',
      name: 'report',
      component: () => import('@/pages/evaluationReport/index')
    },
    { // 详细评测报告
      path: '/detail',
      name: 'detail',
      component: () => import('@/pages/evaluationReport/detail')
    },
    { // 测评首页
      path: '/main',
      name: 'main',
      component: () => import('@/pages/main/index')
    },
    { // 测评查看报告
      path: '/reports',
      name: 'reports',
      component: () => import('@/pages/reports/index')
    },
    { // 测评准备
      path: '/prepare',
      name: 'prepare',
      component: () => import('@/pages/prepare/index')
    },
    { // 开始测评
      path: '/evaluation',
      name: 'evaluation',
      component: () => import('@/pages/evaluation/index')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
router.beforeEach((to, from, next) => {
  // store.commit('setLy', window.ly)
  // store.state.ly.config({
  //   appId: '9c0149a12ad66e6426073e03e187f981', // 必填，应用ID
  //   apiList: ['account.login', 'account.getUserInfo', 'device.getDeviceInfo', 'nav.close', 'storage.getItem', 'storage.setItem'] // 必填，需要使用的jsapi列表
  // })
  // store.state.ly.ready(() => {
  //   store.commit('setLy', window.ly)
  //   if (store.state.token === '0') {
  //     store.state.ly.invokeApp('account.getUserInfo', { // 判断是否登陆
  //       success (data) {
  //         if (data.isLogin) { // 登陆用户获取登陆信息及uuid换token
  //           store.commit('setUid', data.uid)
  //           store.state.ly.invokeApp('device.getDeviceInfo', {
  //             success (res) {
  //               store.commit('setUuid', res.uuid)
  //               let msgObj = Object.assign(data, {
  //                 uuid: res.uuid
  //               })
  //               _qj.getQjToken(msgObj, next)
  //             }
  //           })
  //         } else {
  //           store.state.ly.invokeApp('device.getDeviceInfo', { // 未登陆用户用uuid换token
  //             success (res) {
  //               store.commit('setUuid', res.uuid)
  //               let msgObj = {
  //                 uuid: res.uuid
  //               }
  //               _qj.getQjToken(msgObj, next)
  //             }
  //           })
  //         }
  //       }
  //     })
  //   } else {
  //     next()
  //   }
  // })
  if (!util.env().phoneApp) {
    next() // 网页调试加上
  }
})

// 动态加载代码
var loadJS = function (url, callback) {
  var head = document.getElementsByTagName('head')[0]
  var script = document.createElement('script')
  script.src = url
  var done = false
  script.onload = script.onreadystatechange = function () {
    if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
      done = true
      callback && callback()
      script.onload = script.onreadystatechange = null
      head.removeChild(script)
    }
  }
  head.appendChild(script)
}
loadJS('')
export default router
