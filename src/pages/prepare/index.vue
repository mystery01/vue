<style>
  .prepare {
    background: #5978FF;
    width: 100%;
    min-height: 100%;
  }

  .wrapper {
    background: #FFF;
    margin: -.15rem 0.15rem 0 0.15rem;
    border-radius: 0.04rem;
    padding: 0.3rem 0.15rem;
  }

  .pre-header, .pre-footer {
    /*padding: 10px;*/
  }

  .pre-title {
    font-size: 0.16rem;
    line-height: 0.2rem;
    font-weight: 700;
    color: #363A4D;
  }

  .pre-subtext {
    font-size: 0.12rem;
    line-height: 0.20rem;
    padding-top: 0.2rem;
    color: #363A4D;
    padding-bottom: 0.3rem;
  }

  .pre-body {
    padding: 0.15rem 0;
    font-size: .14rem;
    color: #898C99;
    
  }
   .pre-body .mint-cell-value {
    /* margin-right: 9vw; */
    /* text-align: center; */
    
  }
  .pre-body .mint-cell-value .mint-field-core {
    /* text-align: center; */
  }

  .pre-body .mint-cell-title {
    /*text-align: right;*/
    /*padding-right: 0.1rem;*/
  }

  .pre-desc {
    font-size: 0.16rem;
  }

  .desc-title {
    font-size: 0.14rem;
    color: #363A4D;
    line-height: 0.4rem;
  }

  .desc-content {
    padding: 0.15rem 0;
    list-style: none;
    /*background: #f9f9f9;*/
    /*border-radius: 0.08rem;*/
  }

  .desc-content li {
    font-size: 0.12rem;
    padding: 0.05rem 0;
    line-height: 0.18rem;
    color: #555B77;
  }

  .mint-radiolist-title {
    font-size: 0.18rem;
    color: #363A4D;
  }
  .mint-radio-label {
    font-size: .16rem;
  }

  .pre-btn {
    text-align: center;
    line-height: 0;
    padding-top: 0.1rem;
  }

  .pre-btn p {
    font-size: 0.16rem;
    height: 0.4rem;
    line-height: 0.3rem;
    font-weight: 900;
    text-align: center;
    width: 60%;
    color: #363A4D;
    padding: 0 20%;
  }

  .mint-cell, .mint-cell-wrapper {
    background: transparent !important;
    padding: 0 !important;
  }

  /*.mint-cell {*/
  /*min-height: 10vw !important;*/
  /*}*/
  .sex-select {
    width: 0.15rem;
    height: 0.15rem;
  }

  .line {
    height: 1px;
    background: #ccc;
    transform: scale(1);
  }

  .mint-cell-text, .mint-cell-title {
    color: #898C99;
    min-width: 120px;
  }

  .mint-field-core {
    text-align: right;
  }

  .mint-cell-value {
    text-align: right;
  }
  .mint-cell-title {
    font-size: .16rem;
  }
  .mint-cell-value {
    margin-right: 7.5vw;
  }
  .mint-cell-value input,span {
    font-size: .16rem;
  }
  .title_buttom {
      width: 100%;
      height: .79rem;
      background: url('../../assets/images/common/image_buttom@2x.png');
      background-size: 100% 100%;
  }
</style>

<template>
  <div class="prepare">
    <div class="title-image">
      <img :src="require('../../assets/images/common/image_title@2x.png')" alt="" style="width: 100%;">
    </div>
    <div class="wrapper">
      <div class="pre-header">
        <h3 class="pre-title">青少年测试</h3>
        <p class="pre-subtext">
          我们需要收集您和孩子的相关信息，用于后期获取完整报告的凭证
        </p>
        <div class="line"></div>
      </div>
      <mt-actionsheet
        :actions="actions"
        v-model="sexVisible">
      </mt-actionsheet>
      <mt-datetime-picker
        ref="picker"
        type="date"
        :startDate='startDate'
        @visible-change="handleValueChange"
        @confirm="handleConfirm">
      </mt-datetime-picker>
      <div class="pre-body">
        <!--<div class="mint-cell-wrapper">-->
        <!--<div class="mint-cell-title">&lt;!&ndash;&ndash;&gt; <span class="mint-cell-text">姓&ensp;&ensp;&ensp;&ensp;名</span> &lt;!&ndash;&ndash;&gt;</div>-->
        <!--<div class="mint-cell-value">-->
        <!--<input type="text" class="mint-field-core" placeholder="请输入孩子姓名" v-model="username">-->
        <!--</div>-->
        <!--</div>-->

        <mt-cell>
          <span slot="title">姓&ensp;&ensp;&ensp;&ensp;名</span>
          <input type="text" class="mint-field-core" placeholder="请输入姓名 " v-model="username">
        </mt-cell>
        <!--<mt-cell>-->
          <!--<span slot="title">性&ensp;&ensp;&ensp;&ensp;别</span>-->
          <!--<span @click.stop="sexVisible = true">{{sex === 0 ? '男' : '女'}}&ensp;</span>-->
        <!--</mt-cell>-->
        <a class="mint-cell">
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title"><!----> <span>性&ensp;&ensp;&ensp;&ensp;别</span></div>
            <div class="mint-cell-value is-link" @click="sexVisible = true"><span>{{sex === 0 ? '男' : '女'}}&ensp;</span></div>
            <i class="mint-cell-allow-right"></i></div>
          <div class="mint-cell-right"></div>
        </a>
        <a class="mint-cell">
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title"><!----> <span>出生日期</span></div>
            <div class="mint-cell-value is-link" @click="openPicker()"><span>{{birthday || '请选择'}}&ensp;</span></div>
            <i class="mint-cell-allow-right"></i></div>
          <div class="mint-cell-right"></div>
        </a>

        <!--<a class="mint-cell mint-field">&lt;!&ndash;&ndash;&gt;-->
        <!--<div class="mint-cell-left"></div>-->
        <!--<div class="mint-cell-wrapper">-->
        <!--<div class="mint-cell-title">&lt;!&ndash;&ndash;&gt; <span class="mint-cell-text">性&ensp;&ensp;&ensp;&ensp;别</span> &lt;!&ndash;&ndash;&gt;</div>-->
        <!--<div class="mint-cell-value">-->
        <!--&lt;!&ndash;<div style="text-align: right;width: 100%;">&ndash;&gt;-->
        <!--&lt;!&ndash;{{sex === 0 ? '男' : '女'}}&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--<div style="text-align: right;width: 100%;">-->
        <!--<label><input type="radio" class="sex-select" name="sex" :value="0" v-model="sex">男</label>-->
        <!--<label><input type="radio" class="sex-select" name="sex" :value="1" v-model="sex">女</label>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="mint-cell-right"></div>-->
        <!--</a>-->
        <!--<mt-field label="出生日期" placeholder="请选择出生日期" type="date" v-model="birthday"></mt-field>-->
      </div>
      <div class="pre-footer">
        <div class="pre-desc">
          <p class="desc-title">测评说明</p>
          <ul class="desc-content">
            <li>1. 本测评包含78道选择题</li>
            <li>2. 每道题都会询问您发生行为的频率情况，例如 “几乎总是如此（或总是如此）"、"经常如此“、"偶尔如此”、“几乎从未如此（或从未如此）”。 请告知您的孩子务必按照第一反应作答</li>
            <li>3. 整个测评大约需要15分钟，请让孩子在不易受干扰的环境一次性完成测评</li>
            <li>4. 测评中断后，答题结果无法保留。请提醒孩子在完成测评后点击“提交”</li>
          </ul>
          <div class="line"></div>
          <p class="desc-title" style="padding-top: 0.15rem">下面是样例试题</p>
        </div>
        <div class="pre-example">
          <mt-radio
            title="我很喜欢讲故事"
            align="right"
            v-model="value"
            :options="options">
          </mt-radio>
        </div>
        <div class="pre-btn">
          <p>请把手机给您的孩子</p>
          <p>开始发现他/她的优势吧</p>
          <mt-button type="danger" size="large" @click="startExam" style="background: #FFA366;font-size: .16rem;">开始正式测评</mt-button>
        </div>
      </div>
    </div>
    <div class="title_buttom"></div>
  </div>
</template>

<script>
import _qj from '../../assets/js/util.js'
import {Toast} from 'mint-ui'
import moment from 'moment'
export default {
  name: 'prepare',
  data () {
    return {
      startDate: new Date('2000-01-01'),
      username: '',
      sex: 0,
      birthday: '',
      value: 'A',
      options: [
        {
          label: '几乎总是如此（或总是如此）',
          value: 'A'
        },
        {
          label: '经常如此',
          value: 'B'
        },
        {
          label: '偶尔如此',
          value: 'C'
        },
        {
          label: '几乎从未如此（或从未如此）',
          value: 'D'
        }
      ],
      sexVisible: false,
      actions: [
        {
          name: '男',
          value: 0,
          method: (data) => {
            this.sex = data.value
          }
        },
        {
          name: '女',
          value: 1,
          method: (data) => {
            this.sex = data.value
          }
        }
      ]
    }
  },
  methods: {
    openPicker () {
      this.$refs.picker.open()
    },
    handleConfirm (value) {
      this.birthday = moment(new Date(value)).format('YYYY-MM-DD')
    },
    handler (e) {
      e.preventDefault()
    },
    // 解决点传问题
    handleValueChange (val) {
      if(val) {
        document.body.style.overflow = 'hidden'
        document.addEventListener('touchmove', this.handler, { passive: false })
      } else {
        document.body.style.overflow = 'auto'
        document.removeEventListener('touchmove', this.handler, { passive: false })
      }
    },
    startExam () {
      if (!this.username.trim()) {
        Toast('请输入孩子姓名')
        return
      }
      if (!this.birthday.trim()) {
        Toast('请选择孩子出生日期')
        return
      }
      _qj.request({
        method: 'post',
        url: 'c/api/start_exam',
        data: {
          childName: this.username,
          childGender: this.sex, // 0-女，1-男
          childBirthday: this.birthday
        }
      }).then(res => {
        if (res.code === 0) {
          this.$router.push({
            name: 'evaluation'
          })
        } else {
          Toast(res.msg)
        }
      })
    }
  }
}
</script>
