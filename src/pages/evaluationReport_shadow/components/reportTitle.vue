<template>
    <div class="report_menu">
        <div class="report_title">{{title}}</div>
        <span class="under_line"></span>
    </div>
</template>
<script>
export default {
  props: {
    title: String
  },
  data () {
    return {
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
  }
}
</script>
<style lang="stylus" scoped>
  .report_menu {
    margin-top: .2rem;
    font-size .16rem
    color #333
    .report_title {
      color #363A4D
      font-size .14rem
    }
    .under_line {
      margin-top -.05rem
      display: block
      height: .08rem
      width 1.2rem
      background: #FFA366
      margin-bottom: .15rem
    }
  }
</style>
