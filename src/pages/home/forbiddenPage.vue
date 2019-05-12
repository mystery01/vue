<template>
  <div class="forbid">
    <SiteHeader :title=title></SiteHeader>
    <div class="container">
      <em></em>
      <p>达到访问限制</p>
    </div>
  </div>
</template>

<script>
import SiteHeader from '../../common/site/header'
export default {
  name: 'forbid',
  components: {
    SiteHeader
  },
  props: {},
  data () {
    return {
      title: ''
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
  .forbid
    width 100%
    height 100%
    position absolute
    background #f5f5f5
    .container
      width 100%
      height 100%
      text-align center
      em
        display inline-block
        width 1.4rem
        height 1.4rem
        margin-top calc((100% - 1rem) / 2)
        background url(../../../assets/images/home/forbidden.png) no-repeat
        background-size 100%
      p
        font-size .14rem
        color #666
</style>
