<template>
  <transition name="toast-fade">
    <div class="toast"
      :class="status"
      v-show="isActive"
      ref="toast"
      >
      <div class="shade"></div>
      <div class="content">
        <em></em>
        <span>{{content}}</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    list: [],
    title: null,
    content: null,
    type: null,
    status: null,
    isActive: false,
    timer: null,
    onShow: () => {},
    onHide: () => {}
  }),
  methods: {
    // 显示
    show (params) {
      let {content, title, onShow, onHide, type, status} = params
      this.status = status || ''
      this.content = content
      this.title = title
      this.onShow = onShow
      this.onHide = onHide
      this.isActive = true
      this.type = type || 'warn'
      this.setTimer()
    },
    // 计时器
    setTimer () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.isActive = false
      }, 2000)
    }
  },
  watch: {
    isActive (val) {
      if (val && typeof this.onShow === 'function') {
        this.onShow()
      } else if (!val && typeof this.onHide === 'function') {
        this.onHide()
      }
    }
  }
}
</script>

<style>
.toast {
  position:fixed;
  top:50%;
  font-size:0;
  line-height:0;
  text-align:center;
  padding:.15rem .2rem;
  border-radius:.04rem;
  height:auto;
  overflow:hidden;
  left:50%;
  z-index: 9999;
  transform: translate(-50%, -50%)
}
.shade{
  position: absolute;
  top:0;
  right:0;
  bottom: 0;
  left:0;
  background:#000;
  opacity:.6;
}
.toast .content{
  position: relative;
  z-index: 2
}
.toast.succ{
  /* min-width:.9rem; */
}
.succ em{
  display: inline-block;
  background:url(../../../assets/images/home/succ.png) no-repeat center top;
  background-size:100% auto;
  display:inline-block;
  width:.2rem;
  height:.2rem;
  vertical-align:middle;
  margin-right: .15rem;
}
.succ span{
  font-size:.13rem;
  line-height:.18rem;
  color:#fff;
  display:inline-block;
  vertical-align:middle;
}
.toast span{
  max-width:1.25rem;
  min-width: .6rem;
  font-size:.13rem;
  line-height:.18rem;
  color:#fff;
  display:inline-block;
  vertical-align:middle;
}
.fail em{
  background:url(../../../assets/images/home/fail.png) no-repeat center top;
  background-size:100% auto;
  display:inline-block;
  width:.2rem;
  height:.2rem;
  vertical-align:middle;
}
.fail span{
  max-width:1.25rem;
  height:auto;
  overflow:hidden;
  font-size:.13rem;
  line-height:.18rem;
  color:#fff;
  display:inline-block;
  vertical-align:middle;
  margin-left:.15rem;
}
.toast-fade-enter, .toast-fade-leave-active {
  opacity: 0;
  /* transform: translateY(100%); */
}
.toast-fade-leave-active,
.toast-fade-enter-active {
  transition: all 400ms cubic-bezier(.36,.66,.04,1);
}
</style>
