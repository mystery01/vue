<template>
  <div class="advisePar">
    <ReportTitle :title=title />
    <p>您是孩子成长中最重要的人。孩子总是在与大人的交流中获得关于自己的认可和认知。若您关注孩子的思考、 感觉和行为的方式，您的孩子会意识到自己的独特性，从而增加更多的自信。</p>
    <p>我们建议您在发现孩子应用自己的优势主题时，及时的与孩子分享和沟通。这将对孩子有一生的积极影响。 您也可以只在我们的行动计划和建议中挑选1条，帮助孩子更好的发展和强化他们的优势</p>
    <div class="keyWord" v-for='(ele,index) in themeList' :key=index>
        <p>{{ele.name}}</p>
        <div class="content">
          <p class="childActionList"  v-for='(ele) in ele.parentActionList' :key=ele><span class="radius"></span>{{ele}}</p>
        </div>
        <div v-show="index === 2" class="question" >
          <p class="discuss">你可以和孩子一起讨论的问题</p>
          <div class="questionBox" v-for='(element,ind) in ele.discussionList' :key=element>
              <p class="ques">{{`${ind+1}. ${element}`}}</p>
          </div>
      </div>
    </div>
    
</div>
</template>
<script>
import ReportTitle from './reportTitle'
export default {
  props: {
    themeList: Array
  },
  data () {
    return {
      title: '给父母的行动计划与建议',
      keyWord: [
        {
          key: '可靠',
          value: '信任对你来说很重要。你在意在别人眼中你是否是个负责任的、可信赖的人。你可以说到做到，你一诺千金。 只要答应的事情，一定做到。你喜欢被委任完成某件事，因为你知道这意味着别人认为你是可靠和值得信赖 的。有时候，被要求做更多的事情就像得到一个奖励，因为这意味着人们相信你。你可能已经在家里或学校 里承担特殊的责任。不管是什么，你都想完成。做完并且做对一件事，以及获得老师和家长的称赞，会让你 感受非常好。有些人可能会说你比其他同龄的孩子年龄大，因为你很有责任心。你可以成为其他人的好榜样'
        }
      ],
      question: [
        {
          value: '信任对你来说很重要?'
        },
        {
          value: '信任对你来说很重要?'
        },
        {
          value: '信任对你来说很重要?'
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
  },
  components: {
    ReportTitle
  }
}
</script>
<style lang="stylus" scoped>
  .advisePar {
    p {
      margin-top .1rem
      line-height .25rem
      color #555B77
      font-size .12rem
    }
    .keyWord {
      .content {
        padding 0 .1rem .15rem .1rem
        line-height .25rem
        .childActionList {
          font-size .12rem
          color #555B77
          position relative
          .radius {
            position absolute
            top .2rem
            left -.1rem
            margin-top -.1rem
            margin-right .05rem
            display inline-block
            width .04rem
            height .04rem
            background #898C99
          }
        }
      }
      p {
        font-size .14rem
        color #363A4D
      }
      .question {
        padding 0rem .1rem .15rem .1rem
        .discuss {
          margin-left -.15rem
          font-size .14rem
          color #363A4D
        }
        .questionBox {
          p {
            margin-top .05rem
            line-height .2rem
            font-size .12rem
            color #555B77
          }
        }
      }
    }
  }
</style>
