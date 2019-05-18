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
    /* text-align: left; */
    
  }
  .pre-body .mint-cell-value .mint-field-core {
    /* text-align: left; */
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
    font-size: 0.22rem;
    color: #363A4D;
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

  .mint-cell-value {
    margin-right: 7.5vw;
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
        <h3 class="pre-title">盖洛普青少年测试</h3>
        <p class="pre-subtext">
          我们是需要先收集一下您与孩子的相关的信息，这些信息也是您后面获取报告的完整凭据
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
          <input type="text" class="mint-field-core" placeholder="" v-model="username">
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
            <li>1. 本次测试包含78道题</li>
            <li>2. 每个问题会询问你是否经常发生这个行为，请按照第一反应来作答</li>
            <li>3. 整个测评大概需要占用您的孩子15分钟</li>
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
          label: '几乎总是如此',
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
          label: '从不如此',
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
      document.body.style.overflow = 'hidden'
      this.$refs.picker.open()
    },
    handleConfirm (value) {
      document.body.style.overflow = 'auto'
      this.birthday = moment(new Date(value)).format('YYYY-MM-DD')
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
