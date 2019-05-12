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
      <div class="evaluation-subject">
        <mt-radio
          :title="subject.content"
          v-model="subject.value"
          :options="options">
        </mt-radio>
      </div>
    </div>
    <div class="evaluation-footer">
      <mt-button type="danger" size="large" @click="handleNext">下一题</mt-button>
      <mt-button type="danger" size="large" @click="handlePrevious" :disabled="index === 1">上一题</mt-button>
    </div>
  </div>
</template>

<script>
import { MessageBox, Toast } from 'mint-ui'
import _qj from '../../assets/js/util.js'
export default {
  name: 'evaluation',
  data () {
    return {
      index: 1,
      questionCount: 0,
      hasNext: false,
      subject: {
        // content: '我喜欢在一群人面前展现自己',
        // examId: 1,
        // hasNext: true, // 是否还有下一题
        // index: 55,
        // questionCount: 78
      },
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
        },
        {
          label: '这道题我没有感觉',
          value: '5'
        }
      ],
      value: '1'
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
        url: 'c/api/get_question?index=' + this.index
      }).then(res => {
        let data = res.data || {}
        let {index = 0, questionCount = 0, hasNext = false} = data
        data.value = String(data.value || '1')
        this.subject = data
        this.index = index
        this.questionCount = questionCount
        this.hasNext = hasNext
      })
    },
    answerQuestion () {
      _qj.request({
        method: 'post',
        url: 'c/api/answer_one_question',
        data: {
          index: this.subject.index,
          value: Number(this.subject.value)
        }
      }).then(res => {
        if (res.data.isFinished) {
          // Toast({
          //   message: '测试结束',
          //   iconClass: 'icon icon-success'
          // })
          this.$router.push({
            name: 'reports'
          })
        } else {
          this.index += 1
          this.getSubject()
        }
      })
    },
    handlePrevious () {
      this.index -= 1
      this.getSubject()
    },
    handleNext () {
      if (this.hasNext) {
        this.answerQuestion()
      }
      // else {
      //   MessageBox.confirm('确定提交测试内容?').then(action => {
      //     Toast({
      //       message: '提交成功',
      //       iconClass: 'icon icon-success'
      //     })
      //   })
      // }
    }
  }
}
</script>
