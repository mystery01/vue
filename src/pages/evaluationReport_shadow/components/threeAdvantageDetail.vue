<template>
  <div class="threeAdvantageDetail">
    <ReportTitle :title=title />
    <div class="keyWord" v-for='(ele,index) in themeList' :key=index>
        <p>{{ele.name}}</p>
        <div class="content">
          {{ele.description}}
          <div class="shadow"></div>
        </div>
    </div>
</div>
</template>
<script>
import ReportTitle from './reportTitle'
export default {
  props: {
    themeList: Array
  },
  data () {
    return {
      title: 'TOP3优势主题的详细解释',
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
      margin-top .1rem
      line-height .25rem
      color #555B77
      font-size .12rem
    }
    .keyWord {
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
          top .4rem
          width 2.95rem
          height 100%
          background rgba(204,204,204, .97)
        }
      }
      p {
        color #363A4D
        font-size .14rem
      }
    }
  }
</style>
