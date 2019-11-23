<template>
  <div class="activity" style="padding: 28px 40px">
    <p v-for="(item, index) in activity" :key="index">
      {{item.item}}
      <Kefu v-if="item.isShow" />
    </p>
  </div>
</template>

<script>
import Kefu from "@/components/kefu";
export default {
  components: {
    Kefu
  },
  data() {
    return {
      activity: [
        { item: "1、提交账号系统回收前必须先联系", isShow: true },
        {
          item: "2、注册的ID账号必须与即将出售的会员账号一致！",
          isShow: false
        },
        {
          item: "3、注册ID账号后必须实名才可以出售账号和购买账号！",
          isShow: false
        },
        {
          item:
            "4、实名必须上传真实有效身份证正面、身份证反面、银行卡照片才可以通过审核！",
          isShow: false
        },
        {
          item: "5、联系微信专员提交您要购买的会员账号和价格！",
          isShow: false
        },
        {
          item:
            "6、提交账号评估必须填写账号等级、晋级礼金、周俸禄、月俸禄等相关信息！",
          isShow: false
        },
        {
          item:
            "7、发现乱提交不属实的会员账号、账号等级、晋级礼金、周俸禄、月俸禄的将永久冻结ID账号，无法再次参与账号交易！",
          isShow: false
        },
        {
          item:
            "8、提交准确信息会员，评估价格将通过消息发送到ID账号上，请注意查收ID账号最新消息。",
          isShow: false
        },
        {
          item:
            "9、专员会参考会员的账号升级模式等级，以及最近游戏活跃度，存取款活跃度等等综合评估，确定是否回收该账号！",
          isShow: false
        }
      ]
    };
  }
};
</script>

<style>
</style>
