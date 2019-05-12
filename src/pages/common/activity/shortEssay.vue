<template>
  <div class="short_essay">
    <!-- <SiteHeader title='短篇征文'></SiteHeader> -->
    <div class="short_essay_box">
    </div>
  </div>
</template>
<script>
// import SiteHeader from '../site/header'
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
  },
  methods: {
  },
  components: {
    // SiteHeader
  }
}
</script>
<style lang="stylus" scoped>
  .short_essay{
    width: 100%
    height: 100%
    .short_essay_box{
      height 13.6rem
      background: url('../../../assets/images/common/activity/short_essay.png') no-repeat
      background-position: center top
      background-size 100% 100%
    }
  }
</style>
