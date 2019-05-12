<template>
  <div @click='toast' class="short_essay">
    <div class="short_essay_box">
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
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
    toast () {
      Toast({
        message: '麒麟臂12',
        position: 'center',
        duration: 5000
      })
    }
  },
  components: {
  }
}
</script>
<style lang="stylus" scoped>
  .short_essay{
    width: 100%
    height: 100%
    .short_essay_box{
      height 13.6rem
      background: url('../../assets/images/common/activity/short_essay.png') no-repeat
      background-position: center top
      background-size 100% 100%
    }
  }
</style>
