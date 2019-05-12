<template>
  <div class="author">
    <div class="author_banner" />
    <div class="author_content">
      <div class="author_part_one">
        <div class="author_part_one_title">创作零门槛</div>
        <p class="author_part_one_txt">创作简便，一键签约，快速开启写作模式</p>
        <div class="author_part_img author_part_one_img" />
      </div>
      <div class="author_part_one">
        <div class="author_part_one_title">超优厚待遇</div>
        <p class="author_part_one_txt">高福利、多收益，让你的创作没有后顾之忧</p>
        <div class="author_part_img author_part_two_img" />
      </div>
      <div class="author_part_one">
        <div class="author_part_one_title">一站式改编</div>
        <p class="author_part_one_txt">首创有声改编链条，让你的书既能看又能听</p>
        <div class="author_part_img author_part_three_img" />
      </div>
      <div class="author_part_one">
        <div class="author_part_one_title">新人能成神</div>
        <p class="author_part_one_txt">大数据运营，多渠道推广，助力新人成神</p>
        <div class="author_part_img author_part_four_img" />
      </div>
      <div class="author_url">https://www.qijizuopin.com/welfare</div>
      <div class="author_button" @click="handleJoin">点击签约</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
    document.title = '成为作家'
  },
  methods: {
    handleJoin () {
      window.location.href = 'https://www.qijizuopin.com/welfare'
    }
  },
  components: {
  }
}
</script>
<style lang="stylus" scoped>
  .author{
    width: 100%;
    height: 100%
    margin-top: -0.64rem;
    padding-bottom: .4rem;
    .author_banner{
      width: 100%;
      height: 2.37rem;
      background: url('../../../assets/images/common/activity/author_banner.png') no-repeat
      background-size: 100%;
    }
    .author_content{
      // height: 12.12rem;
      .author_part_one{
        margin-top: .44rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .author_part_one_title{
          width: 2.50rem;
          height: .48rem;
          background: url('../../../assets/images/common/activity/author_title.png') no-repeat
          background-size: 100%;
          line-height: .48rem;
          text-align: center;
          font-size: .22rem;
          color: #333;
        }
        .author_part_one_txt{
          margin-top: .25rem;
          font-size: .16rem;
          color: #333;
        }
        .author_part_img{
          width: 1.11rem;
          height: 1.02rem;
          margin-top: .33rem;
          margin-bottom: .12rem;
        }
        .author_part_one_img{
        background: url('../../../assets/images/common/activity/author_bg_1.png') no-repeat
        background-size: 100%;
        }
        .author_part_two_img{
          background: url('../../../assets/images/common/activity/author_bg_2.png') no-repeat
          background-size: 100%;
        }
        .author_part_three_img{
          height: .82rem;
          background: url('../../../assets/images/common/activity/author_bg_3.png') no-repeat
          background-size: 100%;
        }
        .author_part_four_img{
          height: .92rem;
          background: url('../../../assets/images/common/activity/author_bg_4.png') no-repeat
          background-size: 100%;
        }
      }
      .author_url{
        width: 2.68rem;
        height: .22rem;
        line-height: .22rem;
        margin-left: calc((100% - 2.68rem) / 2);
        margin-top: .28rem;
        font-size: .16rem;
        color: #666;
        text-align:center;
      }
      .author_button{
        font-size: .16rem;
        width: 2.68rem;
        height: .36rem;
        background-color: #12CCBF;
        border-radius: .19rem;
        margin-left: calc((100% - 2.68rem) / 2);
        text-align: center;
        line-height: .36rem;
        color: #fff;
        margin-top: .10rem;
      }
    }
}
</style>
