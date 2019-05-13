<style>
  .pre-header, .pre-footer {
    padding: 10px;
  }
  .pre-title {
    font-size: 0.18rem;
    line-height: 0.6rem;
    text-align: center;
  }
  .pre-subtext {
    font-size: 0.14rem;
    line-height: 0.20rem;
  }
  .pre-body {
    padding: 0 0.1rem;
  }
  .pre-body .mint-cell-title {
    text-align: right;
    padding-right: 0.1rem;
  }
  .pre-desc {
    font-size: 0.16rem;
  }
  .desc-title {
    line-height: 0.4rem;
    font-weight: 600;
  }
  .desc-content {
    padding: 0.10rem;
    list-style: none;
    background: #f9f9f9;
    border-radius: 0.08rem;
  }
  .desc-content li {
    padding: 0.05rem 0;
    line-height: 0.18rem;
  }
  .pre-btn {
    text-align: center;
    line-height: 0;
    padding-top: 0.1rem;
  }
  .pre-btn p {
    font-size: 0.16rem;
    height: 0.4rem;
    line-height: 0.4rem;
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

</style>

<template>
  <div class="prepare">
    <div class="pre-header">
      <h3 class="pre-title">盖洛普青少年测试</h3>
      <p class="pre-subtext">
        我们是需要先收集一下您与孩子的相关的信息，这些信息也是您后面获取报告的完整凭据
      </p>
    </div>
    <div class="pre-body">
      <mt-field label="姓名" placeholder="请输入孩子姓名" v-model="username"></mt-field>
      <a class="mint-cell mint-field"><!---->
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title"><!----> <span class="mint-cell-text">性别</span> <!----></div>
          <div class="mint-cell-value">
            <label><input type="radio" class="sex-select" name="sex" :value="0" v-model="sex">男</label>
            <label><input type="radio" class="sex-select" name="sex" :value="1" v-model="sex">女</label>
            <!--<mt-radio-->
              <!--v-model="sex"-->
              <!--:options="[{label: '男', value: '1'}, {label: '女', value: '2'}]">-->
            <!--</mt-radio>-->
          </div>
        </div>
        <div class="mint-cell-right"></div>
      </a>
      <mt-field label="出生日期" placeholder="请选择出生日期" type="date" v-model="birthday"></mt-field>
    </div>
    <div class="pre-footer">
      <div class="pre-desc">
        <p class="desc-title">测评说明</p>
        <ul class="desc-content">
          <li>1. 本次测试包含78道题</li>
          <li>2. 每个问题会询问你是否经常发生这个行为，请按照第一反应来作答</li>
          <li>3. 整个测评大概需要占用您的孩子15分钟</li>
        </ul>
        <p class="desc-title">下面是样例试题</p>
      </div>
      <div class="pre-example">
        <mt-radio
          title="我很喜欢讲故事"
          v-model="value"
          :options="options">
        </mt-radio>
      </div>
      <div class="pre-btn">
        <p>请把手机给您的孩子，开始发现他/她的优势吧</p>
        <mt-button type="danger" size="large" @click="startExam">开始正式测评</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import _qj from '../../assets/js/util.js'
import { Toast } from 'mint-ui'
export default {
  name: 'prepare',
  data () {
    return {
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
      ]
    }
  },
  methods: {
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
