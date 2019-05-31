<template>
  <div class="appearance">
    <ReportTitle :title=title />
    <div class="keyWord" v-for='(ele,index) in themeList' :key=index>
        <p>{{ele.name}}</p>
        <div class="content">
          <div class="des" v-for='(element,index) in ele.adjList' :key=index>
            {{element}}
          </div>
          <div class="shadow">完整报告解锁后可见</div>
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
      title: '他人眼中您孩子的样子',
      keyWord: [
        {
          key: '可靠',
          value: [1, 2, 3]
        },
        {
          key: '发现',
          value: [1, 2, 3]
        },
        {
          key: '关系',
          value: [1, 2, 3]
        }
      ]
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
  .appearance {
    p {
      margin-top .1rem
      line-height .25rem
      font-size .2rem
    }
    .keyWord {
      p {
        color #363A4D
        font-size .14rem
      }
      .content {
        margin-top .1rem
        padding .15rem .1rem .15rem .1rem
        border: .01rem dashed #FFA366
        border-radius .04rem
        line-height .25rem
        overflow hidden
        position relative
        .shadow {
          position absolute
          top .4rem
          width 2.95rem
          height 100%
          background rgba(204,204,204, .98)
          display flex
          justify-content center
          align-items center
          font-size .14rem
          color #363a4d
        }
        .des {
          font-size .12rem
          color #555B77
        }
      }
    }
  }
</style>
