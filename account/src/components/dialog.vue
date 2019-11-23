<template>
  <div>
    <!-- 修改密码 -->
    <el-dialog
      :title="dialogObj.title"
      :visible.sync="dialogObj.show"
      @closed="closedFn"
      v-if="dialogObj.type==1"
    >
      <div class="registor_box">
        <div class="item">
          <label>
            <sup style="color:red">*</sup>旧密码
          </label>
          <input type="password" v-model.trim="oldPwd" />
        </div>
        <div class="item">
          <label>
            <sup style="color:red">*</sup>新密码
          </label>
          <input type="password" v-model.trim="newPwd" />
        </div>
        <div class="item">
          <label>
            <sup style="color:red">*</sup>确认密码
          </label>
          <input type="password" v-model.trim="repeatPwd" />
        </div>
        <div class="dialog_footer">
          <span slot="footer">
            <el-button type="primary" size="small" @click="changePwdFn">确 定</el-button>
          </span>
        </div>
      </div>
    </el-dialog>

    <!-- 用户认证 -->
    <el-dialog
      :title="dialogObj.title"
      :visible.sync="dialogObj.show"
      @closed="closedFn"
      v-else-if="dialogObj.type==2"
      class="uploader"
    >
      <div class="uploader_box">
        <div class="clear">
          <label class="lt">银行卡</label>
          <Upload @sengFile="sengFileFn1" tip="点击上传银行卡照片" class="clear" @deleteImg="deleteImg1"></Upload>
        </div>
        <div class="clear">
          <label class="lt">卡主姓名</label>
          <input type="text" class="card_name" v-model.trim="approveName" />
        </div>
        <div class="clear">
          <label class="lt">上传身份证照片</label>
          <Upload @sengFile="sengFileFn2" tip="身份证正面" class="clear" @deleteImg="deleteImg2"></Upload>
        </div>
        <div class="clear">
          <label class="lt"></label>
          <Upload @sengFile="sengFileFn3" tip="身份证反面" class="clear" @deleteImg="deleteImg3"></Upload>
        </div>
        <div class="dialog_btn">
          <el-button type="primary" size="small" @click="userApprove">确 定</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 记录 -->
    <el-dialog
      :title="dialogObj.title"
      :visible.sync="dialogObj.show"
      @closed="closedFn"
      v-else-if="dialogObj.type==3"
    >
      <div class="uploader_box padding_lt">
        <Table :tableData="buyRecord" />
        <div class="dialog_btn" style="text-align: center;padding: 40px 0 0 0;">
          <el-button type="primary" size="small" @click="closedFn">关 闭</el-button>
        </div>
      </div>
    </el-dialog>

    <!-- 购买账号 -->
    <el-dialog
      :title="dialogObj.title"
      :visible.sync="dialogObj.show"
      @closed="closedFn"
      v-else-if="dialogObj.type==4"
    >
      <div class="myForm">
        <div class="myItem">
          <span>添加微信专员</span>
          <Kefu style="text-align: left;" />
        </div>
        <div class="myItem">
          <span>账号ID</span>
          <i>{{myAccount}}</i>
        </div>
        <div class="myItem">
          <span>您想购买的账号</span>
          <div>{{dialogObj.membershipAccount}}</div>
        </div>
        <div class="myItem">
          <span>卖方一口价</span>
          <div>￥{{dialogObj.price}}</div>
        </div>
        <div class="myItem">
          <span>您的最高报价</span>
          <input type="number" v-model.trim="h_price" />
        </div>
        <div class="myItem">
          <span>其他</span>
          <textarea v-model.trim="other"></textarea>
        </div>
        <div class="dialog_btn" style="text-align: center;padding: 40px 0 0 0;">
          <el-button type="primary" size="small" @click="buySubmite">确定提交</el-button>
        </div>
      </div>
    </el-dialog>

    <!-- 我要出价 -->
    <el-dialog
      :title="dialogObj.title"
      :visible.sync="dialogObj.show"
      @closed="closedFn"
      v-else-if="dialogObj.type==5"
    >
      <div class="myForm">
        <div class="myItem">
          <span>账号ID</span>
          <i>{{myAccount}}</i>
        </div>
        <div class="myItem">
          <span>您想购买的账号</span>
          <div>{{dialogObj.membershipAccount}}</div>
        </div>
        <div class="myItem">
          <span>您的出价</span>
          <input type="number" v-model="c_price" />
        </div>
        <div class="myItem">
          <span>其他</span>
          <textarea v-model="other"></textarea>
        </div>
        <div class="dialog_btn" style="text-align: center;padding: 40px 0 0 0;">
          <el-button type="primary" size="small" @click="chuPriceSubmite">确定提交</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Table from "../components/table";
import Upload from "../components/uploader";
import { bus } from "../main";
import { Loading } from "element-ui";
import Kefu from "@/components/kefu";
export default {
  props: ["dialogObj"],
  components: {
    Table,
    Kefu,
    Upload
  },
  data() {
    return {
      repeatPwd: "", //确认密码
      imageUrl: "",
      oldPwd: "",
      newPwd: "",
      // 表格
      buyRecord: {
        isCall: false,
        // 表格类型
        type: 3,
        typeId: 0,
        //显示分页
        show: false,
        showBtn: false,
        tablehead: [
          { label: "账号", prop: "" },
          { label: "等级", prop: "" },
          { label: "等级礼金", prop: "" },
          { label: "周俸禄", prop: "" },
          { label: "月俸禄", prop: "" },
          { label: "标价", prop: "" },
          { label: "出价", prop: "" },
          { label: "成交价格", prop: "" },
          { label: "状态", prop: "" },
          { label: "操作", prop: "" }
        ],
        //表格body
        tableBody: []
      },
      h_price: "",
      other: "",
      myAccount: "",
      c_price: null,

      blankCard: "",
      idCardOne: "",
      idCardTwo: "",
      approveName: "",
      loading: null
    };
  },
  methods: {
    //上传获取银行卡img文件
    sengFileFn1(arg) {
      this.blankCard = arg;
    },
    //上传获取身份证正面img文件
    sengFileFn2(arg) {
      this.idCardOne = arg;
    },
    //上传获取身份证反面img文件
    sengFileFn3(arg) {
      this.idCardTwo = arg;
    },
    //删除上传的图片
    deleteImg1() {
      this.blankCard = "";
    },
    //删除上传的图片
    deleteImg2() {
      this.idCardOne = "";
    },
    //删除上传的图片
    deleteImg3() {
      this.idCardTwo = "";
    },

    //用户认证提交数据
    userApprove() {
      if (this.blankCard == "") {
        this.$alert("请选择银行卡照片", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      if (this.approveName == "") {
        this.$alert("姓名不能为空", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      if (this.idCardOne == "") {
        this.$alert("请选择身份证正面照片", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      if (this.idCardTwo == "") {
        this.$alert("请选择身份证反面面照片", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }

      this.loading = Loading.service({
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });

      //let url = 'http://192.168.103.124:8999/api/trade/authentication'        //后台地址
      let url = "http://47.75.134.184:8999/api/trade/authentication"; //测试地址
      var formData = new FormData();
      formData.append("fileBank", this.blankCard);
      formData.append("nameOfCardOwner", this.approveName);
      formData.append("fileIDCardOne", this.idCardOne);
      formData.append("fileIDCardTwo", this.idCardTwo);
      formData.append("id", this.$store.state.uid);

      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      this.axios.post(url, formData, config).then(res => {
        //this.api.userApproveFn(obj).then((res)=>{
        //console.log(res)
        if (res.data.data) {
          this.$alert("上传成功", "温馨提示", {
            confirmButtonText: "确定",
            callback: action => {
              this.closedFn();
            }
          });
        } else {
          this.$alert("上传失败", "温馨提示", {
            confirmButtonText: "确定",
            callback: action => {
              this.closedFn();
            }
          });
        }
        this.loading.close();
      });
    },

    closedFn() {
      this.oldPwd = "";
      this.newPwd = "";
      this.repeatPwd = "";
      this.dialogObj.title = "";
      this.dialogObj.type = "";
      this.dialogObj.show = false;
      this.blankCard = "";
      this.idCardOne = "";
      this.idCardTwo = "";
      this.approveName = "";
    },
    //修改密码
    changePwdFn() {
      if (this.oldPwd == "") {
        this.$alert("旧密码不能为空", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      if (this.newPwd == "") {
        this.$alert("新密码不能为空", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      if (this.newPwd != this.repeatPwd) {
        this.$alert("两次输入的密码不对", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      var params = {
        userName: this.$store.state.uName,
        oldPassword: this.oldPwd,
        newPassword: this.newPwd
      };
      this.api.updatePwdFn(params).then(res => {
        // console.log(res)
        if (res.data.data) {
          this.$alert("修改成功", "温馨提示", {
            confirmButtonText: "确定",
            callback: action => {
              this.closedFn();
              this.dialogObj.show = false;
            }
          });
        } else {
          this.$alert("修改失败", "温馨提示", {
            confirmButtonText: "确定",
            callback: action => {}
          });
        }
      });
    },
    //买卖记录
    recordFn(arg) {
      var params = {
        userId: this.$store.state.uid,
        myType: arg
      };
      this.api.recordFn(params).then(res => {
        // console.log(res.data)
        if (res.data.data) {
          this.buyRecord.tableBody = [];
          this.buyRecord.tableBody = res.data.data;
        }
      });
    },

    //购买账号提交数据
    buySubmite() {
      if (this.h_price == "") {
        this.$alert("您的最高报价不能为空", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        return;
      }
      this.$alert("需要实名认证", "温馨提示", {
        confirmButtonText: "确定",
        callback: action => {}
      });
    },

    //出价提交数据
    chuPriceSubmite() {
      if (this.c_price == "") {
        this.$alert("您的出价不能为空", "温馨提示", {
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
  },
  created() {
    // this.generatedCode()
    this.myAccount = this.$store.state.uName;

    var that = this;
    bus.$on("buyAccount", function(arg) {
      that.dialogObj.show = true;
      that.dialogObj.type = arg.type;
      that.dialogObj.title = arg.title;
      that.dialogObj.price = arg.price;
      that.dialogObj.membershipAccount = arg.membershipAccount;
    });
  }
};
</script>