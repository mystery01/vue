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
      <div class="progress-detail">{{current}}/{{subject.length}}</div>
    </div>
    <div class="evaluation-body">
      <div class="evaluation-subject">
        <div v-for="(item, index) in subject" :key="index">
          <mt-radio
            v-if="(index + 1) === current"
            :title="item.title"
            v-model="item.value"
            :options="options">
          </mt-radio>
        </div>
      </div>
    </div>
    <div class="evaluation-footer">
      <mt-button type="danger" size="large" @click="handleNext">下一题</mt-button>
      <mt-button type="danger" size="large" @click="handlePrevious" :disabled="current === 1">上一题</mt-button>
    </div>
  </div>
</template>

<script>
import { MessageBox, Toast  } from 'mint-ui'
export default {
  name: 'evaluation',
  data () {
    return {
      current: 1,
      subject: [
        {
          title: 'aaaaaa',
          value: 'A'
        },
        {
          title: 'bbbbbb',
          value: 'A'
        },
        {
          title: 'ccccc',
          value: 'A'
        },
        {
          title: 'ddddd',
          value: 'A'
        }
      ],
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
        },
        {
          label: '这道题我没有感觉',
          value: 'E'
        }
      ]
    }
  },
  computed: {
    progress () {
      return Math.ceil(this.current / this.subject.length * 100)
    }
  },
  mounted () {
  },
  methods: {
    handlePrevious () {
      this.current -= 1
    },
    handleNext () {
      if (this.current + 1 <= this.subject.length) {
        this.current += 1
      } else {
        MessageBox.confirm('确定提交测试内容?').then(action => {
          Toast({
            message: '提交成功',
            iconClass: 'icon icon-success'
          })
        })
      }
    }
  }
}
</script>
