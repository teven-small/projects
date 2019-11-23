<template>
  <div class="main">
    <div class="back_item">
      <!-- 标题 -->
      <div class="table_top">
        <span>活动详情</span>
      </div>
      <div style="padding: 0 30px 20px">
        <p class="title">会员账号评估价格表</p>

        <!-- 会员账号回收表格 -->
        <Table :tableData="tableData" :show="true" :topShow="false"></Table>
      </div>
    </div>

    <div class="back_item">
      <!-- 标题 -->
      <div class="table_top">
        <span>等级账户评估</span>
      </div>

      <!-- 表单 -->
      <Form :show="true"></Form>
    </div>

    <div class="back_item">
      <!-- 标题 -->
      <div class="table_top">
        <span>活动细则</span>
      </div>
      <Activity />
    </div>
  </div>
</template>

<script>
import Form from "@/components/form";
import Table from "@/components/table";
import fn from "@/assets/js/data";
import Activity from "@/components/activity";
export default {
  components: {
    Form,
    Table,
    Activity
  },
  data() {
    return {
      //表格数据
      tableData: {
        // 表格类型
        type: 2,
        typeId: 3,
        //显示分页
        show: false,
        isCall: false,
        //表格标题
        tableTitle: "活动详情",
        //表格head
        //   tableHead: [
        //     { name: "VIP等级" },
        //     { name: "等级礼金（元）" },
        //     { name: "周薪（元）" },
        //     { name: "月薪（元）" },
        //     { name: "生日彩金（元）" },
        //     { name: "节日彩金（元）" },
        //     { name: "参考价格（元）" }
        //   ],
        tableHead: [
          { name: "VIP等级" },
          { name: "充值金额" },
          { name: "有效投注量" },
          { name: "晋级礼金" },
          { name: "周俸禄礼金" },
          { name: "月俸禄礼金" },
          { name: "生日礼金" },
          { name: "节日礼金" },
          { name: "参考价格" }
        ],
        //表格body
        tableBody: []
      }
    };
  },
  created() {
    //账号评估table数据
    this.tableData.tableBody = fn.assessBody;
  }
};
</script>

<style>
</style>
