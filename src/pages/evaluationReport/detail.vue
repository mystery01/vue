<template>
  <div class="report">
    <div class="content">
      <div class="title">
        <span>麒麟臂</span>
        <span>以下是你独一无二的优势</span>
      </div>
      <Advantage />
      <Menu />
      <ThreeAdvantageDetail />
      <Appearance />
      <AdviseChr />
      <AdvisePar />
    </div>
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
      themeList: []
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
    document.title = '盖洛普优势评测报告'
  },
  mounted() {
    this.getList()
  },
  methods: {
    // 获取数据
    fetchData(id) {
      const url = `c/api/get_full_report?exam_id=${id}`
      Api.request({
        url
      }).then((res)=>{
        this.themeList = res.data.themeList
        console.log(res,'sdsdsdsd')
      })
    },
    getList () {
      Api.request({
        method: 'GET',
        url: 'c/api/query_exam_list'
      }).then((res)=>{
        let id = res.data.examList[0].id
        this.fetchData(id)
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
    height: 100%
    font-size: .16rem
    color #333
    .content {
      padding: .3rem
      .title{
        height: .5rem
        line-height: .5rem
        :nth-child(1) {
          font-size .2rem
        }
        :nth-child(2) {
        }
      }
    }
  }
</style>
