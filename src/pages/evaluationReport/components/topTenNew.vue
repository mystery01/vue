<template>
  <div class="topTen">
    <div class="title">
      <p>十大优势排名</p>
    </div>
    <div class="keyWord">
      <div class="content">{{des}}</div>
      <div v-for='(ele,index) in data' :key='index'>
        <div class="items">
          <div v-if="pay !== '50'" class="lock"></div>
          <div class="des">
            <p>{{ele.key}}</p>
            <p @click='handleJump' :keys='ele.flag' class="link">{{ele.value}}</p>
          </div>
        </div>
        <div class="underline"></div>
      </div>
    </div>
</div>
</template>
<script>
export default {
  props: {
    pay: String
  },
  data () {
    return {
      title: 'TOP3优势主题的详细解释',
      des: '你对未来有很大的憧憬，喜欢想象未来的生活，你会思考你未来会成为什么样子的人，仅仅聚焦在今天正在做的事情并不能满足你大脑想要冒险的需要，你会去学习那些未来能够帮助你的知识和技能。',
      data: [
        {
          key: '孩子的十大优势排名',
          value: '点击查看>>>',
          flag: 99
        }
      ]
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
  },
  methods: {
    handleJump(e) {
      let key = e.target.attributes.keys.value
      console.log(key, 'key')
      // 记录滚动的的位置
      let scrollY = document.documentElement.scrollTop || document.body.scrollTop;
      sessionStorage.setItem('scrollY',scrollY)
      this.$emit('changeCommon',{val: true,type: key - 0})
    }
  },
  components: {
  }
}
</script>
<style lang="stylus" scoped>
  .topTen {
    margin-top .38rem
    .title {
      display flex
      align-items center
      span {
        width .39rem
        height .16rem
        background #5978FF
        font-size .12rem
        line-height .16rem
        text-align center
        border-radius .02rem
        color white
      }
      p {
        margin-left .06rem
        line-height .25rem
        color #363A4D
        font-size .16rem
      }
    }
    
    .keyWord {
      .content {
        padding: 0.15rem 0.1rem 0.15rem 0.1rem;
        font-size .12rem
        padding .15rem auto
        line-height .25rem
        color #555B77
      }
      .items {
        display flex
        align-items center
        margin-top .17rem
        .lock {
          width .13rem
          height .17rem
          background url('../../../assets/images/evaluationReport/lock.png')
          background-size 100% 100%
        }
        .des {
          height .32rem
          width 100%
          display: flex;
          margin-left .14rem
          flex-direction: column;
          justify-content: space-between;
          p {
            font-size .12rem
            color #363A4D
          }
          .link {
            color #5978FF
            margin-top .08em
          }
        }
      }
      .underline {
          width 100%
          height .01rem
          background #CFD1D9
          margin-top .13rem
        }
    }
  }
</style>
