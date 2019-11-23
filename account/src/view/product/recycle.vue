<template>
  <div class="main">
    <!-- VIP账号出售流程 -->
    <div class="back_item">
      <div class="table_top">
        <span>VIP账号出售流程</span>
      </div>
      <div class="sellVip" style="padding: 10px 0 10px 40px;">
        <p>
          1、会员联系933娱乐
          <Kefu />，说明出售意向；
        </p>
        <p>2、添加933娱乐账号交易专员QQ；</p>
        <p>3、评估账号价值，制定预售价格，一口价交易金额；</p>
        <p>4、会员留下便于联系的联系方式，以便及时通知、协商账号出售事宜；</p>
        <p>5、交易专员将VIP账号挂售在933娱乐账号交易网，等待买家；</p>
        <p>6、会员可注册933账号交易平台账号，随时关注账号交易信息。</p>
      </div>
    </div>
    <!-- VIP账号购买流程-->
    <div class="back_item">
      <div class="table_top">
        <span>VIP账号购买流程</span>
      </div>
      <div class="sellVip" style="padding: 10px 0 10px 40px;">
        <p>1、注册933账号交易平台账号；</p>
        <p>2、在出售大厅挑选VIP账号；</p>
        <p>
          3、点击
          <Kefu />，说明购买意向；
        </p>
        <p>4、添加933娱乐账号交易专员QQ，进行购买协商；</p>
        <p>5、933娱乐账号交易专员与卖家协商出售价格；</p>
        <p>6、双方达成交易共识；</p>
        <p>7、通过交易专员进行账号、货币交易，交易成功；</p>
        <p>8、933娱乐协助账号转让及账号信息修改；</p>
      </div>
    </div>

    <div class="back_item sellVip" style="padding: 10px 0 10px 40px;">
      <p>933娱乐对账号交易全程担保，坚决抵制一号多卖、虚报价格的行为；</p>
      <p>整个交易过程对会员信息安全全方位把控，确保交易正常、顺利；</p>
      <p>交易达成之后，933娱乐收取交易额10%作为服务费，该费用由双方协商承担方；</p>
      <p>
        如有其它疑问请联系
        <Kefu />咨询。
      </p>
    </div>
    <div class="back_item">
      <!-- 标题 -->
      <div class="table_top">
        <span>账号出售需填</span>
      </div>

      <!-- 表单 -->
      <Form></Form>
    </div>

    <div class="back_item">
      <!-- 标题 -->
      <div class="table_top">
        <span>活动细则</span>
      </div>
      <div style="padding: 28px 40px">
        <Activity />
      </div>
    </div>
  </div>
</template>

<script>
import Form from "@/components/form";
import Table from "@/components/table";
import Activity from "@/components/activity";
import Kefu from "@/components/kefu";
export default {
  components: {
    Table,
    Form,
    Kefu,
    Activity
  },
  data() {
    return {
      //表格数据
      tableData: {
        // 表格类型
        type: "2",
        typeId: 4,
        //表格标题
        isCall: false,
        tableTitle: "活动详情",
        //表格head
        tableHead: [
          { name: "VIP等级" },
          { name: "等级礼金（元）" },
          { name: "周薪（元）" },
          { name: "月薪（元）" },
          { name: "生日彩金（元）" },
          { name: "节日彩金（元）" },
          { name: "参考价格（元）" }
        ]
      }
    };
  },
  created() {}
};
</script>

<style>
</style>
