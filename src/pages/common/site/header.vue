<template>
  <div class="header">
    <span @click="back"></span>
    <p v-if="title">{{title}}</p>
    <slot></slot>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'SiteHeader',
  props: {
    title: String
  },
  computed: {
    ...mapState(['ly'])
  },
  methods: {
    back () {
      if (window.history.length <= 1) {
        console.log(111, window.history.length, this.$route.name)
        this.setUid('0')
        this.setToken('0')
        this.ly.invokeApp('nav.close')
      } else {
        // this.$router.back(-1)
        const arr = (sessionStorage.getItem('routers') && sessionStorage.getItem('routers').split(',')) || []
        // console.log(778976, arr[arr.length - 2])
        if (arr.length > 1) {
          if (arr[arr.length - 1].indexOf('/category/') > -1) {
            sessionStorage.removeItem('activeSizer')
            sessionStorage.removeItem('activeOrder')
          } else if (arr[arr.length - 1].indexOf('/forbid') > -1) {
            this.setUid('0')
            this.setToken('0')
            this.ly.invokeApp('nav.close')
          }
          this.$router.replace(arr[arr.length - 2])
        } else {
          this.setUid('0')
          this.setToken('0')
          this.ly.invokeApp('nav.close')
        }
      }
    },
    ...mapMutations(['setUid', 'setToken'])
  },
  mounted () {
    // ly.config({
    //   appId: '9c0149a12ad66e6426073e03e187f981', // 必填，应用ID
    //   apiList: ['account.getUserInfo', 'account.login', 'device.getDeviceInfo', 'nav.close'] // 必填，需要使用的jsapi列表
    // })
  }
}
</script>
<style lang="stylus" scoped>
  .header
    width:3.75rem
    height:.44rem
    background:#fff
    position:fixed
    overflow:hidden
    top:0
    left:0
    right:0
    font-size:0
    line-height:0
    padding-top:.2rem
    z-index:999
    border-bottom:.005rem solid #ededed
    span
      display:inline-block
      width:.45rem
      height:.44rem
      background:url(../../../assets/images/common/back.png) no-repeat center center
      background-size:.1rem .18rem
      vertical-align: middle
    p
      display:inline-block
      font-size:.18rem
      line-height:.44rem
      color:#333
      width:2.9rem
      overflow:hidden
      text-overflow:ellipsis
      white-space:nowrap
      vertical-align: middle
      text-align:center
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)
  .header
    padding-top:.44rem
</style>
