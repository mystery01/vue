<template>
  <div class="advantage">
    <div class="bg">
      <span class="top"></span>
      <p class="word"></p>
      <div class="advantage_item" v-for="(ele, index) in themeList" :key=index>
        <p>{{ele.name}}</p>
        <span>{{ele.intro}}</span>
      </div>
      <span class="top"></span>
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
    width 2.88rem
    // height 2.58rem
    border-radius .04rem
    border: .03rem solid #B6831B
    padding .1rem
    .bg {
      border: .02rem solid #B6831B
      .top {
        display block
        width 2.03rem
        height .26rem
        margin .1rem auto .1rem auto
        background url('../../../assets/images/common/flower.png')
        background-size: 100% 100%
      }
      .word{
        width 1.51rem
        height .43rem
        margin .1rem auto 0 auto
        background url('../../../assets/images/common/words.png')
        background-size: 100% 100%
      }
    }
    p {
      color #5877FF
      font-size .2rem
      margin .15rem auto .1rem auto
      text-align center
    }
    .advantage_item {
      margin-top .1rem
      margin-bottom .07rem
      padding 0rem .15rem .05rem
      :nth-child(1) {
        font-size .16rem
        text-align left
        color #b6831b
      }
      :nth-child(2) {
        font-size .12rem
        color #363A4D
        color #363A4D
        line-height .2rem
      }
    }
  }
</style>
