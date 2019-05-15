<template>
  <div class="advantage">
    <p>优势证明</p>
    <div class="advantage_item" v-for="(ele, index) in themeList" :key=index>
      <span>{{ele.name}}</span>
      <span>{{ele.intro}}</span>
    </div>
</div>
</template>
<script>
export default {
  props: {
    title: String,
    themeList: Array
  },
  data () {
    return {
      advantage: [
        {
          key: '独立',
          value: '你非常负责且容易被人信任,别人很容易依赖你'
        },
        {
          key: '独立',
          value: '你非常负责且容易被人信任,别人很容易依赖你'
        },
        {
          key: '独立',
          value: '你非常负责且容易被人信任,别人很容易依赖你'
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
  }
}
</script>
<style lang="stylus" scoped>
  .advantage {
    margin .2rem auto .35rem auto
    width 2.58rem
    // height 2.58rem
    border-radius .04rem
    border: .01rem solid #333
    p {
      color #5877FF
      font-size .2rem
      margin .25rem auto .3rem auto
      text-align center
    }
    .advantage_item {
      margin-top .2rem
      display: flex
      justify-content center
      margin-bottom .2rem
      padding 0 .15rem .28rem .15rem
      :nth-child(1) {
        display flex
        justify-content center
        align-items center
        font-size .2rem
        color #5877FF
      }
      :nth-child(2) {
        margin-left .1rem
        font-size .14rem
        color #363A4D
        flex: 1
        color #363A4D
        line-height .2rem
      }
    }
  }
</style>
