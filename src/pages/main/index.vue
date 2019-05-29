<template>
  <div class="test_main">
    <div class="title_bg"></div>
    <div class="content">
      <div class="container">
        <div class="main_des">
          <div class="main_des_tittle">
            少儿优势测评
          </div>
          <div class="main_des_info">
            少儿优势测评基于积极心理学研发而成。它通过科学的测量发现 “孩子是什么样的人” 。测评结果将呈现您孩子的三大主要驱动因子，帮您解答 “孩子为什么会产生一些特定的行为”。此测评大约需要10分钟，由家长注册信息后，交由孩子填写完成。 现在，让我们开启了解孩子的旅程吧！
          </div>
          <!-- <div class="main_des_theme">
            <p class="des_theme" v-for="theme of themes" :key="theme.value" :style="{background: theme.themeBgc, width: theme.width+'rem', top: theme.top+'rem', left: theme.left+'rem'}">
              {{theme.value}} <span>{{theme.evalue}}</span>
            </p>
          </div> -->
        </div>
        <div class="main_login">
          <div class="login_title" v-if="!isLogin">
            手机登录
          </div>
          <div class="login_form">
            <div v-if="!isLogin">
              <div class="form_item" >
                <input class="form_tel" placeholder="请输入手机号" type="tel" v-model="phone" />
              </div>
              <div class="form_item">
                <input class="form_code" placeholder="请输入验证码" v-model="captcha" />
                <mt-button v-if="seconds>0" class="form_code_load">剩余{{seconds}}s</mt-button>
                <mt-button v-else class="form_code_load" @click="getCode">获取验证码</mt-button>
              </div>
            </div>
            <div class="login_already" v-else>
              您好，<span class="login_user">{{phone}}</span>
            </div>
            <div class="form_buttons">
              <mt-button class="button_common button_orange" @click="goTest">开始测评</mt-button>
              <mt-button class="button_common" @click="goReport">查看历史报告</mt-button>
            </div>
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
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      phone: '',
      captcha: '',
      isLoading: false,
      seconds: -1,
      themes: [
        {themeBgc: '#BCCA8C', value: '组织', evalue: '(Organizer)', left: .44, top: 0, width: 1.03},
        {themeBgc: '#D4A69A', value: '关系', evalue: '(Relating)', left: 1.55, top: 0, width: .88},
        {themeBgc: '#FDBF77', value: '自信', evalue: '(Confidence)', left: 0, top: .33, width: 1.03},
        {themeBgc: '#CCBC95', value: '存在', evalue: '(Presence)', left: 1.12, top: .33, width: .88},
        {themeBgc: '#92B8A4', value: '成就', evalue: '(Achieving)', left: 2.08, top: .33, width: 1.03},
        {themeBgc: '#92B8A4', value: '竞争', evalue: '(Competing)', left: 0, top: .66, width: 1.03},
        {themeBgc: '#FDBF77', value: '关心', evalue: '(Caring)', left: 1.12, top: .66, width: .88},
        {themeBgc: '#BCCA8C', value: '发现', evalue: '(Discover)', left: 2.08, top: .66, width: 1.03},
        {themeBgc: '#CCBC95', value: '可靠', evalue: '(Dependability)', left: .30, top: .99, width: 1.23},
        {themeBgc: '#D4A69A', value: '展望', evalue: '(Future Thinker)', left: 1.61, top: .99, width: 1.18},
      ],
      isLogin: false,
    }
  },
  computed: {
    ...mapState(['origin'])
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
    this.getOrigin()
    document.title = '少儿优势测评'
    this.getList().then((data) => {
      if (data.code === 0) {
        this.examList = data.data.examList
        this.isLogin = true
        this.phone = data.data.parentPhone
      } else if (data.code === 401) {
        this.isLogin = false
      }
    })
  },
  methods: {
    getOrigin() {
      const origin = this.$route.query.origin || ''
      this.setOrigin(origin)
    },
    goReport () {
      if (!this.isLogin) {
        if (this.checkCode()) {
          Toast('请输入验证码！')
          return false
        }
        this.login().then((data) => {
          if (data.code === 0) {
            this.$router.push('/reports')
          } else if (data.code === 401) {
            Toast('无查看权限!')
            setTimeout(() => {
              this.$router.push('/main')
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
      } else {
        if(this.examList.length === 0) {
          Toast('暂无历史报告，请先完成评测!')
          setTimeout(() => {
            this.$router.push('/prepare')
          }, 1000)
        } else {
          this.$router.push('/reports')
        }
      }
    },
    goTest () {
      if (!this.isLogin) {
        if (!this.isLogin && this.checkCode()) {
          Toast('请输入验证码！')
          return false
        }
        this.login().then((data) => {
          if (data.code === 0) {
            this.$router.push('/prepare')
          } else if (data.code === 401) {
            Toast('无查看权限!')
            setTimeout(() => {
              this.$router.push('/main')
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
      } else {
        this.$router.push('/prepare')
      }
    },
    getCode () {
      if (!this.checkMobile()) {
        Toast('请输入正确的手机号！')
        return false
      }
      this.getAuthCode().then((data) => {
        if (data.code === 0) {
          Toast('验证码已发送！')
          this.seconds = 60
        } else if (data.code === 401) {
          Toast('无查看权限!')
          setTimeout(() => {
            this.$router.push('/main')
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
    timeRun () {
      this.seconds = this.seconds - 1
    },
    checkMobile () {
      return /^1(3|4|5|6|7|8)\d{9}$/.test(this.phone)
    },
    checkCode () {
      let captchaString = this.captcha.replace(/\s/g, '')
      return captchaString.length === 0
    },
    getAuthCode () {
      let param = {}
      param.parentPhone = this.phone
      return _qj.request({
        method: 'post',
        url: 'c/api/get_sms_auth_code',
        data: param
      })
    },
    login () {
      let param = {}
      param.parentPhone = this.phone
      param.smsAuthCode = this.captcha
      return _qj.request({
        method: 'post',
        url: 'c/api/login',
        data: param
      })
    },
    getList () {
      return _qj.request({
        method: 'GET',
        url: 'c/api/query_exam_list'
      })
    },
    ...mapMutations(['setOrigin'])
  },
  components: {
  }
}
</script>
<style lang="stylus" scoped>
  select{
    outline: none;
    padding-right: .1rem;
    border: 0;
    appearance:none;
    -webkit-appearance:none;
    background: url("../../assets/images/test/select.png") no-repeat scroll right center transparent;
  }
  select::-ms-expand { display: none; }
  input{
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: 0;
      border: 0;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      outline: 0;
      outline-color: initial;
      outline-style: initial;
      outline-width: 0px;
      line-height: 1.6;
      font-size: inherit;
      width: 100%;
  }
  .test_main{
    background #5B7AFF
    font-size .12rem
    // height 100%
    color rgb(16, 16, 16)
    .main_title{
      margin .2rem
      font-size .18rem
      line-height .25rem
      text-align center
    }
    .title_bg {
      width 100%
      height 1.28rem
      background url('../../assets/images/common/image_title@2x.png')
      background-size 100% 100%
    }
    .content {
      padding: .15rem
      margin-top -.15rem
      height 6.28rem
      .container {
        height 6.28rem
        padding: .09rem .17rem
        background #ffffff
        border-radius .04rem
        .main_des{
          .main_des_tittle{
            line-height .47rem
            color #363A4D
            font-size .16rem
            text-align left
          }
          .main_des_info{
            font-size .12rem
            line-height .21rem
            text-align: justify;
            color #363A4D
            font-size .12rem;
          }
          .main_des_theme{
            position relative
            margin .14rem 0
            height 1.25rem
            .des_theme{
              font-size .12rem
              position absolute
              color #fff
              line-height .25rem
              margin-bottom .08rem
              border-radius 0.01rem
              text-align center
              box-sizing border-box
              span{
                font-size .12rem
              }
            }
          }
        }
        .login_already{
          margin: .3rem 0;
          .login_user{
            color #FFA366
            font-size .2rem
          }
        }
        .main_login{
          .login_title{
            color #363A4D
            margin-top: .3rem
            font-size .16rem
            line-height .20rem
          }
          .form_item{
            margin .2rem 0
            border-radius .04rem
            width 2.95rem
            height .42rem
            border:0.01rem solid rgba(91,122,255,1);
            overflow hidden
            .form_tel{
              font-size .15rem
              width 2rem
              padding-left .16rem
              line-height .15rem
              padding-top .12rem
              padding-bottom .13rem
            }
            .form_code{
              font-size .15rem
              width 1.70rem
              padding-left .16rem
              line-height .15rem
              padding-top .12rem
              padding-bottom .13rem
            }
            .form_code_load{
              width 1rem
              height .42rem
              background #96AAFF
              border-radius .0rem
              float right
              color #ffff
              font-size .15rem
              padding 0
            }
          }
          .form_buttons{
            margin .25rem 0
            margin-top .34rem
            display flex
            justify-content space-around
          }
          .button_common{
            height: 0.47rem
            width: 1.38rem
            background: #5B7AFF
            color #fff
            border-radius .04rem
            font-size .16rem
          }
          .button_orange{
            background #FFA366
            font-size .16rem
          }
        }
      }
    }
    .title_buttom {
      width 100%
      // position fixed
      // bottom 0
      height .79rem
      background url('../../assets/images/common/image_buttom@2x.png')
      background-size 100% 100%
    }
  }
</style>
