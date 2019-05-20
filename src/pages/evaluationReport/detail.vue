<template>
  <div class="report">
    <div class="title_bg"></div>
    <div class="content">
      <div class="container">
        <p class="result">少儿优势测评结果查询</p>
        <span class="name"><span>{{name}}</span>你是这样的独特存在</span>
        <Advantage :themeList = 'themeList'/>
        <Menu />
        <ThreeAdvantageDetail :themeList = 'themeList'/>
        <Appearance :themeList = 'themeList'/>
        <AdviseChr :themeList = 'themeList'/>
        <AdvisePar :themeList = 'themeList'/>
      </div>
    </div>
    <div class="title_buttom"></div>
  </div>
</template>
<script>

import Advantage from './components/advantage'
import Menu from './components/menu'
import ThreeAdvantageDetail from './components/threeAdvantageDetail'
import Appearance from './components/appearance'
import AdvisePar from './components/advisePar'
import AdviseChr from './components/advisechr'
import Api from '../../assets/js/util'
export default {
  data () {
    return {
      isLoading: false,
      themeList: [],
      name: ''
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
    document.title = '少儿优势测评'
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    // 获取数据
    fetchData() {
      const id = this.$route.params.id
      const url = `c/api/get_full_report?exam_id=${id}`
      Api.request({
        url
      }).then((res)=>{
        this.themeList = res.data.themeList
        this.name = res.data.childName
      })
    }
  },
  components: {
    Advantage,
    Menu,
    ThreeAdvantageDetail,
    Appearance,
    AdviseChr,
    AdvisePar
  }
}
</script>
<style lang="stylus" scoped>
  .report{
    width: 100%
    background: #5B7AFF
    font-size: .16rem
    .title_bg {
      width 100%
      height 1.28rem
      background url('../../assets/images/common/image_title@2x.png')
      background-size 100% 100%
    }
    .content {
      padding: .15rem
      margin-top -.15rem
      .container {
        padding: .15rem
        background #ffffff
        border-radius .04rem
        .result {
          font-size .16rem
          color #363A4D 
          height .13rem
          margin-bottom .26rem !important
        }
        .name {
          font-size .12rem
          color #363A4D
          height .22rem
          span {
            color #5978FF 
            font-size .24rem
            margin-right .1rem
          }
        }
      }
    }
    .title_buttom {
      width 100%
      height .79rem
      background url('../../assets/images/common/image_buttom@2x.png')
      background-size 100% 100%
    }
  }
</style>
