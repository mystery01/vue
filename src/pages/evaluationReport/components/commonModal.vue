<template>
  <div class="cShadow">
    <div class="modal">
      <span class="close" @click='close'>✕</span>
      <div class="centent">
        <div class="title">{{newData[0].title}}</div>
        <div class="cn">
          <TopThree v-if='keys === 10 || keys === 20 || keys === 30' :themeList = 'newData' />
          <AdviseChr v-if='keys === 11 || keys === 21 || keys === 31' :themeList = 'newData' />
          <AdvisePar v-if='keys === 12 || keys === 22 || keys === 32' :themeList = 'newData' />
          <TopTen v-if='keys == 99' :allThemeList = 'allThemeList' />
        </div>
      </div>
    </div>
    <div v-if="pay !== '50'" class="mask">
      <p class="report">解锁<span>完整报告</span></p>
      <p class="more">更多的了解您的孩子吧！</p>
      <div class="lock" @click='handleLock'>立即解锁</div>
    </div>
</div>

</template>
<script>
import TopThree from './three'
import AdviseChr from '../components/advisechr'
import AdvisePar from './advisePar'
import TopTen from './topTen'
export default {
  props: {
    themeList: Array,
    allThemeList: Array,
    keys: Number,
    pay: String,
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
    // alert(this.keys)
    if(this.keys === 10 || this.keys === 11 || this.keys === 12 ){
      console.log(1)
      this.newData = [this.themeList[0]]
    } else if (this.keys === 20 || this.keys === 21 || this.keys === 22) {
      console.log(2)
      this.newData = [this.themeList[1]]
    } else if (this.keys === 30 || this.keys === 31 || this.keys === 32) {
      console.log(3)
      this.newData = [this.themeList[2]]
    }
    // 判断标题
    const flag = String(this.keys).split('')[0] - 1
    if(this.keys === 10 || this.keys === 20 || this.keys === 30 ){
      this.themeList[0].title = `${this.themeList[flag].name}孩子的特点`
      // this.newData = [this.themeList[0]]
    } else if (this.keys === 11 || this.keys === 21 || this.keys === 31) {
      this.themeList[1].title = `给${this.themeList[flag].name}孩子的行动建议`
      // this.newData = [this.themeList[1]]
    } else if (this.keys === 12 || this.keys === 22 || this.keys === 32) {
      this.themeList[2].title = `给${this.themeList[flag].name}父母的行动建议`
      // this.newData = [this.themeList[2]]
    } else if(this.keys === 99) {
      this.themeList[2].title = `十大优势排名`
      this.newData = [this.themeList[2]]
    }
    console.log(this.newData,'111')
  },
  methods: {
    close() {
      this.$emit('changeCommon',{val:false})
      console.log(11)
    },
    handleLock() {
      const id = this.$route.params.id
      this.$router.push(`/pay/${id}`)
      this.$emit('changeCommon',{val:false})
    }
  },
  components: {
    AdviseChr,
    AdvisePar,
    TopThree,
    TopTen,
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
    overflow hidden
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
        // align-items center
        flex-direction column
        padding .52rem .24rem .6rem .24rem
        .cn {
          
        }
        .title {
          margin 0 auto
          text-align center
          // margin-bottom .11rem
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
    .mask {
      position absolute
      top 1.95rem
      left 0
      right 0
      bottom 0
      background rgba(239,239,239 .97)
      display flex
      align-items  center
      flex-direction column
      .report {
        margin-top 1.2rem
      }
      .more {
        margin-top .1rem
      }
      p {
        font-size .16rem
        color #363A4D
      }
      span {
        margin-left .05rem
        color #5b7aff
        font-size .18rem
      }
      .lock {
        margin-top .8rem
        border-radius .08rem
        background #5B7AFF
        color #fff
        width 1.4rem
        height .46rem
        text-align center
        line-height .46rem
      }
    }
  }
</style>
