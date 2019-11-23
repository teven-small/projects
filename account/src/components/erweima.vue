<template>
  <div class="sidebar">
    <div class="clear">
      <a target="_blank" href="http://mab.xinkefu.net/Web/im.aspx?_=t&accountid=108573">
        <img :src="sidebarObj.icon" style="vertical-align: bottom;" />
        <span>{{sidebarObj.title}}</span>
      </a>
      <img style="width:120px;height:120px" :src="sidebarObj.erweima" />
      <p>{{sidebarObj.type}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sidebarObj"]
};
</script>

<style>
</style>
