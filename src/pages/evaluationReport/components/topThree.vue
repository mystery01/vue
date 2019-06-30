<template>
  <div v-if='themeList.length' class="topThree">
    <div class="title">
      <span>Top3</span>
      <p>{{themeList[2].name}}</p>
    </div>
    <div class="keyWord">
      <!-- <div class="content">{{themeList[2].description}}</div> -->
      <div v-for='(ele,index) in data' :key='index'>
        <div class="items">
          <div class="lock"></div>
          <div class="des">
            <p>{{ele.key.replace(/成就者/, themeList[2].name)}}</p>
            <p class="link" :keys='ele.flag' @click='handleJump'>{{ele.value.replace(/成就者/, themeList[2].name)}}</p>
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
    themeList: Array
  },
  data () {
    return {
      title: 'TOP3优势主题的详细解释',
      data: [
        {
          key: '关于成就者，你要了解的。',
          value: '成就者孩子的特点>>>',
          flag: 30
        },
        {
          key: '成就者孩子如何运用自己的优势？',
          value: '给成就者孩子的建议>>>',
          flag: 31
        },
        {
          key: '成就者孩子如何运用自己的优势？',
          value: '给成就者父母的建议>>>',
          flag: 32
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
  .topThree {
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
