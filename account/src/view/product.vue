<template>
  <div>
    <!-- 页头 -->
    <Head></Head>

    <router-view></router-view>

    <!-- 页尾 -->
    <Foot></Foot>

    <!-- 侧边栏 -->
    <Erweima class="lt_sidebar" :sidebarObj="ltSidebar" />
    <Erweima class="rt_sidebar" :sidebarObj="rtSidebar" />

    <!-- 登录注册 -->
    <Login :dialogObj="loginDialog"></Login>
  </div>
</template>

<script>
import Head from "@/components/dHead";
import Foot from "@/components/dFoot";
import Login from "@/components/login";
import Erweima from "@/components/erweima";

export default {
  components: {
    Head,
    Foot,
    Login,
    Erweima
  },
  data() {
    return {
      loginDialog: {
        //登录弹出框
        title: "",
        type: "",
        show: false
      },
      ltSidebar: {
        type: "苹果下载",
        title: "帮助中心",
        icon: require("../assets/imgs/question.png"),
        erweima: require("../assets/imgs/iphone.png")
      },
      rtSidebar: {
        type: "安卓下载",
        title: "在线客服",
        icon: require("../assets/imgs/kefu_icon.png"),
        erweima: require("../assets/imgs/android.png")
      }
    };
  }
};
</script>

<style>
</style>
