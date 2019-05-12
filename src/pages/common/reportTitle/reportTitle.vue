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
      font-weight 600
    }
    .under_line {
      margin-top .1rem
      display: block
      height: .03rem
      background: orange
      margin-bottom: .1rem
    }
  }
</style>
