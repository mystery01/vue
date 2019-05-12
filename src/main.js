// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/common.css'
// import './assets/styles/border.css'
import './assets/js/flexible.js'
// import _qj from './assets/js/util.js'
// import 'amfe-flexible'
// import _journal from '../static/journal'
import store from './store'
// import fastClick from 'fastclick'
import Mint from 'mint-ui' //ui
import 'mint-ui/lib/style.css'
import 'babel-polyfill'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'}) //全局引用
Vue.use(Mint)
// 123
Vue.config.productionTip = false
// fastClick.attach(document.body)



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
