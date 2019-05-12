<template>
  <div class="spinner">
    <div></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
  </div>
</template>
<script>
export default {
  name: 'loading'
}
</script>
<style scoped lang="stylus">
.spinner
  height: 1.04rem
  position:fixed
  width:1.04rem
  left:50%
  margin-left:-.52rem
  text-align:center
  top:50%
  margin-top:-.52rem
  font-size:0
  line-height:0
  border-radius:.04rem
  /* box-shadow:0 0 .06rem rgba(0,0,0,0.20) */
  background:#F9FAF9
  div
    background-color: #F86442;
    height: 0.28rem;
    width: .03rem;
    border-radius:.1rem!important
    display: inline-block;
    margin:0.36rem .02rem
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  .rect2
    animation-delay: -1.1s
  .rect3
    animation-delay: -1s
  .rect4
    animation-delay: -0.9s
  .rect5
    animation-delay: -0.8s
@keyframes sk-stretchdelay
  0%, 40%, 100%
    transform: scaleY(0.4)
    /* height:.24rem
    margin-top:.38rem */
  20%
    transform: scaleY(1.0)
    /* height:.6rem
    margin-top:.2rem */
</style>
