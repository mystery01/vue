<template>
  <div ref="contain" class="contain">
    <div>
      <img v-if="pullDown" class="top-tip" src="../../../assets/images/common/pulldown.gif" alt="">
      <slot></slot>
      <div class="bottom-tip" v-if="pullUp && pullUpShow">{{bottomTip}}</div>
    </div>
    <span class="to-top" v-if="toTop && toTopStatus"  @click="handleToTop"></span>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    criticalHeight: Number, // 距离底部多高时实现下一页加载
    currentPage: Number, // 当前页
    totalPage: Number, // 总页书
    pullUp: Boolean, // 是否有上拉加载更多效果
    pullDown: Boolean, // 是否有下拉刷新效果
    toTop: Boolean // 是否有回到顶部
  },
  data () {
    return {
      lock: false, // emit是否锁定，防止多次触发
      toTopStatus: false,
      bottomTip: ''
    }
  },
  computed: {
    // bottomTip () {
    //   this.$nextTick(() => {
    //     return this.currentPage < this.totalPage ? '正在努力加载中...' : '没有更多了～'
    //   })
    // },
    containHeight () {
      return this.$refs.contain.clientHeight
    },
    pullUpShow () {
      return this.totalPage > 1
    }
  },
  methods: {
    _initScroll () {
      let that = this
      this.scroll = new Bscroll(this.$refs.contain, {
        click: true,
        probeType: 3,
        bounce: this.pullDown
      })
      this.scroll.on('touchEnd', (position) => {
        // if (Math.abs(position.y) > Math.abs(this.scroll.maxScrollY) - that.criticalHeight && this.currentPage < this.totalPage && this.pullUp && !this.lock) {
        //   that.$emit('toBottom', true)
        //   this.lock = true
        // }
        if (position.y > 30 && this.pullDown && !this.lock) {
          that.$emit('pullDown', true)
          this.lock = true
        }
      })
      this.scroll.on('scrollEnd', (position) => {
        if (Math.abs(position.y) > Math.abs(this.scroll.maxScrollY) - that.criticalHeight && this.currentPage < this.totalPage && this.pullUp && !this.lock) {
          that.$emit('toBottom', true)
          this.lock = true
        }
      })
      this.scroll.on('scroll', (position) => {
        if (Math.abs(position.y) > that.containHeight) {
          that.toTopStatus = true
        } else {
          that.toTopStatus = false
        }
        // 针对阅读详情
        if (that.$route.name === 'BookDetail') {
          if (position.y < -50) {
            that.$emit('showTitle', true)
          } else {
            that.$emit('showTitle', false)
          }
        }
      })
    },
    handleToTop () {
      this.scroll.scrollTo(0, 0, 0)
      this.toTopStatus = false
    }
  },
  mounted () {
    this.lock = false
    this.$nextTick(() => {
      if (!this.scroll) {
        this._initScroll()
      } else {
        this.scroll.refresh()
      }
    })
  },
  updated () {
    if (this.scroll) {
      this.$nextTick(() => {
        setTimeout(() => {
          this.bottomTip = this.currentPage < this.totalPage ? '正在努力加载中...' : '没有更多了～'
        }, 300)
        this.lock = false
      })
      // if (this.currentPage === 1) {
      //   this.toTopStatus = false
      // }
      this.scroll.refresh()
    }
  }
}
</script>
<style lang="stylus" scoped>
  .contain
    height:100%
    overflow:hidden
    .bottom-tip
      font-size:.13rem
      line-height:.5rem
      color:#999
      text-align:center
    .top-tip
      position:absolute
      top:-.8rem
      display:block
      width:.8rem
      height:.6rem
      left:50%
      margin-left:-.4rem
    .to-top
      display:block
      position:absolute
      bottom:.5rem
      right:.15rem
      width:.32rem
      height:.32rem
      transform: translateZ(1px)
      background:url(../../../assets/images/common/toTop.png) no-repeat center top
      background-size:100% 100%
</style>
