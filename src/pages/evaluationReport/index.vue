<template>
  <div class="report">
    <div class="title_bg"></div>
    <div class="content">
      <div class="container">
        <p class="result">少儿优势测评结果查询</p>
        <span class="name"><span>{{name}}</span>你是这样的独特存在</span>
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
        <div class="des">
          <div class="text">完整报告会包含以下内容:</div>
          <p><span class="radius"></span> 您孩子的优势排序</p>
          <p><span class="radius"></span> TOP3优势主题的详细解释</p>
          <!-- <p><span class="radius"></span> 他人眼中您孩子的样子</p> -->
          <p><span class="radius"></span> 给父母的行动计划与建议</p>
          <p><span class="radius"></span> 给孩子的行动计划与建议</p>
          <p @click='handleJumpDetail' class="link">查看您孩子的完整报告示例</p>
          <p class="explain">
            对报告内容有任何疑问及完整报告解析，欢迎添加小苹果助教微信（微信号：The_rainbow1）
          </p>
          <img class="qrcode" src="../../assets/images/common/image_qr.png" alt="二维码.jpg">
          <p class="price">完整报告限时售价 <span>39.9</span>元</p>
          <p class="originPrice">原价79.9</p>
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
    document.title = '少儿优势测评'
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
  .report{
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
        .advantage {
          margin .2rem auto .35rem auto
          width 2.88rem
          // height 2.58rem
          border: .03rem solid #B6831B
          padding .1rem
          .bg {
            border: .02rem solid #B6831B
            .top {
              display block
              width 2.03rem
              height .26rem
              margin .1rem auto .1rem auto
              background url('../../assets/images/common/flower.png')
              background-size: 100% 100%
            }
            .word{
              width 1.51rem
              height .43rem
              margin .1rem auto 0 auto
              background url('../../assets/images/common/words.png')
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
            margin-top .46rem
            font-size .16rem
            color #363A4D
            line-height .26rem
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
          .price {
            text-align center
            font-size .16rem
            color #363A4D
            span {
              font-size .24rem
              color #FFA366
            }
          }
          .originPrice {
            text-align center
            font-size .16rem
            color #363A4D
            text-decoration: line-through
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
