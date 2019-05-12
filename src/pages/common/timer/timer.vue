<template>
  <div class="timer">
    <p v-if="info">{{info}}</p>
    <em v-if="surplus">剩余:</em>
    <span>{{gap.day}}</span>
    <em>天</em>
    <span>{{gap.hour}}</span>
    <em>:</em>
    <span>{{gap.min}}</span>
    <em>:</em>
    <span>{{gap.sec}}</span>
  </div>
</template>
<script>
export default {
  name: 'Timer',
  props: {
    info: String,
    gapTime: Number,
    surplus: Boolean
  },
  data () {
    return {
      gap: {
        day: '',
        min: '',
        hour: '',
        sec: ''
      },
      timer: null
    }
  },
  watch: {
    gapTime (to) {
      this.runTimer(to)
    }
  },
  methods: {
    runTimer (gap) {
      console.log(gap)
      let that = this
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        let day = 0
        let hour = 0
        let minute = 0
        let second = 0
        if (gap > 0) {
          day = Math.floor(gap / 86400)
          hour = Math.floor(gap / (60 * 60)) - (day * 24)
          minute = Math.floor(gap / 60) - (day * 24 * 60) - (hour * 60)
          second = Math.floor(gap) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
        }
        if (day <= 9) day = '0' + day
        if (hour <= 9) hour = '0' + hour
        if (minute <= 9) minute = '0' + minute
        if (second <= 9) second = '0' + second
        that.gap.day = day
        that.gap.hour = hour
        that.gap.min = minute
        that.gap.sec = second
        console.log(day + '天:' + hour + '小时：' + minute + '分钟：' + second + '秒')
        gap--
        if (gap <= 0) {
          that.gap.day = 0
          that.gap.hour = 0
          that.gap.min = 0
          that.gap.sec = 0
          clearInterval(that.timer)
          that.$emit('timerStatus', false)
          // that.status = false
        }
      }, 1000)
    }
  },
  mounted () {
    console.log('timer', this.timer)
    // clearInterval(this.timer)
    // this.timer = null
    this.runTimer(this.gapTime)
  },
  destroyed () {
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>
<style lang="stylus" scoped>
.timer
  font-size:0
  line-height:0
  p
    display:inline-block
    vertical-align:middle
    font-size:.16rem
    line-height:.22rem
    color:#333
  span
    display:inline-block
    vertical-align:middle
    font-size:.14rem
    line-height:.2rem
    color:#8B5723
    border:.005rem solid #8B5723
    border-radius:.04rem
    width .22rem
    height .2rem
    text-align center
    margin:0 .03rem
  em
    display:inline-block
    vertical-align:middle
    font-size:.14rem
    line-height:.22rem
    font-style:normal
    color:#8B5723
</style>
