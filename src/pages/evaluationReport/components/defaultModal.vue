<template>
  <div class="shadow">
    <div class="modal">
      <span class="close" @click='close'>x</span>
      <div class="centent">
        <!-- <div class="title">我想对您说</div> -->
        <content>
          <p>关注孩子的优势可以帮您更好地与孩子沟通，了解孩子思考问题的方式、面对问题的感受，以及解决问题途径。您可能会因此发现孩子更擅长做的一些事情，对某些事情更有热情。您也可能会由此意识到更好地引导和培养孩子的方式，真正做到因材施教。</p>
          <p>希望阅读报告后，您能看到孩子的独特性。根据他/她的优势，培养和发展他/她擅长的事物。最终实现您与孩子高质量地亲子互动，建立高质量的亲子关系。</p>
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
    position fixed
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
