<template>
  <div class="report">
    <div class="content">
      <div class="title">
        <span>麒麟臂</span>
        <span>以下是你独一无二的优势</span>
      </div>
      <div class="advantage">
          <p>优势证明</p>
          <div class="advantage_item" v-for="(ele, index) in advantage" :key=index>
            <span>{{ele.key}}</span>
            <span>{{ele.value}}</span>
          </div>
      </div>
      <div class="des">
        <p>完成报告会包含以下内容:</p>
        <p>孩子优势的详细解读</p>
        <p>孩子优势的相关形容词(大家会这样形容你)</p>
        <p>孩子优势的相关主题解读</p>
        <p>孩子优势的行动计划与建议</p>
        <p class="explain">
          想获取完整报告，请添加微信号: yesiran2011,或扫描下方二维码,完成转账,随后会微信给您发送报告,以及可以获得十五分钟的咨询时间
        </p>
        <span class="qrcode"></span>
        <p class="price">完成报告限时售价 30 <span>原价100</span> </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isLoading: false,
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
    document.title = '盖洛普优势评测报告'
  },
  methods: {
  },
  components: {
  }
}
</script>
<style lang="stylus" scoped>
  .report{
    width: 100%
    height: 100%
    font-size: .16rem
    color #333
    .content {
      padding: .3rem
      .title{
        height: .5rem
        line-height: .5rem
        :nth-child(1) {
          font-size .2rem
        }
        :nth-child(2) {
        }
      }
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
      .des {
        margin-top .2rem
        width 100%
        p {
          margin-top .1rem;
          font-size .14rem
        }
        :nth-child(1) {
          font-size .16rem
          color: #333
        }
        .explain {
          margin-top .3rem
          line-height .26rem
        }
        .qrcode {
          margin .1rem auto .1rem auto
          display block
          width 2rem
          height 2rem
          background url('../../assets/images/evaluationReport/qrcode.jpeg')
          background-size: 100% 100%
        }
        .price {
          font-weight 600
          margin-top .24rem
          span {
            text-decoration: line-through
          }
        }
      }
    }
  }
</style>
