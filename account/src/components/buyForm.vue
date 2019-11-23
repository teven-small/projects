<template>
  <el-dialog :title="title" :visible.sync="showDialog" width="40%;">
    <div class="registor_box">
      <div class="item">
        <label>添加微信专员</label>
        <Kefu />
      </div>
      <div class="item">
        <label>账号ID</label>
        <span>ww7410</span>
      </div>
      <div class="item">
        <label>您想购买的账号</label>
        <input type="password" v-model.trim="account" />
      </div>
      <div class="item">
        <label>卖方一口价</label>
        <input type="password" v-model.trim="price" />
      </div>
      <div class="item">
        <label>您的最高报价</label>
        <input type="password" v-model.trim="hPrice" />
      </div>
      <div class="item">
        <label>其他</label>
        <textarea></textarea>
      </div>
      <div class="dialog_btn" style="text-align: center;padding: 40px 0 0 0;">
        <el-button type="primary" size="small">确认提交</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import { bus } from "../main";
import Kefu from "@/components/kefu";
export default {
  components: {
    Kefu
  },
  props: ["title", "showDialog"],
  data() {
    return {
      account: "",
      price: "",
      hPrice: ""
    };
  },
  created() {
    bus.$on("buyAccount", function(arg) {
      console.log(arg);
      //   that.dialogObj.show = true;
      //   that.dialogObj.type = arg.type;
      //   that.dialogObj.title = arg.title;
      //   that.dialogObj.price = arg.price;
      //   that.dialogObj.membershipAccount = arg.membershipAccount;
    });
  }
};
</script>

<style>
</style>
