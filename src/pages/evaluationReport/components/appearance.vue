<template>
  <div class="appearance">
    <ReportTitle :title=title />
    <div class="keyWord" v-for='(ele,index) in themeList' :key=index>
        <p>{{ele.name}}</p>
        <div class="content">
          <div class="des" v-for='(element,index) in ele.adjList' :key=index>
            {{element}}
          </div>
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
      title: '大家会这样形容你',
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
      .content {
        margin-top .1rem
        padding .15rem .1rem .15rem .1rem
        border: .01rem dashed #333
        line-height .25rem
        .des {
          font-size .16rem
        }
      }
    }
  }
</style>
