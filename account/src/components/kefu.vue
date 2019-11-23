<template>
  <span :class="['jumpKeFu',{wid:type}]" @click="jumpKefu">{{type==true?"请联系 在线客服":"在线客服"}}</span>
</template>

<script>
export default {
  props: ["type"],
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

<style>
.myForm .myItem .wid {
  width: 120px;
}
</style>
