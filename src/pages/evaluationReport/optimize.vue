<template>
  <div class="report">
    <div class="title_bg"></div>
    <div class="content">
      <div class="container">
        <p class="result">少儿优势测评结果查询</p>
        <span class="name"><span>{{name}}</span>你是这样的独特存在</span>
        <Advantage :themeList = 'themeList'/>
        <TopOne :themeList = 'themeList' @changeCommon='changeCommon'/>
        <TopTwo :themeList = 'themeList' @changeCommon='changeCommon'/>
        <TopThree :themeList = 'themeList' @changeCommon='changeCommon'/>
        <DefaultModal 
          :themeList = 'themeList'
          v-if='showModal' 
          @changeDefaultModal='changeDefaultModal'
        />
        <CommonModal
          :keys = 'keys'
          :themeList = 'themeList'
          @changeCommon='changeCommon'
          v-if='showCommon' 
         />
        <TopTen/>
      </div>
    </div>
    <div class="title_buttom"></div>
  </div>
</template>
<script>

import TopOne from './components/TopOne'
import TopTwo from './components/TopTwo'
import TopThree from './components/TopThree'
import TopTen from './components/TopTenNew'
import DefaultModal from './components/defaultModal'
import CommonModal from './components/commonModal'
import Advantage from './components/advantage'
import Api from '../../assets/js/util'
export default {
  data () {
    return {
      isLoading: false,
      themeList: [],
      allThemeList: [],
      name: '',
      showModal: false,
      showCommon: false,
      keys: ''
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
    document.title = '少儿优势测评'
    // this.handleValueChange(true)
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    handler (e) {
      e.preventDefault()
    },
    // 解决点传问题
    handleValueChange (val) {
      if(val) {
        document.body.style.overflow = 'hidden'
        document.addEventListener('touchmove', this.handler, { passive: false })
      } else {
        document.body.style.overflow = 'auto'
        document.removeEventListener('touchmove', this.handler, { passive: false })
      }
    },
    // 获取数据
    fetchData() {
      const id = this.$route.params.id
      const url = `c/api/get_full_report?exam_id=${id}`
      Api.request({
        url
      }).then((res)=>{
        this.allThemeList = res.data.allThemeList
        this.themeList = res.data.themeList
        this.name = res.data.childName
      })
    },
    changeDefaultModal() {
      this.showModal = false
      this.handleValueChange()
    },
    changeCommon(params) {
      console.log(params)
      if(params.val) {
        scroll(0,0)
        console.log(this.keys,'keys')
        this.keys = params.type
        console.log(22)
        this.showCommon = true
        console.log(this.keys,'keys')
        this.handleValueChange(true)
      } else {
        let scrollY = sessionStorage.getItem('scrollY')
        // 滚动回原来的位置
        scroll(0,scrollY)
        this.showCommon = false
        this.handleValueChange()
      }
    }
  },
  components: {
    TopOne,
    TopTwo,
    TopThree,
    TopTen,
    DefaultModal,
    Advantage,
    CommonModal,
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
