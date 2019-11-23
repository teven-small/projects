<template>
  <div id="app">
    <router-view 
      v-loading.fullscreen.lock ="loading"
      element-loading-text="拼命加载中....."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)" 
    />
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      loading:true,
      time:null
    }
  },
  methods:{
  },
  created(){
    setTimeout(() => {
      this.loading = false
    }, 1000);
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
  background: #F0F0F0;
}
*{
  margin: 0;
}
.el-loading-spinner i{
  font-size: 40px;
}
.el-loading-spinner .el-loading-text{
  font-size: 16px;
}
</style>
