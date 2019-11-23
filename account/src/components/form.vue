<template>
  <div>
    <div class="myForm">
      <div class="myItem">
        <span></span>
        <Kefu :type="true" style="text-align: left;" />
      </div>
      <div class="myItem">
        <span>会员账号</span>
        <input type="text" placeholder="请填写英文、数字" v-model.trim="account" />
      </div>
      <div class="myItem">
        <span>等级</span>
        <input type="number" placeholder="请填写数字" v-model.trim="grdde" />
      </div>
      <div class="myItem">
        <span>等级礼金</span>
        <input type="number" placeholder="请填写数字" v-model.trim="grade_gift" />
      </div>
      <div class="myItem">
        <span>周俸禄</span>
        <input type="number" placeholder="请填写数字" v-model.trim="week_price" />
      </div>
      <div class="myItem">
        <span>月俸禄</span>
        <input type="number" placeholder="请填写数字" v-model.trim="mouth_price" />
      </div>
      <div class="myItem">
        <span>出售标价</span>
        <input type="number" placeholder="请填写数字" v-model.trim="sell_price" />
      </div>
      <div class="myItem">
        <span>其他</span>
        <textarea placeholder="您可以补充说明出售账号信息"></textarea>
      </div>
      <p>说明：会员账号、等级、等级礼金、周俸禄、月俸禄完全匹配正确才能提交成功</p>
      <p v-if="show">温馨提示：您可根据自身账号情况适当进行加价或者减价哦！</p>
    </div>
    <div class="submite_box" @click="submiteFn">
      <button>确定提交</button>
    </div>
  </div>
</template>

<script>
import Kefu from "@/components/kefu";
export default {
  components: {
    Kefu
  },
  props: ["show"],
  data() {
    return {
      account: "",
      grdde: "",
      grade_gift: "",
      week_price: "",
      mouth_price: "",
      sell_price: ""
    };
  },
  methods: {
    submiteFn() {
      if (this.account == "") {
        this.$alert("会员账号不能为空", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      if (this.grdde == "") {
        this.$alert("等级不能为空", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      if (this.grade_gift == "") {
        this.$alert("等级礼金不能为空", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      if (this.week_price == "") {
        this.$alert("周俸禄不能为空", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      if (this.mouth_price == "") {
        this.$alert("月俸禄不能为空", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      if (this.sell_price == "") {
        this.$alert("出售标价不能为空", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      if (this.account.length < 4) {
        this.$alert("出售账号应该包含至少4个字符。", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }

      this.$alert("需要实名认证", "温馨提示", {
        confirmButtonText: "确定",
        callback: action => {}
      });
    }
  }
};
</script>
