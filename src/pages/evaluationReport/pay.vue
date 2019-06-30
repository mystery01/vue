<template>
  <div class="pay">
    <div class="title_bg"></div>
    <div class="content">
      <div class="container">
        <div class="des">
          <p class="price">价格 <span> 39.9</span>元 （限时特惠）</p>
          <p class="originPrice">原价 79.9</p>
          <p class="lock">付费解锁方式:</p>
          <p class="explain">
            您可在做完测评后加小苹果助教微信（扫描下方二维码，或添加微信号：MissCorrine）转账后解锁完整报告。
          </p>
          <img class="qrcode" src="../../assets/images/common/image_qr.png" alt="二维码.jpg">
          
          <p class="freeWay">免费解锁方式</p>
          <p class="des">免费解锁方式一：每天前3名添加小苹果助教微信（微信号：The_rainbow1）获取报告的家长，将免费解锁完整版报告一次；</p>
          <p class="des">免费解锁方式二：每成功邀请一位家长付费，将免费解锁自己孩子的完整报告一次；</p>
          <!-- <p class="des">免费解锁方式三：分享下图“少儿优势测评”海报到朋友圈，集满30个赞，可以免费解锁完整报告一次。</p> -->
        </div>
      </div>
      
    </div>
    <div class="title_buttom"></div>
  </div>
</template>
<script>
import Api from '../../assets/js/util'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      isLoading: false,
      themeList: [],
      name: ''
    }
  },
  computed: {
    ...mapState(['origin'])
  },
  watch: {
  },
  created () {
    document.title = '解锁完整报告'
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    // 跳完成报告
    handleJumpDetail() {
      const id = this.$route.params.id
      this.$router.push(`/detailShadow/${id}`)
    },
    // 获取数据
    fetchData() {
      const id = this.$route.params.id
      const url = `c/api/get_simple_report?exam_id=${id}`
      Api.request({
        url
      }).then((res)=>{
        this.themeList = res.data.themeList
        this.name = res.data.childName
      })
    }
  },
  components: {
  }
}
</script>
<style lang="stylus" scoped>
  .pay{
    width: 100%
    // height: 100%
    font-size: .16rem
    background: #5B7AFF
    color #333
    .title_bg {
      width 100%
      height 1.28rem
      background url('../../assets/images/common/image_title@2x.png')
      background-size 100% 100%
    }
    .content {
      padding: .15rem
      margin-top -.15rem
      .container {
        padding: .15rem
        background #ffffff
        border-radius .04rem
        .result {
          font-size .16rem
          color #363A4D 
          height .13rem
          margin-bottom .26rem !important
        }
        .name {
          font-size .12rem
          color #363A4D
          height .22rem
          span {
            color #5978FF 
            font-size .24rem
            margin-right .1rem
          }
        }
        .des {
          margin-top .2rem
          width 100%
          .link {
            margin-top .25rem
            font-size .16rem
            color #5b7aff
          }
          p {
            margin-top .1rem;
            font-size .14rem
            color #555B77
            .radius {
              display inline-block
              width .04rem
              height .04rem
              border-radius .02rem
              background-color #898C99
            }
          }
          .text {
            font-size .16rem
            color #363A4D
          }
          .explain {
            margin-top .2rem
            font-size .14rem
            color #363A4D
            line-height .20rem
            word-break break-all
          }
          .qrcode {
            margin .28rem auto .28rem auto
            display block
            width 1.25rem
            height 1.25rem
            // background url('../../assets/images/common/image_qr.png')
            // background-size: 100% 100%
            z-index 999
          }
          .freeWay {
            margin-top .3rem
            font-size .16rem
            color #000
          }
          .des {
            font-size .14rem
            color #363A4D
            line-height .20rem
            margin-top .2rem
          }
          .price {
            text-align left
            font-size .16rem
            color #363A4D
            span {
              font-size .24rem
              color #FFA366
            }
          }
          .originPrice {
            text-align left
            font-size .16rem
            color #363A4D
            text-decoration: line-through
          }
          .lock {
            margin-top .3rem
            font-size .16rem
            color #000
          }
        }
      }
      
    }
    .title_buttom {
      width 100%
      height .79rem
      background url('../../assets/images/common/image_buttom@2x.png')
      background-size 100% 100%
    }
  }
</style>
