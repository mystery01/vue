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
export default {
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
    document.title = '盖洛普优势评测报告'
  },
  methods: {
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
