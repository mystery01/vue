<template>
  <div class="test_report">
    <div class="report_title">
      盖洛普青少年测评结果查询
    </div>
    <div class="report_hr">
    </div>
    <div class="report_table">
      <table>
        <thead>
          <tr>
            <th v-for="item of thead" :key="item">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tbody" :key="index">
            <td>
              {{item.mobile}}
            </td>
            <td>
              {{item.name}}
            </td>
            <td>
              <span v-for="child of item.advantage" :key="child">
                {{child}}<br />
              </span>
            </td>
            <td>
              {{item.data}}<br />{{item.time}}
            </td>
            <td>
              <span class="option_common option_simple">
                简版报告
              </span>
              <br />
              <span class="option_common option_total">
                完整报告
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="report_content">
      <div class="content_title">
        完整报告会包含以下内容：
      </div>
      <div class="content_item" v-for="item of items" :key="item">
        {{item}}
      </div>
    </div>
    <div class="report_des">
      <div class="report_des_info">
        想获取完整报告，请添加微信号:yesiran2011，或扫描下方二维码，完整转账，随后会微信为你开通完整报告查看的链接，以及可以获得15分钟左右的咨询时间
      </div>
      <div class="report_des_pic">
        <img src="" alt="二维码.jpg">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      phone: '',
      captcha: '',
      isLoading: false,
      seconds: -1,
      items: [
        '孩子优势的详细解读', '孩子优势的相关形容词(大家会这样形容你)', '孩子的优势的相关主题解读', '孩子优势的行动计划与建议', '家长优势的行动计划与建议'
      ],
      thead: [
        '手机号', '孩子姓名', '优势', '测评时间', '报告'
      ],
      tbody: [
        {
          mobile: '18903985188',
          name: '李富贵',
          advantage: ['独立', '竞争', '可靠'],
          data: '2019/05/01',
          time: '11:00:00'
        },
        {
          mobile: '18903985188',
          name: '李富贵',
          advantage: ['独立', '竞争', '可靠'],
          data: '2019/05/01',
          time: '11:00:00'
        }
      ]
    }
  },
  computed: {
  },
  watch: {
    seconds: function (value) {
      let _self = this
      setTimeout(() => {
        if (value > 0) {
          _self.timeRun()
        }
      }, 1000)
    }
  },
  created () {

  },
  methods: {
    goReport () {
      this.$router.push('/reports')
    },
    getCode () {
      this.seconds = 60
    },
    timeRun () {
      this.seconds = this.seconds - 1
    }
  },
  components: {
  }
}
</script>
<style lang="stylus" scoped>
  .test_report{
    padding 0 0.1rem
    height 100%
    position absolute
    background #fff
    font-size .12rem
    color rgb(16, 16, 16)
    .report_title{
      margin .2rem
      font-size .18rem
      line-height .25rem
      text-align center
    }
    .report_hr{
      background #63a35c
      margin .14rem .2rem
      height .04rem

    }
    .report_table{
      display flex
      margin: .3rem 0
      table{
        width: 100%;
        flex: 1
        th{
          text-align center
          font-weight 400
          line-height .30rem
          border-bottom 2px solid #63a35c
        }
        td{
          padding 5px 0
          text-align center
          line-height .20rem
          border-top 1px solid #63a35c
        }
      }
      .option_common{
        line-height .17rem
      }
      .option_simple{
        text-decoration underline
        color rgba(63, 81, 181, 1)
      }
      .option_total{
        color rgb(157, 153, 153)
      }
    }
    .report_content{
      margin-bottom: .3rem
      .content_title{
        font-weight 700
        line-height .2rem
      }
      .content_item{
        line-height .17rem
      }
    }
    .report_des{
      .report_des_info{
        line-height .17rem
      }
      .report_des_pic{
        margin .3rem 0 .1rem
        display flex
        align-items center
        justify-content center
        img{
          width: 1.47rem
          height 1.47rem
          background #ddd
        }
      }
    }
  }
</style>
