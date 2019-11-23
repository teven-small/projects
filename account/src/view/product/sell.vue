<template>
  <div class="main">
    <!-- 最新消息 -->
    <News></News>

    <!-- 表格 -->
    <Table :tableData.sync="sellAcountTable" :topShow="true"></Table>

    <!-- 弹出框 -->
    <Dialog :dialogObj="dialogObj"></Dialog>
  </div>
</template>

<script>
import Table from "@/components/table";
import News from "@/components/news";
import Dialog from "@/components/dialog";
export default {
  components: {
    Table,
    News,
    Dialog
  },
  data() {
    return {
      dialogObj: {
        title: "",
        type: "",
        show: false,
        price: null,
        membershipAccount: ""
      },
      // 表格
      sellAcountTable: {
        // 表格类型
        type: 1,
        typeId: 0,
        isCall: true,
        //显示分页
        show: true,
        showBtn: true,
        //表格标题
        tableTitle: "出售大厅",
        //表格body
        tableBody: []
      }
    };
  }
};
</script>

<style>
</style>
