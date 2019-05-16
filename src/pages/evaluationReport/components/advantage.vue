<template>
  <div class="advantage">
    <p>优势证明</p>
    <div class="advantage_item" v-for="(ele, index) in themeList" :key=index>
      <p>{{ele.name}}</p>
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
    width 3.08rem
    // height 2.58rem
    border-radius .04rem
    border: .01rem solid #5877FF
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
        color #5877FF
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
