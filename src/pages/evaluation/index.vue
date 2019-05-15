<style>
  .evaluation {
    background: #5978FF;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .title-image {
    width: 3.75rem;
    height: 1.26rem;
  }
  .wrapper {
    flex: 1;
    background: #FFF;
    margin: 0 0.15rem 0.15rem 0.15rem;
    border-radius: 0.10rem;
    padding: 0.4rem 0;
    display: flex;
    flex-direction: column;
  }
  .evaluation-header, .evaluation-footer {
    padding: 10px;
    /*background: #5978FF;*/
  }
  .evaluation-header {
    margin-top: -0.15rem;
    height: 1rem;
  }
  .evaluation-title {
    font-size: 0.18rem;
    line-height: 0.6rem;
    text-align: center;
  }
  .progress-detail {
    text-align: center;
    font-size: 0.16rem;
    font-weight: 700;
  }

  .mint-cell, .mint-cell-wrapper {
    background: transparent !important;
    padding: 0 !important;
  }
  .evaluation-body {
    flex: 1;
  }
  .evaluation-body .mint-radiolist-title {
    font-size: 0.16rem;
    color: #333 !important;
  }
  .evaluation-footer {
    height: 0.6rem;
  }
  .evaluation-footer button.mint-button:last-child {
    margin-top: 0.15rem;
  }
  .mt-progress-runway, .mt-progress-progress {
    border-radius: 0.06rem;
  }
</style>

<template>
  <div class="evaluation">
    <div class="title-image">
      <img :src="require('../../assets/images/common/image_title@2x.png')" alt="" style="width: 100%;">
    </div>
    <div class="wrapper">
      <div class="evaluation-header">
        <div style="display: flex;">
          <div style="flex: 1;font-size: 0.16rem;color: #C6CBE0;">0</div>
          <div style="flex: 1;">
            <div class="progress-detail" v-if="questionCount">{{index}}/{{questionCount}}</div>
          </div>
          <div style="flex: 1;font-size: 0.16rem;text-align: right;color: #C6CBE0;">{{questionCount}}</div>
        </div>
        <mt-progress :value="progress" :bar-height="12" style="border-radius: 0.06rem;"></mt-progress>
        <div style="color: #FF0000;text-align: right;font-size: 0.12rem;">请一次性完成，不要在中途退出。</div>
      </div>
      <div class="evaluation-body">
        <div class="evaluation-subject" v-for="(item, i) in subject" :key="i">
          <mt-radio
            v-if="(i + 1) === index"
            :title="(i + 1) + '.' + item"
            align="right"
            v-model="value[i]"
            :options="options">
          </mt-radio>
        </div>
      </div>
      <div class="evaluation-footer">
        <div style="display: flex;">
          <div style="flex: 1;padding: 0 0.1rem;">
            <mt-button type="primary" size="large" @click="handleNext" style="background: #5B7AFF;">{{index && subject.length && index === subject.length ? '提交' : '下一题'}}</mt-button>
          </div>
          <div style="flex: 1;padding: 0 0.1rem;">
            <mt-button type="danger" size="large" @click="handlePrevious" :disabled="index === 1" style="background: #FFA366;">上一题</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui'
import _qj from '../../assets/js/util.js'
export default {
  name: 'evaluation',
  data () {
    return {
      index: 1,
      questionCount: 0,
      hasNext: false,
      subject: [],
      options: [
        {
          label: '几乎总是如此',
          value: '1'
        },
        {
          label: '经常如此',
          value: '2'
        },
        {
          label: '偶尔如此',
          value: '3'
        },
        {
          label: '从不如此',
          value: '4'
        }
      ],
      value: []
    }
  },
  computed: {
    progress () {
      return Math.ceil(this.index / this.questionCount * 100)
    }
  },
  mounted () {
    this.getSubject()
  },
  methods: {
    getSubject () {
      _qj.request({
        method: 'get',
        url: 'c/api/query_question_list'
      }).then(res => {
        if (res.code === 0) {
          let data = res.data || {}
          let questionList = data.questionList || []
          this.subject = questionList
          this.questionCount = questionList.length
          this.value = Array(questionList.length).fill('1')
        } else {
          Toast(res.msg)
        }
      })
    },
    answerQuestion () {
      let valueList = []
      this.value.forEach(item => {
        valueList.push(Number(item))
      })
      _qj.request({
        method: 'post',
        url: 'c/api/answer_all_question',
        data: {
          valueList: valueList
        }
      }).then(res => {
        if (res.code === 0) {
          Toast({
            message: '提交成功',
            iconClass: 'icon icon-success'
          })
          this.$router.push({
            name: 'report'
          })
        } else {
          Toast(res.msg)
        }
      })
    },
    handlePrevious () {
      if (this.index - 1 >= 1) {
        this.index -= 1
      }
    },
    handleNext () {
      if (this.index + 1 <= this.subject.length) {
        this.index += 1
      } else {
        MessageBox.confirm('确定提交测试内容?').then(action => {
          this.answerQuestion()
        })
      }
    }
  }
}
</script>
