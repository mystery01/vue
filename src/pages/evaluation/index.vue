<style>
  .evaluation-header, .evaluation-footer {
    padding: 10px;
  }
  .evaluation-title {
    font-size: 0.18rem;
    line-height: 0.6rem;
    text-align: center;
  }
  .progress-detail {
    text-align: center;
    font-size: 0.16rem;
  }

  .mint-cell, .mint-cell-wrapper {
    background: transparent !important;
    padding: 0 !important;
  }
  .evaluation-body .mint-radiolist-title {
    font-size: 0.22rem;
    color: #333 !important;
  }
  .evaluation-footer button.mint-button:last-child {
    margin-top: 0.15rem;
  }
</style>

<template>
  <div class="evaluation">
    <div class="evaluation-header">
      <h3 class="evaluation-title">盖洛普青少年测试</h3>
      <mt-progress :value="progress" :bar-height="10"></mt-progress>
      <div class="progress-detail" v-if="questionCount">{{index}}/{{questionCount}}</div>
    </div>
    <div class="evaluation-body">
      <div class="evaluation-subject" v-for="(item, i) in subject" :key="i">
        <mt-radio
          v-if="(i + 1) === index"
          :title="item"
          v-model="value[i]"
          :options="options">
        </mt-radio>
      </div>
    </div>
    <div class="evaluation-footer">
      <mt-button type="danger" size="large" @click="handleNext">{{index && subject.length && index === subject.length ? '提交' : '下一题'}}</mt-button>
      <mt-button type="danger" size="large" @click="handlePrevious" :disabled="index === 1">上一题</mt-button>
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
            name: 'reports'
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
