<template>
  <div class="threeAdvantageDetail">
    <ReportTitle :title=title />
    <p>少儿优势测评将帮助您了解您孩子自然而然产生的思考、感受和行为背后的驱动力及其表达方式。一共有十个优势主题。这份报告将帮助您了解孩子的前三个优势主题。 </p>
    <p>关注孩子的优势主题可以帮您更好的与孩子沟通，了解他/她想问题的思路，面对问题的感受，以及解决问题时的途径。您可能会因此发现您的孩子更擅长做一些事情，对某些事情更有热情。您也可能会由此意识到更好的引导和培养孩子的方式，真正做到因材施教。</p>
    <p>希望在阅读本报告后，您能看到您孩子的独特性。然后根据他/她的优势，培养和发展他/她擅长的事物。最终实现您与孩子高质量的亲子互动，建立亲密的亲子关系。</p>
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
