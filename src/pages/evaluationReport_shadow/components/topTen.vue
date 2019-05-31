<template>
  <div class="threeAdvantageDetail">
    <ReportTitle :title=title />
    <div class="content">
      <div class="keyWord" v-for='(ele,index) in allThemeList' :key=index>
        <p>{{index+1}}. &nbsp;&nbsp;{{ele}}</p>
      </div>
      <div class="shadow">完整报告解锁后可见</div>
    </div>
    
</div>
</template>
<script>
import ReportTitle from './reportTitle'
export default {
  props: {
    allThemeList: Array
  },
  data () {
    return {
      title: '您孩子的优势排序',
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
  },
  methods: {
  },
  components: {
    ReportTitle
  }
}
</script>
<style lang="stylus" scoped>
  .threeAdvantageDetail {
    p {
      font-size: 0.12rem;
      color: #555b77;
    }
    .content {
      padding: 0.15rem 0.1rem 0.15rem 0.1rem;
      border: 0.01rem dashed #ffa366;
      border-radius: 0.04rem;
      font-size .12rem
      padding .15rem auto
      line-height .25rem
      color #555B77
      overflow hidden
      position relative
      .shadow {
        position absolute
        left .05rem
        top .9rem
        width 3rem
        height calc(100% - .9rem)
        background rgba(204,204,204, .98)
        display flex
        justify-content center
        align-items center
        font-size .14rem
        color #363a4d
      }
      .keyWord {
        // text-align center
      }
    }
  }
</style>
