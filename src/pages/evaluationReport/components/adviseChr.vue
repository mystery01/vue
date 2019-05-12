<template>
  <div class="adviseChr">
    <ReportTitle :title=title />
    <div class="keyWord" v-for='(ele,index) in keyWord' :key=index>
        <p>{{ele.key}}</p>
        <div class="content">{{ele.value}}</div>
    </div>
</div>
</template>
<script>
import ReportTitle from './reportTitle'
export default {
  props: {
  },
  data () {
    return {
      title: '孩子的行动建议',
      keyWord: [
        {
          key: '可靠',
          value: '信任对你来说很重要。你在意在别人眼中你是否是个负责任的、可信赖的人。你可以说到做到，你一诺千金。 只要答应的事情，一定做到。你喜欢被委任完成某件事，因为你知道这意味着别人认为你是可靠和值得信赖 的。有时候，被要求做更多的事情就像得到一个奖励，因为这意味着人们相信你。你可能已经在家里或学校 里承担特殊的责任。不管是什么，你都想完成。做完并且做对一件事，以及获得老师和家长的称赞，会让你 感受非常好。有些人可能会说你比其他同龄的孩子年龄大，因为你很有责任心。你可以成为其他人的好榜样'
        },
        {
          key: '可靠',
          value: '信任对你来说很重要。你在意在别人眼中你是否是个负责任的、可信赖的人。你可以说到做到，你一诺千金。 只要答应的事情，一定做到。你喜欢被委任完成某件事，因为你知道这意味着别人认为你是可靠和值得信赖 的。有时候，被要求做更多的事情就像得到一个奖励，因为这意味着人们相信你。你可能已经在家里或学校 里承担特殊的责任。不管是什么，你都想完成。做完并且做对一件事，以及获得老师和家长的称赞，会让你 感受非常好。有些人可能会说你比其他同龄的孩子年龄大，因为你很有责任心。你可以成为其他人的好榜样'
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
  .adviseChr {
    p {
      margin-top .1rem
      line-height .25rem
    }
    .keyWord {
      .content {
        margin-top .1rem
        font-size .16rem
        padding .15rem .1rem .15rem .1rem
        border: .01rem dashed #333
        line-height .25rem
      }
      p {
        font-size .2rem
      }
    }
  }
</style>
