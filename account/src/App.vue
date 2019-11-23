<template>
  <div
    id="app"
    v-loading="loading"
    fullscreen="true"
    element-loading-text="拼命加载中..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgb(255, 255, 255)"
    class="app"
  >
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loading: true,
      timeout: null
    };
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        if (
          val.name == "assess" ||
          val.name == "recycle" ||
          val.name == "mySell" ||
          val.name == "details"
        ) {
          this.loading = true;
          this.timeout = setTimeout(() => {
            this.loading = false;
          }, 500);
        } else {
          this.loading = false;
        }
      },
      // 深度观察监听
      deep: true
    }
  },
  destroyed() {
    clearTimeout(this.timeout);
  }
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Arial, Helvetica, sans-serif;
}
/* .el-loading-spinner i,
.el-loading-spinner .el-loading-text {
  color: #fff;
} */
.el-loading-spinner i {
  font-size: 30px;
}
.el-loading-spinner .el-loading-text {
  font-size: 20px;
}
</style>
