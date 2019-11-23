<template>
  <div class="table_box">
    <!-- 表格头部  -->
    <div class="table_top clear" v-if="topShow">
      <span class="lt">{{tableData.tableTitle}}</span>
      <div class="rt">
        <router-link tag="a" target="_blank" :to="{name:'sell'}">
          <button class="buy btn">我要买</button>
        </router-link>
        <button class="sell btn" @click="mySell">我要卖</button>
      </div>
    </div>

    <el-table
      :data="tableData.tableBody"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
      v-if="tableData.type==1"
    >
      <el-table-column align="center" label="会员账号" sortable center>
        <template slot-scope="scope">
          <img src="../assets/imgs/hot.png" alt />
          <p>{{scope.row.membershipAccount}}</p>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="grade" label="等级" sortable></el-table-column>
      <el-table-column align="center" prop="gradeGift" label="等级礼金" sortable></el-table-column>
      <el-table-column align="center" prop="weeklySalary" label="周俸禄" sortable></el-table-column>
      <el-table-column align="center" prop="monthlySalary" label="月俸禄" sortable></el-table-column>
      <el-table-column align="center" prop="price" label="标价" sortable></el-table-column>
      <el-table-column align="center" label="详细资料" v-if="tableData.showBtn">
        <template slot-scope="scope">
          <span @click="jumpDetailsFn(scope.row)">详细资料</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <span @click="buyAccountFn(scope.row)">立即购买</span>
        </template>
      </el-table-column>
    </el-table>

    <div class="table_div" v-else-if="tableData.type == 2">
      <!-- 表格类型2  -->
      <table>
        <thead>
          <tr>
            <th v-for="(item, index) in tableData.tableHead" :key="index">{{item.name}}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            :class="{active:index==active}"
            v-for="(item, index) in tableData.tableBody"
            :key="index"
            @mouseenter="handleMouseenter(index)"
            @mouseleave="handleMouseleave(index)"
          >
            <td>{{item.level}}</td>
            <td>{{item.chongzhi}}</td>
            <td>{{item.touzhu}}</td>
            <td>{{item.jinji}}</td>
            <td>{{item.week}}</td>
            <td>{{item.month}}</td>
            <td>{{item.birth}}</td>
            <td>{{item.festival}}</td>
            <td>{{item.price}}</td>
          </tr>
          <!-- <tr
            :class="{active:index==active}"
            v-for="(item, index) in tableData.tableBody"
            :key="index"
            @mouseenter="handleMouseenter(index)"
            @mouseleave="handleMouseleave(index)"
          >
            <td>{{item.level}}</td>
            <td>{{item.level_gift}}</td>
            <td>{{item.week_price}}</td>
            <td>{{item.mouth_price}}</td>
            <td>{{item.birth_gift}}</td>
            <td>{{item.festival_gift}}</td>
            <td>{{item.price}}</td>
          </tr>-->
        </tbody>
      </table>
    </div>

    <!-- 买卖记录 -->
    <el-table :data="tableData.tableBody" style="width: 100%" v-if="tableData.type==3">
      <el-table-column
        align="center"
        :prop="item.prop"
        :label="item.label"
        v-for="(item,index) in tableData.tablehead"
        :key="index"
      />
    </el-table>

    <!-- 表格分页 -->
    <div class="table_num clear" v-show="tableData.show">
      <div class="lt">
        <span>共{{totle}}条记录,共{{totalPages}}页,每页{{pageSize}}条记录</span>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="totle"
          :page-size="pageSize"
          :current-count="pageIndex"
          @size-change="pageSize"
          @current-change="changCuurengFn"
        ></el-pagination>
      </div>
      <div class="rt">
        <span>每页显示：</span>
        <span v-for="(item,index) in indexArr" :key="index" @click="changSizeFn(item)">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  props: ["tableData", "show", "topShow", "isCall"],
  data() {
    return {
      //表格选中样式
      active: null,

      sort: "",
      sortI: null,
      indexArr: [20, 50, 100, 200],
      totle: 0,
      pageIndex: 1,
      pageSize: 10,
      totalPages: null,
      keyword: "",
      loginDialog: {
        //登录弹出框
        title: "",
        type: "",
        show: false
      }
    };
  },
  methods: {
    //鼠标进入
    handleMouseenter(index) {
      this.active = index;
    },

    //鼠标离开
    handleMouseleave(index) {
      this.active = null;
    },

    handleClick(index) {
      this.sortI = index;
      this.sort = "add";
    },
    ascending(index) {
      this.sort = "reduce";
      this.sortI = index;
    },
    descending(index) {
      this.sort = "add";
      this.sortI = index;
    },

    //出售大厅账号
    sellAccountFn(arg) {
      var params = {
        page: this.pageIndex,
        size: this.pageSize,
        membershipAccount: this.keyword,
        type: arg,
        id: this.$store.state.uid
      };
      this.api.tableDataFn(params).then(res => {
        // console.log(res.data)
        if (res.data.status == 200) {
          this.tableData.tableBody = [];
          this.tableData.tableBody = res.data.data;
          this.totalPages = res.data.page.totalPages;
          this.totle = res.data.page.total;
        }
      });
    },

    //详情页
    jumpDetailsFn(arg) {
      //console.log(arg)
      this.$store.commit("detailDate", arg);
      this.$router.push({
        path: "/product/details"
      });
    },

    //加载表格数据
    loading() {
      //console.log(this.tableData)
      //判断地址栏中 params 是否传值
      var routerObj = this.$route.params;
      var arr = Object.keys(routerObj);
      if (arr.length > 0) {
        this.keyword = routerObj.keyWord;
        this.tableData.typeId = routerObj.typeId;
        var a = "";
        //出售大厅账号
        this.sellAccountFn(a);
      } else {
        if (this.tableData.isCall)
          //出售大厅账号
          this.sellAccountFn(this.tableData.typeId);
      }
      var that = this;
      bus.$on("search", function(arg) {
        // console.log(arg)
        that.tableData.typeId = arg.typeId;
        that.keyword = arg.keyWord;
        var a = "";
        //出售大厅账号
        that.sellAccountFn(a);
      });
    },

    //改变每页大小
    changSizeFn(arg) {
      this.pageSize = arg;
      this.pageIndex = 1;
      this.sellAccountFn(this.tableData.typeId);
    },

    //分页页码点击
    changCuurengFn(val) {
      this.pageIndex = val;
      this.sellAccountFn(this.tableData.typeId);
    },

    //购买账号
    buyAccountFn(arg) {
      if (this.$store.state.uid == null) {
        var loginDialog = {
          title: "登录",
          type: "login",
          show: true
        };
        bus.$emit("goLogin", loginDialog);
      } else {
        var loginDialog = {
          title: "我要购买账号",
          type: "4",
          show: true,
          price: arg.price,
          membershipAccount: arg.membershipAccount
        };
        bus.$emit("buyAccount", loginDialog);
      }
    },

    //我要卖
    mySell() {
      if (this.$store.state.uid == null) {
        var dialogObj = {
          title: "登录",
          type: "login",
          show: true
        };
        bus.$emit("goLogin", dialogObj);
        return;
      } else {
        const { href } = this.$router.resolve({
          name: "mySell" //页面路径
        });
        window.open(href, "_blank");
      }
    }
  },
  created() {
    //加载表格数据
    this.loading();
  }
};
</script>
