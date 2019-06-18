<template>
  <div class="shadow">
    <div class="modal">
      <span class="close" @click='close'>x</span>
      <div class="centent">
        <div class="title">我想对您说</div>
        <content>
          <p>关注孩子的优势，喜欢想象未来的生活，你会思考你未来会成为什么样子的人，仅仅聚焦在今天正在做的事情并不能满足你大脑想要冒险的需要，你会去学习那些未来能够帮助你的知识和技能。</p>
          <p>你对未来有很大的憧憬，喜欢想象未来的生活，你会思考你未来会成为什么样子的人，仅仅聚焦在今天正在做的事情并不能满足你大脑想要冒险的需要，你会去学习那些未来能够帮助你的知识和技能。</p>
        </content>
      </div>
    </div>
</div>
</template>
<script>
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
    close() {
      this.$emit('changeDefaultModal')
    }
  },
  components: {
  }
}
</script>
<style lang="stylus" scoped>
  .shadow {
    position absolute
    left 0
    right 0
    top 0 
    bottom 0
    background: rgba(0,0,0,0.7)
    display flex;
    justify-content center 
    align-items center
    flex-direction column
    .modal {
      width 3.3rem
      // height 4.25rem
      border-radius: .04rem
      background #fff
      position relative
      .close {
        position absolute
        top .13rem
        right .13rem
        width .24rem
        height .24rem
        color #363A4D
        line-height .24rem
        text-align: center
      }
      .centent {
        display flex
        justify-content center
        align-items center
        flex-direction column
        padding .52rem .24rem .6rem .24rem
        .title {
          margin-bottom .11rem
          color #363A4D
          font-size .16rem
        }
        p {
          font-size .12rem
          color #555B77
          line-height .2rem
          margin-top .2rem
        }
      }
    }
  }
</style>
