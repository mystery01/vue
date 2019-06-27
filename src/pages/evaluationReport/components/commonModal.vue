<template>
  <div class="cShadow">
    <div class="modal">
      <span class="close" @click='close'>x</span>
      <div class="centent">
        <div class="title">我想对您说</div>
        <div class="cn">
          <TopThree v-if='keys === 10' :keys='keys' :themeList = 'newData' />
          <AdviseChr v-if='keys === 11' :themeList = 'newData'></AdviseChr>
          <AdvisePar v-if='keys === 12' :themeList = 'newData'></AdvisePar>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import TopThree from './topThree'
import AdviseChr from './adviseChr'
import AdvisePar from './advisePar'
export default {
  props: {
    themeList: Array,
    keys: Number
  },
  data () {
    return {
      title: '报告目录',
      newData: [],
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
    if(this.keys === 10 || this.keys === 11 || this.keys === 12 ){
      this.newData = [this.themeList[0]]
    }
    console.log(this.newData,'111')
    // this.newData = this.themeList
  },
  methods: {
    close() {
      this.$emit('changeCommon',{val:false})
      console.log(11)
    }
  },
  components: {
    AdviseChr,
    AdvisePar,
    TopThree,
  }
}
</script>
<style lang="stylus" scoped>
  .cShadow {
    position absolute
    left 0
    right 0
    top 0 
    bottom 0
    // background: rgba(0,0,0,0.7)
    // overflow-y: scroll;
    // display flex;
    // justify-content center 
    // align-items center
    // flex-direction column
    .modal {
      width 100%
      height 100%
      overflow-y: scroll;
      // border-radius: .04rem
      background #fff
      position relative
      margin 0rem auto 0 auto
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
        .cn {
          
        }
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
