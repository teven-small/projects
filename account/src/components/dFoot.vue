<template>
  <div class="dc_foot">
    <div class="main">
      <div class="con">
        <img src="../assets/imgs/foot-bg.png" style="cursor:pointer" @click="jumpKefu" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [
        {
          img: require("../assets/imgs/ic_tel.png"),
          contacttype: "客服电话",
          contact: "400-6630-888"
        },
        {
          img: require("../assets/imgs/ic_qq.png"),
          contacttype: "客服QQ",
          contact: "3032999999"
        },
        {
          img: require("../assets/imgs/ic_wechat.png"),
          contacttype: "客服微信",
          contact: "dzkefu22"
        }
      ]
    };
  },
  methods: {
    //跳转客服
    jumpKefu() {
      window.open(
        "http://mab.xinkefu.net/Web/im.aspx?_=t&accountid=108573",
        "_blank"
      );
    }
  }
};
</script>
