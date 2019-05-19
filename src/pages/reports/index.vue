<template>
  <div class="test_report">
    <div class="title_bg"></div>
    <div class="content">
      <div class="container">
        <div class="report_title">
          盖洛普优势测评报告
        </div>
        <div class="report-item" v-for="item in tbody" :key="item.id">
          <p class="item-key">
            姓名
            <span class="item-value">{{item.childName}}</span>
          </p>
          <p class="item-key">
            手机号
            <span class="item-value">{{parentPhone}}</span>
          </p>
          <p class="item-key">
            优势
            <span class="item-value">{{item.theme_name_list.join('、')}}</span>
          </p>
          <p class="item-key">
            测评时间
            <span class="item-value">{{item.ctime | dateFilter}}</span>
          </p>
          <div class='buttons'>
            <div v-if="item.status==0">
              <span class="buttons_no">
                测验进行中..
              </span>
            </div>
            <div v-else>
              <mt-button class="button_common button_ok" v-if="item.status===50" @click="gotoDetail(item.id)">完整报告</mt-button>
              <mt-button class="button_common" v-else>完整报告</mt-button>
              <mt-button class="button_common button_ok" @click="gotoReport(item.id)">精简报告</mt-button>
            </div>
          </div>
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
            想获取完整报告，请添加微信号:yesiran2011，或扫描下方二维码，完整转账，随后会微信为你开通完整报告查看的链接，以及可以获得15分钟左右的咨询时间。
          </div>
          <div class="report_des_pic">
            <img src="../../assets/images/common/image_qr.png" alt="二维码.jpg">
          </div>
          <div class="report_prize report_now_prize">
            完整报告限时<span>30</span><font>元</font>
          </div>
          <div class="report_prize report_old_prize">
            原价100
          </div>
        </div>
      </div>
    </div>
    <div class="title_buttom"></div>
  </div>
</template>
<script>
import _qj from '../../assets/js/util'
import { Toast } from 'mint-ui'
import moment from 'moment'
export default {
  data () {
    return {
      items: [
        ' ● 孩子优势的详细解读', ' ● 孩子优势的相关形容词（大家会这样形容你）', ' ● 孩子的优势的相关主题解读', ' ● 孩子优势的行动计划与建议', ' ● 家长优势的行动计划与建议'
      ],
      thead: [
        '手机号', '孩子姓名', '优势', '测评时间', '报告'
      ],
      parentPhone: '18510993228',
      tbody: []
    }
  },
  computed: {

  },
  filters: {
    dateFilter: function (data) {
      return moment(data).format("YYYY.MM.DD")
    },
    timeFilter: function (data) {
      return moment(data).format("HH:MM:SS")
    }
  },
  created () {
    document.title = '盖洛普青少年测评结果查询'




    this.getList().then((data) => {
      if (data.code === 0) {
        this.parentPhone = data.data.parentPhone
        this.tbody = data.data.examList
      } else if (data.code === 401) {
        Toast('无查看权限!')
        setTimeout(() => {
          this.$router.push('/')
        }, 1000)
      } else if (data.code === 402) {
        Toast('没有找到进行中的测验!')
        setTimeout(() => {
          this.$router.push('/prepare')
        }, 1000)
      } else {
        Toast(data.msg)
      }
    })

  },
  methods: {
    gotoDetail (id) {
      this.$router.push(`/detail/${id}`)
    },
    gotoReport (id) {
      this.$router.push(`/report/${id}`)
    },
    getList () {
      return _qj.request({
        method: 'GET',
        url: 'c/api/query_exam_list'
      })
    }
  },
  components: {

  }
}
</script>
<style lang="stylus" scoped>
  .test_report{
    background: #5B7AFF
    font-size .12rem
    color rgb(16, 16, 16)
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
        padding: 0 .17rem
        padding-top .15rem
        background #ffffff
        border-radius .04rem
        .report_title{
          text-align left
          font-size .16rem
          color #363A4D
          line-height .44rem
        }
        .report-item{
          margin-bottom .15rem
          width 3.14rem
          height 1.83rem
          background rgba(255,255,255,1);
          box-shadow 0 0 .08rem 0rem rgba(88,119,255,0.24);
          border-radius .04rem
          padding .15rem .2rem
          box-sizing border-box
          .item-key{
            font-size .14rem
            line-height .3rem
            color #363A4D
            .item-value{
              color #5877FF
              float right
            }
          }
          .buttons{
            padding-left 1.2rem
            padding-top .1rem
            .buttons_no{
              color #898C99
              text-align center
            }
            .button_common{
              padding 0
              margin-left .05rem
              width .70rem
              height .22rem
              border 0.01rem solid #898C99;
              border-radius .04rem
              font-size .14rem
              color #898C99
            }
            .button_ok{
              color #5877FF
              border 0.01rem solid #5877FF
            }
          }
        }
        .report_content{
          .content_title{
            font-size .14rem
            color #363A4D
            line-height .50rem
          }
          .content_item{
            line-height .21rem
            color #555B77
            font-size .12rem
          }
        }
        .report_des{
          margin-top .38rem
          margin-bottom .21rem
          .report_des_info{
            line-height .21rem
            font-size .14rem
            color #363A4D
            text-align justify
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
          .report_prize{
            text-align center
            font-size .16rem
            color #363A4D
            line-height .3rem
            span{
              color #FFA366
              font-size .19rem
            }
            font{
              color #FFA366
              font-size .16rem 
            }
          }
          .report_old_prize{
            text-decoration: line-through;
            padding-bottom .27rem
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
