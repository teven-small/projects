<template>
  <div class="dc_head">
    <!-- 头部链接 -->
    <div class="top_nav main clear">
      <router-link :to="{name:'index'}" class="page_name lt">账号交易系统</router-link>
      <div class="head_nav rt">
        <a
          href="javascript:;"
          v-for="(item, index) in headNav"
          :key="index"
          @click="jupm933(item.url)"
        >{{ item.title }}</a>
      </div>
    </div>

    <!-- 搜索框 -->
    <div class="search_box">
      <div class="main clear">
        <div class="logo lt">
          <img :src="logoImg" alt="logo" @click="jupm933('https://933c2.com/')" />
        </div>
        <div class="rt">
          <div class="cont lt">
            <!-- 下拉菜单 -->
            <el-dropdown trigger="click" @command="handleCommand">
              <el-button type="primary">
                {{realityLevel}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  :command="item"
                  v-for="(item, index) in menu"
                  :key="index"
                >{{item}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <i class="i">
              <input type="text" placeholder="请输入要查询的关键字" v-model="keyWord" />
            </i>
          </div>
          <button class="search_btn" @click="searchFn">搜索</button>
        </div>
      </div>
    </div>

    <!-- 导航栏 -->
    <div class="nav">
      <div class="main">
        <div
          :class="['nav_item', {canHover:index<6}, {cur:isCur == item.name}, {buy:index == aBuy}, {sell:index == aSell}, {service:index == service}]"
          v-for="(item, index) in nav"
          :key="index"
          @click="jumpPage(index, item)"
        >{{item.title}}</div>
      </div>
    </div>
    <!-- <login :dialogObj="dialogObj" ref="closeDialog"></login> -->
  </div>
</template>

<script>
import { bus } from "../main";
import login from "../components/login";
export default {
  components: {
    login
  },
  data() {
    return {
      //头部导航标题
      headNav: [
        { title: "彩票", url: "https://933c2.com/betcenter" },
        { title: "棋牌游戏", url: "https://933c2.com/cards" },
        { title: "电子游戏", url: "https://933c2.com/games" },
        { title: "真人视讯", url: "https://933c2.com/realis" },
        { title: "体育竞技", url: "https://933c2.com/sports" },
        { title: "优惠活动", url: "https://933c2.com/promotions" }
      ],

      //logo图
      logoImg: require("../assets/imgs/logo.png"),

      realityLevel: "会员账号",

      //下拉菜单数据
      menu: ["会员账号", "等级", "标价", "等级礼金", "周俸禄", "月俸禄"],

      isCur: "index",
      //导航栏
      nav: [
        { title: "首页", name: "index" },
        { title: "出售大厅", name: "sell" },
        { title: "热卖账号", name: "hotSell" },
        { title: "已售账号", name: "selled" },
        { title: "账号评估", name: "assess" },
        { title: "账号交易流程", name: "recycle" },
        { title: "在线客服", name: "" },
        { title: "我要买", name: "" },
        { title: "我要卖", name: "" }
      ],

      aBuy: 7, //购买按钮
      aSell: 8, //卖出按钮
      service: 6, //客服按钮
      keyWord: null,
      dialogObj: {
        title: "",
        type: "",
        show: false
      },
      curIndex: 0
    };
  },
  methods: {
    //搜索框下拉框点击
    handleCommand(val) {
      this.realityLevel = val;
    },

    //点击导航跳转页面
    jumpPage(index, item) {
      if (index != 6) {
        this.isCur = item.name;
      }
      switch (index) {
        case 0:
          this.$router.push({ name: "index" });
          break;
        case 1:
          this.$router.push({ name: "sell" });
          break;
        case 2:
          this.$router.push({ name: "hotSell" });
          break;
        case 3:
          this.$router.push({ name: "selled" });
          break;
        case 4:
          if (this.$store.state.uid == null) {
            this.goLogin();
          } else this.$router.push({ name: "assess" });
          break;
        case 5:
          if (this.$store.state.uid == null) {
            this.goLogin();
            return;
          } else this.$router.push({ name: "recycle" });
          break;
        case 6:
          var href = "http://mab.xinkefu.net/Web/im.aspx?_=t&accountid=108573";
          window.open(href, "_blank");
          break;
        case 7:
          this.$router.push({ name: "sell" });
          break;
        case 8:
          if (this.$store.state.uid == null) {
            this.goLogin();
            return;
          } else this.$router.push({ name: "mySell" });
          break;
        default:
          break;
      }
    },

    //搜索查询
    searchFn() {
      var obj = {
        keyWord: this.keyWord,
        typeId: ""
      };
      if (this.$route.name == "sell") {
        bus.$emit("search", obj);
      } else {
        this.$router.push({
          name: "sell",
          params: obj
        });
      }
    },

    //登录弹出框
    goLogin() {
      var dialogObj = {
        title: "登录",
        type: "login",
        show: true
      };
      bus.$emit("goLogin", dialogObj);
    },

    //跳转到933官网
    jupm933(arg) {
      if (arg) window.open(arg, "_blank");
    }
  },
  created() {
    this.isCur = this.$route.name;
  },
  updated() {
    this.isCur = this.$route.name;
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        this.isCur = val.meta.title;
      }
    }
  }
};
</script>
