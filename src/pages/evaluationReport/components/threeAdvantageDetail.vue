<template>
  <div class="threeAdvantageDetail">
    <ReportTitle :title=title />
    <p>您孩子的三大优势</p>
    <p>盖洛普青少年优势测评将帮助您了解您孩子自然地思考、感觉或行为的方式。盖洛普一共设计了十个优势主 题。而这份报告将帮助您了解孩子的前三个主题。</p>
    <p>关注孩子的思考、感觉和行为的方式对您来说可能是个新事物。盖洛普青少年优势测评报告可以帮是您发现 孩子这些独特方式，帮助您更好的与孩子沟通，了解他想问题的思路，面对问题的感受，以及解决问题时的 途径。您可能会因此发现您的孩子也许更擅长做一些事情，对某些事情更有热情。您也可能会由此意识到更 好的引导和培养孩子的方式，真正做到因材施教。</p>
    <p>请记住，您的孩子是独一无二的。他或她本身就是一个美好的存在。看到他或她的闪光点，并且培养和发展 他或她擅长的事情，可以帮助你实现孩子高质量的亲子互动，建立亲密的亲子关系，同时提高孩子的整体素 质能力。</p>
    <div class="keyWord" v-for='(ele,index) in themeList' :key=index>
        <p>{{ele.name}}</p>
        <div class="content">{{ele.description}}</div>
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
      title: '三大优势主题的详细解释',
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
  .threeAdvantageDetail {
    p {
      margin-top .1rem
      line-height .25rem
      color #555B77
      font-size .12rem
    }
    .keyWord {
      .content {
        padding: 0.15rem 0.1rem 0.15rem 0.1rem;
        border: 0.01rem dashed #ffa366;
        border-radius: 0.04rem;
        font-size .12rem
        padding .15rem auto
        line-height .25rem
        color #555B77

      }
      p {
        color #363A4D
        font-size .14rem
      }
    }
  }
</style>
