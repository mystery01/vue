<template>
  <div class="report">
    <div class="title_bg"></div>
    <div class="content">
      <div class="container">
        <p class="result">青少年测评结果查询</p>
        <span class="name"><span>{{name}}</span>你是这样的独特存在</span>
        <div class="advantage">
            <p>优势证书</p>
            <div class="advantage_item" v-for="(ele, index) in themeList" :key=index>
              <p>{{ele.name}}</p>
              <span>{{ele.intro}}</span>
            </div>
        </div>
        <div class="des">
          <div class="text">完成报告会包含以下内容:</div>
          <p><span class="radius"></span> 三大优势主题的详细解释</p>
          <p><span class="radius"></span> 他人眼中您孩子的样子</p>
          <p><span class="radius"></span> 给孩子的行动计划与建议</p>
          <p><span class="radius"></span> 给父母的行动计划与建议</p>
          <p class="explain">
            如果您想获取完整报告， 请添加微信号MissCorrine，完成转账。付费成功后，完整报告将通过微信发送给您。 
          </p>
          <span class="qrcode"></span>
          <p class="price">完成报告限时售价 <span>39.9</span>元</p>
          <p class="originPrice">原价79.9</p>
        </div>
      </div>
      
    </div>
    <div class="title_buttom"></div>
  </div>
</template>
<script>
import Api from '../../assets/js/util'
export default {
  data () {
    return {
      isLoading: false,
      themeList: [],
      name: ''
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
    document.title = '优势评测报告'
  },
  mounted() {
    this.fetchData()
  },
  methods: {
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
        .des {
          margin-top .2rem
          width 100%
          p {
            margin-top .1rem;
            font-size .12rem
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
            font-size .14rem
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
            background url('../../assets/images/common/image_qr.png')
            background-size: 100% 100%
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
