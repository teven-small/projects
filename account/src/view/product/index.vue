<template>
  <div class="main">
    <!-- 轮播图 -->
    <div class="banner clear">
      <div class="banner_box lt">
        <el-carousel height="287px">
          <el-carousel-item v-for="(item, index) in bannerList" :key="index">
            <img :src="item.img" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="login_box rt" v-if="showLoginBox">
        <div class="login_item">
          <img class="lt" src="../../assets/imgs/user.jpg" />
          <input type="text" placeholder="账号" v-model.trim="account" />
        </div>
        <div class="login_item">
          <img class="lt" src="../../assets/imgs/password.jpg" />
          <input type="password" placeholder="密码" v-model.trim="password" />
        </div>
        <div class="login_item code_div">
          <img class="lt" src="../../assets/imgs/login_cap.png" />
          <div class="clear lt">
            <input type="text" placeholder="验证码" v-model.trim="code" @focus="codeFn()" />
            <p class="lt" v-if="showCode" @click="codeClickFn">{{ccode}}</p>
          </div>
        </div>
        <div class="login_btn" @click="loginFn(account,password,code)">会员登录</div>
        <div class="login_zz clear">
          <span class="regist" @click="register">免费注册</span>
          <span class="back_pwd" @click="jumpKefu">
            <i></i>找回密码
          </span>
        </div>
      </div>
      <div class="login_box rt login_after" style="padding: 16px 22px;" v-else>
        <p class="welcome">
          欢迎回来！{{uName}}
          <span @click="jumpAppress">
            (
            <i>{{newsNum}}</i>条新消息)
          </span>
        </p>
        <div
          class="login_item clear"
          v-for="(item, index) in btnArr"
          :key="index"
          @click="btnClickFn(index)"
        >
          <img :src="item.img" class="lt" />
          <span class="lt">{{item.label}}</span>
        </div>
      </div>
    </div>

    <!-- 最新消息 -->
    <News></News>

    <div class="table_top clear">
      <span class="lt">最新出售账号</span>
      <div class="rt" @click="jumpSellFn">
        <i class="readMore">查看更多 ></i>
      </div>
    </div>

    <div class="roll_list">
      <div class="roll_top clear">
        <span v-for="(item, index) in newSellTableHead" :key="index">{{item}}</span>
      </div>
      <div
        class="list clear"
        :style="style1"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
        ref="rollItem"
      >
        <div class="clear" v-for="(item, index) in newSellTableBody" :key="index">
          <span>{{item.membershipAccount}}</span>
          <span>{{item.grade}}</span>
          <span>{{item.gradeGift}}</span>
          <span>{{item.weeklySalary}}</span>
          <span>{{item.monthlySalary}}</span>
          <span>{{item.price}}</span>
          <span class="deal_success">交易成功</span>
        </div>

        <div>
          <div class="clear" v-for="(item, index) in newSellTableBody" :key="index">
            <span>{{item.membershipAccount}}</span>
            <span>{{item.grade}}</span>
            <span>{{item.gradeGift}}</span>
            <span>{{item.weeklySalary}}</span>
            <span>{{item.monthlySalary}}</span>
            <span>{{item.price}}</span>
            <span class="deal_success">交易成功</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 表格 -->
    <Table :tableData="sellAcountTable" :topShow="true" :show="true" :isCall="true"></Table>

    <BuyForm></BuyForm>

    <!-- 弹出框 -->
    <Dialog :dialogObj="dialogObj" ref="closeDialog"></Dialog>
  </div>
</template>

<script>
import News from "@/components/news";
import Table from "@/components/table";
import BuyForm from "@/components/buyForm";
import Dialog from "@/components/dialog";
import { bus } from "@/main";
export default {
  components: {
    News,
    Table,
    BuyForm,
    Dialog
  },
  data() {
    return {
      uName: "", //登录名
      //轮播图
      bannerList: [
        { img: require("../../assets/imgs/banner1.png") },
        { img: require("../../assets/imgs/banner2.jpg") },
        { img: require("../../assets/imgs/banner3.jpg") },
        { img: require("../../assets/imgs/banner4.jpg") }
      ],
      changeBox: true, //登录切换div
      account: "", //账号
      password: "", //密码
      code: "", //验证码
      ccode: "", //随机验证码
      btnArr: [
        //按钮列表
        { label: "修改密码", img: require("../../assets/imgs/ic_1.png") },
        { label: "账号认证", img: require("../../assets/imgs/ic_2.png") },
        { label: "购买记录", img: require("../../assets/imgs/ic_3.png") },
        { label: "出售记录", img: require("../../assets/imgs/ic_3.png") },
        { label: "注销登录", img: require("../../assets/imgs/ic_1.png") }
      ],
      //最新表格head
      newSellTableHead: [
        "会员账号",
        "等级",
        "等级礼金",
        "周俸禄",
        "月俸禄",
        "标价",
        "操作"
      ],

      newSellTableBody: [], //最新表格body
      // 表格
      sellAcountTable: {
        // 表格类型
        type: 1,
        //显示分页
        typeId: 0,
        show: true,
        showBtn: true,
        isCall: true,
        //表格标题
        tableTitle: "出售大厅",
        //表格body
        tableBody: []
      },

      dialogObj: {
        //弹出框
        title: "",
        type: "",
        show: false
      },

      newsNum: 0,
      newsData: [],

      on: true, //控制开关
      style1: {
        //css样式
        top: ""
      },
      top: 50, //初始top 位置
      w: 710, //图片宽度
      height: 0,
      showCode: false,
      showLoginBox: true
    };
  },
  methods: {
    //最新出售账号列表自动向上移动
    rolling() {
      var that = this;
      this.timer = setInterval(() => {
        if (that.on) {
          that.top--;
          if (that.top < -this.height + 82) {
            that.on = false;
          }
        } else {
          that.top = 50;
          that.on = true;
        }
        that.style1.top = this.top + "px";
      }, 100);
    },

    //鼠标进入最新出售账号列表
    handleMouseenter() {
      //清除定时器
      clearInterval(this.timer);
    },

    //鼠标离开最新出售账号列表
    handleMouseleave() {
      //自动向上移动
      this.rolling();
    },

    //登录验证码获取焦点
    codeFn() {
      this.showCode = true;
    },

    //随机生成四尾数验证码
    generatedCode() {
      const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      let code = "";
      for (let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random() * 10);
        code += random[index];
      }
      this.ccode = code;
    },

    //刷新验证码
    codeClickFn() {
      this.generatedCode();
    },

    //登录
    loginFn(arg1, arg2, arg3) {
      if (arg1 == "") {
        this.$alert("账号不能为空", "温馨提示", {
          confirmButtonText: "确定",
          callback: () => {}
        });
        return;
      }
      if (arg2 == "") {
        this.$alert("密码不能为空", "温馨提示", {
          confirmButtonText: "确定",
          callback: () => {}
        });
        return;
      }
      if (arg3.toUpperCase() != this.ccode) {
        this.$alert("验证码不正确", "温馨提示", {
          confirmButtonText: "确定",
          callback: action => {
            this.generatedCode();
          }
        });
        return;
      }

      var params = {
        userName: arg1,
        password: arg2
      };

      //登录提交数据
      this.userLoginFn(params);
    },

    //登录提交数据
    userLoginFn(arg) {
      //console.log(arg)
      this.api.loginFn(arg).then(res => {
        //console.log(res.data)
        if (res.data.data == 0) {
          this.$alert("登录失败，账号/密码不对", "温馨提示", {
            confirmButtonText: "确定",
            callback: () => {
              this.generatedCode();
            }
          });
        } else {
          this.showLoginBox = false;
          var userInfo = {
            uid: res.data.data,
            uName: arg.userName
          };
          this.$store.commit("uidFn", userInfo);
          this.$nextTick(() => {
            // this.$refs.closeDialog.closedFn()
            // this.$refs.closeDialog.dialogObj.show = false
            // this.$refs.closeDialog.dialogObj.type = ''
            // this.$refs.closeDialog.dialogObj.title = ''
            this.uName = userInfo.uName;
          });
        }
      });
    },

    //注册
    register() {
      var loginDialog = {
        title: "用户注册",
        type: "register",
        show: true
      };
      bus.$emit("goLogin", loginDialog);
    },

    btnClickFn(arg) {
      this.dialogObj.show = true;
      switch (arg) {
        case 0:
          this.dialogObj.title = "修改密码";
          this.dialogObj.type = 1;
          break;
        case 1:
          //判断用户认证状态
          this.approveStateFn();
          break;
        case 2:
          this.dialogObj.title = "购买记录";
          this.dialogObj.type = 3;
          break;
        case 3:
          this.dialogObj.title = "出售记录";
          this.dialogObj.type = 3;
          break;
        case 4:
          var that = this;
          this.$confirm("确定退出登录么？", "温馨提示！", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
            .then(() => {
              this.$nextTick(() => {
                this.$refs.closeDialog.closedFn();
                this.$refs.closeDialog.dialogObj.show = false;
                this.$refs.closeDialog.dialogObj.type = "";
                this.$refs.closeDialog.dialogObj.title = "";
              });
              sessionStorage.removeItem("uid");
              that.showLoginBox = true;
              location.reload();
            })
            .catch(() => {
              this.$Message({
                type: "info",
                duration: 1000,
                message: "已取操作！"
              });
            });
          break;
        default:
          break;
      }
    },

    //判断用户认证状态
    approveStateFn() {
      var params = {
        userId: this.$store.state.uid
      };
      this.api.userApproveStateFn(params).then(res => {
        var n = res.data.data;
        if (n == 0) {
          this.$alert("申请认证中...", "温馨提示", {
            confirmButtonText: "确定",
            callback: action => {
              this.generatedCode();
            }
          });
          return;
        } else if (n == 1) {
          this.dialogObj.title = "账号认证";
          this.dialogObj.type = 2;
        }
      });
    },

    //跳转客服
    jumpKefu() {
      window.open(
        "http://mab.xinkefu.net/Web/im.aspx?_=t&accountid=108573",
        "_blank"
      );
    },

    //跳转到认证列表
    jumpAppress() {
      const { href } = this.$router.resolve({
        name: "message" //页面路径
      });
      window.open(href, "_blank");
    },

    //点击查看更多按钮
    jumpSellFn() {
      const { href } = this.$router.resolve({
        name: "sell" //页面路径
      });
      window.open(href, "_blank");
    },
    //最近出售
    recentSale() {
      this.api.recentSaleFn().then(res => {
        if (res.data.data) {
          if (res.data.data.length > 0) {
            this.newSellTableBody = res.data.data;
            this.$nextTick(e => {
              this.height = this.$refs.rollItem.offsetHeight;
            });
            //最新出售账号自动向上移动
            this.rolling();
          } else {
            //清除定时器
            clearInterval(this.timer);
          }
        }
      });
    },

    //页面加载
    loadingFn() {
      //获取认证返回的数据
      this.getUserApproveNewsNum();

      if (this.$store.state.uid != null) this.showLoginBox = false;
      this.uName = this.$store.state.uName;

      //最近出售
      this.recentSale();

      //随机生成验证码
      this.generatedCode();
    },

    //获取认证返回的数据
    getUserApproveNewsNum() {
      var params = {
        userId: this.$store.state.uid
      };
      this.api.userApproveNewsFn(params).then(res => {
        //console.log(res.data)
        if (res.data.data) {
          this.newsNum = res.data.data.length;
          this.newsData = res.data.data;
        }
      });
    }
  },
  created() {
    //页面加载
    this.loadingFn();
  },
  destroyed() {
    //清除定时器
    clearInterval(this.timer);
  }
};
</script>

<style>
</style>
