<template>
  <div class="test_main">
    <div class="main_title">
      盖洛普青少年测评
    </div>
    <div class="main_des">
      <div class="main_des_info">
        盖洛普青少年测评一款基于积极心理学研发而成的，用于了解一个人自然而然地思考、感觉或行为的方式的测评。此测评可以辅助孩子了解自己的优势，用优势点亮人生，本测评相对市面测评有更久的历史，以及更细节，会测试动机层面，此次测评总共有10个主题，分别如下
      </div>
      <div class="main_des_theme">
        <p class="des_theme" v-for="theme of themes" :key="theme">{{theme}}</p>
      </div>
    </div>
    <div class="main_login">
      <div class="login_title">
        手机登录
      </div>
      <div class="login_form">
        <div class="form_item form_tel" >
          <select class="input_tel_pre" name="" id="">
            <option value="+86">+86</option>
          </select>
          <input placeholder="请输入手机号" type="tel" v-model="phone" />
        </div>
        <div class="form_code">
          <div class="form_item">
            <div class="input_pre">验证码</div>
            <input placeholder="请输入验证码" v-model="captcha" />
          </div>
          <mt-button v-if="seconds>0" class="form_code_load" type="default" size="small">剩余{{seconds}}s</mt-button>
          <mt-button v-else class="form_code_load" type="danger" size="small" @click="getCode">获取验证码</mt-button>
        </div>
        <div class="form_buttons">
          <mt-button class="button_common" type="danger" size="small" @click="goReport">查看报告</mt-button>
          <mt-button class="button_common" type="danger" size="small" @click="goTest">开始测评</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { Toast } from 'mint-ui'
const url = 'http://39.106.231.192/c/api'
export default {
  data () {
    return {
      phone: '',
      captcha: '',
      isLoading: false,
      seconds: -1,
      themes: [
        '关心（Caring)', '关系 (Relating)', '自信（Confidence)', '存在（Presence)', '成就（Achieving)', '竞争（Competing)', '组织（Organizer)', '可靠（Dependability)', '发现（Discover）', '展望（Future Thinker)'
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
      if (this.checkCode()) {
        Toast('请输入验证码！')
        return false
      }
      this.login().then((data) => {
        if(data.data.code == 0) {
          this.$router.push('/reports')
        }else if(data.data.code == 401){
          Toast('无查看权限!')
          setTimeout(() => {
            this.$router.push('/main')
          }, 1000)
        }else if(data.data.code == 402){
          Toast('没有找到进行中的测验!')
          setTimeout(() => {
            this.$router.push('/prepare')
          }, 1000)
        }
      })
    },
    goTest () {
      if (this.checkCode()) {
        Toast('请输入验证码！')
        return false
      }
      this.login().then((data) => {
        if(data.data.code == 0) {
          this.$router.push('/prepare')
        }else if(data.data.code == 401){
          Toast('无查看权限!')
          setTimeout(() => {
            this.$router.push('/main')
          }, 1000)
        }else if(data.data.code == 402){
          Toast('没有找到进行中的测验!')
          setTimeout(() => {
            this.$router.push('/prepare')
          }, 1000)
        }
      })
    },
    getCode () {
      if (!this.checkMobile()) {
        Toast('请输入正确的手机号！')
        return false
      }
      this.getAuthCode().then((data) => {
        if(data.data.code == 0) {
          Toast('验证码已发送！')
          this.seconds = 60
        }else if(data.data.code == 401){
          Toast('无查看权限!')
          setTimeout( () => {
            this.$router.push('/main')
          },1000)
        }else if(data.data.code == 402){
          Toast('没有找到进行中的测验!')
          setTimeout( () => {
            this.$router.push('/prepare')
          },1000)
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
      return axios.post(url+'/get_sms_auth_code', param, {'Content-Type': 'application/x-www-form-urlencoded'})
      .then((data) => {
        return data
      })
      .catch((error) => {
        Toast('网络异常')
      })
    },
    login () {
      let param = {}
      param.parentPhone = this.phone
      param.smsAuthCode = this.captcha
      return axios.post(url+'/login', param, {'Content-Type': 'application/x-www-form-urlencoded'})
      .then((data) => {
        return data
      })
      .catch((error) => {
        Toast('网络异常')
      })
    }
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
    padding 0 0.1rem
    height 100%
    position absolute
    background #fff
    font-size .12rem
    color rgb(16, 16, 16)
    .main_title{
      margin .2rem
      font-size .18rem
      line-height .25rem
      text-align center
    }
    .main_des{
      .main_des_info{
        line-height .17rem
      }
      .main_des_theme{
        .des_theme{
          line-height .2rem
        }
      }
    }
    .main_login{
      .login_title{
        font-weight 400
        margin: .3rem 0 .2rem
        font-size .18rem
        line-height .25rem
      }
      .form_code{
        display flex
        justify-content space-between
        .form_code_load{
          margin-top .1rem
          height: 0.45rem
        }
      }
      .form_item{
        height: 0.45rem
        display flex
        margin 0.1rem 0
        background rgb(242, 242, 242)
        border-radius .04rem
        font-size .14rem!important
        .input_pre{
          line-height .45rem
          width: .6rem
          text-align center
        }
        .input_tel_pre{
          line-height .45rem
          padding-left .2rem
          width: .6rem
        }
      }
      .form_buttons{
        margin .35rem 0
        display flex
        justify-content space-around
      }
      .button_common{
        height: 0.45rem
      }
    }
  }
</style>
