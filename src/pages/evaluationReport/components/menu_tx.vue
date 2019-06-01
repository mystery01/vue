<template>
  <div class="menu">
    <ReportTitle :title=title />
    <p v-show='allThemeList.length>0'>您孩子的优势排序</p>
    <p>TOP3优势主题的详细解释</p>
    <!-- <p>他人眼中您孩子的样子</p> -->
    <p>给父母的行动计划与建议</p>
    <p>给孩子的行动计划与建议</p>
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
      title: '报告目录'
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
  .menu {
    p {
      margin-top .1rem
      margin-left .1rem
      font-size .12rem
      color #555B77
    }
  }
</style>
