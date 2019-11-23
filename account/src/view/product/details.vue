<template>
  <div class="main">
    <div class="clear">
      <img src="../../assets/imgs/fh.png" class="lt" style="margin:16px 16px 0 0" />
      <el-breadcrumb separator-class="el-icon-arrow-right" class="lt">
        <el-breadcrumb-item :to="{ path: 'index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: 'sell' }">出售大厅</el-breadcrumb-item>
        <el-breadcrumb-item>
          <span style="color:#288cea">详细资料</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="back_item">
      <!-- 标题 -->
      <div class="table_top">
        <span>活动详情</span>
      </div>
      <div class="tip_box">
        温馨提示：购买账号前必须先联系
        <Kefu />
      </div>
      <div class="table_top detail_box">
        <span>会员详细资料</span>
      </div>
      <div class="detail_info">
        <ul>
          <li>
            <label>会员账号</label>
            <span>{{detail.membershipAccount}}</span>
          </li>
          <li>
            <label>等级</label>
            <span>{{detail.grade}}</span>
          </li>
          <li>
            <label>等级礼金</label>
            <span>￥{{detail.gradeGift}}</span>
          </li>
          <li>
            <label>生日礼金</label>
            <span>￥{{detail.birthdaySalary}}</span>
          </li>
          <li>
            <label>节日礼金</label>
            <span>￥{{detail.festivalSalary}}</span>
          </li>
          <li>
            <label>周俸禄</label>
            <span>￥{{detail.weeklySalary}}</span>
          </li>
          <li>
            <label>月俸禄</label>
            <span>￥{{detail.monthlySalary}}</span>
          </li>
          <li>
            <label>一口价</label>
            <span>￥{{detail.price}}</span>
          </li>
          <li>
            <label>发布时间</label>
            <span>{{detail.releaseTime==null?'':detail.releaseTime}}</span>
          </li>
          <li>
            <label>成交时间</label>
            <span>-</span>
          </li>
        </ul>
        <div class="detail_btn_box">
          <button @click="handleClick(1)">我要买</button>
          <button @click="handleClick(2)">我要出价</button>
          <button @click="handleClick(3)">我要卖</button>
        </div>
      </div>
    </div>

    <div class="hd_box">
      <!-- 标题 -->
      <div class="table_top">
        <span>活动细则</span>
      </div>
      <div style="padding:20px 40px">
        <p>
          1、购买账号前必须先联系
          <Kefu />
        </p>
        <p>2、注册ID账号后必须实名才可以出售账号和购买账号！</p>
        <p>3、实名必须上传真实有效身份证正面、身份证反面、银行卡照片才可以通过审核！</p>
        <p>4、联系微信专员提交您要购买的会员账号和价格！</p>
      </div>
    </div>
    <!-- 弹出框 -->
    <Dialog :dialogObj="dialogObj"></Dialog>
  </div>
</template>
<script>
import { bus } from "@/main";
import Dialog from "@/components/dialog";
import Kefu from "@/components/kefu";
export default {
  components: {
    Dialog,
    Kefu
  },
  data() {
    return {
      detail: null,
      dialogObj: {
        title: "",
        type: "",
        show: false,
        price: null,
        membershipAccount: ""
      }
    };
  },
  methods: {
    handleClick(arg) {
      if (this.$store.state.uid == null) {
        var loginDialog = {
          title: "登录",
          type: "login",
          show: true
        };
        bus.$emit("goLogin", loginDialog);
      } else {
        if (arg == 1) {
          (this.dialogObj.title = "我要购买账号"),
            (this.dialogObj.type = 4),
            (this.dialogObj.show = true);
          this.dialogObj.price = this.detail.price;
          this.dialogObj.membershipAccount = this.detail.membershipAccount;
        } else if (arg == 2) {
          (this.dialogObj.title = "我要出价"),
            (this.dialogObj.type = 5),
            (this.dialogObj.show = true);
        } else this.$router.push({ name: "mySell" });
      }
    }
  },
  created() {
    //判断地址栏中 params 是否传值
    var detailsObj = this.$store.state.detail;

    if (detailsObj.monthlySalary != undefined)
      //没传值
      this.detail = detailsObj;
    else {
      this.detail = {};
      this.$alert("页面加载异常，请返回首页", "温馨提示", {
        confirmButtonText: "确定",
        callback: () => {
          this.$router.push({ name: "index" });
        }
      });
    }
  }
};
</script>
