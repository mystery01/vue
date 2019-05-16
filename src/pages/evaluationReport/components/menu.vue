<template>
  <div class="menu">
    <ReportTitle :title=title />
    <p>三大优势详解</p>
    <p>大家会这样形容你</p>
    <p>孩子的行动建议</p>
    <p>家长的行动建议</p>
</div>
</template>
<script>
import ReportTitle from './reportTitle'
export default {
  props: {
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
