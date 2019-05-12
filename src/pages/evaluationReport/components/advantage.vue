<template>
  <div class="advantage">
    <p>优势证明</p>
    <div class="advantage_item" v-for="(ele, index) in advantage" :key=index>
      <span>{{ele.key}}</span>
      <span>{{ele.value}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String
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
    margin 0 auto
    width 2.7rem
    height 2.5rem
    border: .01rem solid #333
    p {
      margin .1rem auto .1rem auto
      text-align center
    }
    .advantage_item {
      margin-top .2rem
      height .4rem
      display: flex
      justify-content center
      line-height center
      :nth-child(1) {
        text-align center
        line-height .4rem
        width: .5rem
        font-size .2rem
      }
      :nth-child(2) {
        flex: 1
        line-height .2rem
      }
    }
  }
</style>
