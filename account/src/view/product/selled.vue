<template>
  <div class="main">
    <!-- 最新消息 -->
    <News></News>

    <!-- 表格 -->
    <Table :tableData.sync="tableData" :topShow="true"></Table>
  </div>
</template>

<script>
import Table from "@/components/table";
import News from "@/components/news";
export default {
  components: {
    Table,
    News
  },
  data() {
    return {
      //表格数据
      tableData: {
        // 表格类型
        type: 1,
        typeId: 2,
        showBtn: false,
        //显示分页
        show: true,
        isCall: true,
        //表格标题
        tableTitle: "已售账号",
        //表格body
        tableBody: []
      }
    };
  }
};
</script>

<style>
</style>
