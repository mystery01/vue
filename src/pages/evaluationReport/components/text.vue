<template>
  <div class="text">
    <!-- <ReportTitle :title=title /> -->
    <p>您是孩子成长中最重要的人。孩子总是在与大人的交流中获得关于自己的认可和认知。若您关注孩子的思考、 感受和行为的方式，您的孩子会意识到自己的独特性，从而增加更多的自信。 </p>
    <p>我们建议您在发现孩子应用自己的优势主题时，及时的与孩子分享和沟通。这将对孩子有一生的积极影响。 您也可以只在我们的行动计划和建议中挑选1条，帮助孩子更好的发展和强化他们的优势。</p>
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
  .text {
    p {
      margin-top .1rem
      line-height .25rem
      color #555B77
      font-size .12rem
    }
  }
</style>
