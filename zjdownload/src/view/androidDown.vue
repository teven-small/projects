<template>
  <div>
    <!-- 页面头部 -->
    <Header :nowIndex="2"></Header>

    <div class="main">
    <!-- 轮播图区域 -->
    <el-row :gutter="20">
      <el-col :span="13">
        <div class="carousel bottom-box">
          <el-carousel :interval="5000" arrow="hover" height="300px" indicator-position="right">
            <el-carousel-item v-for="(item,index) in bannerList" :key="index">
              <img :src="item.imgUrl" alt class="banner_img">
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="11">
        <div class="banner_list flex bottom-box">
          <div class="banner_content" v-for="(item,i) in banner_rigth_list" :key="i">
            <img :src="item.imgUrl">
            <span class="title">{{item.title}}</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 手游分类 -->
    <div class="bottom-box">
      <el-row>
        <el-col :span="24">
          <div class="category_title">手游分类</div>
        </el-col>
      </el-row>
      <div class="clearfix">
        <span
          v-for="(item,i) in fenlei_list"
          :key="i"
          :class="isActive == i ? 'active' : ''"
          @click="getIsActiveBtn(i)"
        >{{item.fenlei_name}}</span>
      </div>
    </div>
    <!-- 必玩手游 -->
    <div class="bottom-box">
      <el-row>
        <el-col :span="24">
          <div class="category_title">必玩手游</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2.4" v-for="(item,i) in mobile_game_list" :key="i">
          <div class="sy_content">
            <img :src="item.imgUrl">
            <p>{{item.title}}</p>
            <span>{{item.fenl_name}}</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 主体列表 -->
    <div class="and_container clear">
      <!-- 主体列表---左 -->
      <div class="and_c_lf lf bottom-box">
        <div class="and_title">
          <span class="on">最热</span>
          <span>最新</span>
        </div>
        <div class="and_list flex">
          <div v-for="(item,i) in container_left_list" :key="i">
            <div class>
              <img :src="item.imgUrl">
              <p>{{item.title}}</p>
              <span>{{item.fenl_name}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 主体列表---右 -->
      <div class="and_c_rt rt bottom-box">
        <div class="rt_title">
          <span class="on">最新游戏</span>排行榜
        </div>
        <div class="rt_list" v-for="(item,i) in geme_list" :key="i">
          <div class="order">{{item.id}}</div>
          <div class="order_logo">
            <img :src="item.imgUrl">
          </div>
          <div class="introduce">
            <div>{{item.title}}</div>
            <div>{{item.size}}</div>
            <div>
              <span>{{item.fenl_name}}</span>
              <span>{{item.lx_name}}</span>
            </div>
          </div>
        </div>
        <div class="rt_list rank">
          <div class="order">2</div>
          <div class="order_logo">王者荣耀</div>
          <div class="introduce">
            <div>1.58G</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 页面底部 -->
  <Footer></Footer>
    
  </div>
</template>

<script>
import Header from '../components/head'
import Footer from '../components/foot'

export default {
  components:{
      Header,
      Footer
  },
  data() {
    return {
      isActive: 0,
      //轮播图左侧
      bannerList: [
        {
          id: "001",
          imgUrl:
            "https://thumb2.jfcdns.com/n2316n2a9v16fh19/16f5cd2b05baf618.jpeg"
        },
        {
          id: "002",
          imgUrl: "http://thumb11.jfcdns.com/2018-09/27/bce5bac370022ac1.png"
        },
        {
          id: "003",
          imgUrl: "http://thumb12.jfcdns.com/2018-09/26/bce5bab3330e336b.jpeg"
        }
      ],
      //轮播图右侧
      banner_rigth_list: [
        {
          id: "001",
          title: "厨师手游",
          imgUrl: "http://thumb11.jfcdns.com/2018-09/10/bce5b95db55c289d.jpeg"
        },
        {
          id: "002",
          title: "芭比游戏大全",
          imgUrl: "http://thumb12.jfcdns.com/2018-08/16/bce5b74f7435a128.jpeg"
        },
        {
          id: "003",
          title: "求生游戏",
          imgUrl: "http://thumb11.jfcdns.com/2018-08/15/bce5b73fa73b38aa.jpeg"
        },
        {
          id: "004",
          title: "即时战略类手游",
          imgUrl: "http://thumb12.jfcdns.com/2018-08/15/bce5b73fa0d3ff75.jpeg"
        },
        {
          id: "005",
          title: "物理游戏",
          imgUrl: "http://thumb10.jfcdns.com/2018-08/11/bce5b6e48b7ab910.jpeg"
        },
        {
          id: "006",
          title: "类似香肠派对的游戏",
          imgUrl: "http://thumb11.jfcdns.com/2018-08/01/bce5b61860b6f164.jpeg"
        }
      ],
      //手游分类
      fenlei_list: [
        { id: "001", fenlei_name: "角色扮演" },
        { id: "001", fenlei_name: "角色扮演" },
        { id: "001", fenlei_name: "角色扮演" },
        { id: "001", fenlei_name: "角色扮演" },
        { id: "001", fenlei_name: "角色扮演" },
        { id: "001", fenlei_name: "角色扮演" },
        { id: "001", fenlei_name: "角色扮演" },
        { id: "001", fenlei_name: "角色扮演" },
        { id: "001", fenlei_name: "角色扮演" },
        { id: "001", fenlei_name: "角色扮演" },
        { id: "001", fenlei_name: "角色扮演" },
        { id: "001", fenlei_name: "角色扮演" },
        { id: "001", fenlei_name: "角色扮演" },
        { id: "001", fenlei_name: "角色扮演" },
        { id: "001", fenlei_name: "角色扮演" }
      ],
      //必玩手游
      mobile_game_list: [
        {
          id: "001",
          title: "和平精英",
          fenl_name: "飞行射击",
          imgUrl:
            "http://thumb12.jfcdns.com/thumb/n231nj2a9x167i19/16f5cd2763533f65_100_100.jpeg"
        },
        {
          id: "002",
          title: "和平精英",
          fenl_name: "飞行射击",
          imgUrl:
            "http://thumb12.jfcdns.com/thumb/n231nj2a9x167i19/16f5cd2763533f65_100_100.jpeg"
        },
        {
          id: "003",
          title: "和平精英",
          fenl_name: "飞行射击",
          imgUrl:
            "http://thumb12.jfcdns.com/thumb/n231nj2a9x167i19/16f5cd2763533f65_100_100.jpeg"
        },
        {
          id: "004",
          title: "和平精英",
          fenl_name: "飞行射击",
          imgUrl:
            "http://thumb12.jfcdns.com/thumb/n231nj2a9x167i19/16f5cd2763533f65_100_100.jpeg"
        },
        {
          id: "005",
          title: "和平精英",
          fenl_name: "飞行射击",
          imgUrl:
            "http://thumb12.jfcdns.com/thumb/n231nj2a9x167i19/16f5cd2763533f65_100_100.jpeg"
        },
        {
          id: "006",
          title: "和平精英",
          fenl_name: "飞行射击",
          imgUrl:
            "http://thumb12.jfcdns.com/thumb/n231nj2a9x167i19/16f5cd2763533f65_100_100.jpeg"
        },
        {
          id: "007",
          title: "和平精英",
          fenl_name: "飞行射击",
          imgUrl:
            "http://thumb12.jfcdns.com/thumb/n231nj2a9x167i19/16f5cd2763533f65_100_100.jpeg"
        },
        {
          id: "008",
          title: "和平精英",
          fenl_name: "飞行射击",
          imgUrl:
            "http://thumb12.jfcdns.com/thumb/n231nj2a9x167i19/16f5cd2763533f65_100_100.jpeg"
        },
        {
          id: "009",
          title: "和平精英",
          fenl_name: "飞行射击",
          imgUrl:
            "http://thumb12.jfcdns.com/thumb/n231nj2a9x167i19/16f5cd2763533f65_100_100.jpeg"
        },
        {
          id: "010",
          title: "和平精英",
          fenl_name: "飞行射击",
          imgUrl:
            "http://thumb12.jfcdns.com/thumb/n231nj2a9x167i19/16f5cd2763533f65_100_100.jpeg"
        }
      ],
      //最新/最热
      container_left_list: [
        {
          id: "001",
          title: "和平精英",
          fenl_name: "飞行射击",
          imgUrl:
            "http://thumb12.jfcdns.com/thumb/n231nj2a9x167i19/16f5cd2763533f65_100_100.jpeg"
        },
        {
          id: "002",
          title: "和平精英",
          fenl_name: "飞行射击",
          imgUrl:
            "http://thumb12.jfcdns.com/thumb/n231nj2a9x167i19/16f5cd2763533f65_100_100.jpeg"
        },
        {
          id: "003",
          title: "和平精英",
          fenl_name: "飞行射击",
          imgUrl:
            "http://thumb12.jfcdns.com/thumb/n231nj2a9x167i19/16f5cd2763533f65_100_100.jpeg"
        },
        {
          id: "004",
          title: "和平精英",
          fenl_name: "飞行射击",
          imgUrl:
            "http://thumb12.jfcdns.com/thumb/n231nj2a9x167i19/16f5cd2763533f65_100_100.jpeg"
        },
        {
          id: "005",
          title: "和平精英",
          fenl_name: "飞行射击",
          imgUrl:
            "http://thumb12.jfcdns.com/thumb/n231nj2a9x167i19/16f5cd2763533f65_100_100.jpeg"
        },
        {
          id: "006",
          title: "和平精英",
          fenl_name: "飞行射击",
          imgUrl:
            "http://thumb12.jfcdns.com/thumb/n231nj2a9x167i19/16f5cd2763533f65_100_100.jpeg"
        },
        {
          id: "007",
          title: "和平精英",
          fenl_name: "飞行射击",
          imgUrl:
            "http://thumb12.jfcdns.com/thumb/n231nj2a9x167i19/16f5cd2763533f65_100_100.jpeg"
        }
      ],
      //游戏排行榜
      geme_list: [
        {
          id: "1",
          title: "和平精英",
          size: "1.58G",
          lx_name: "枪战",
          fenl_name: "飞行射击",
          imgUrl:
            "http://thumb12.jfcdns.com/thumb/n231nj2a9x167i19/16f5cd2763533f65_100_100.jpeg"
        }
      ]
    };
  },
  methods: {
    getIsActiveBtn(val) {
      this.isActive = val;
    }
  }
};
</script>

<style scoped>
@import "../assets/css/base.css";
@import "../assets/css/main.css";

.bottom-box {
  padding: 0;
}
img {
  width: 100%;
  height: 100%;
}
.carousel {
  width: 650px;
}
.flex {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-bottom: 10px;
}
.banner_list > div {
  width: 252px;
  height: 88px;
  margin-top: 10px;
  position: relative;
}
.banner_list > div span.title {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 25px;
  line-height: 25px;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
}
.category_title {
  height: 37px;
  line-height: 37px;
  margin: 0px 15px 15px;
  font-size: 16px;
  color: #0a15a2;
  border-bottom: 1px solid #e4e4e4;
}
.sy_content {
  margin-left: 18px;
  text-align: center;
  padding-bottom: 10px;
}
.clearfix {
  margin: 0 15px;
}
.clearfix > span {
  display: inline-block;
  margin: 0px 14px 14px 0;
  width: 94px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border: 1px solid #ddd;
  cursor: pointer;
}
.clearfix .active {
  background: #5d7abf;
  color: #fff;
}
.and_c_lf {
  width: 830px;
}
.and_c_rt {
  width: 340px;
}
.and_title {
  height: 37px;
  line-height: 37px;
  margin: 0px 15px 15px;
  border-bottom: 1px solid #e4e4e4;
}
.and_title span {
  display: inline-block;
  width: 60px;
  font-size: 16px;
}
.and_title span.on {
  color: #0a15a2;
}
.rt_list {
  border-bottom: 1px dashed #ddd;
  margin: 15px;
  padding-bottom: 10px;
  overflow: hidden;
  display: flex;
  /* justify-content: space-between; */
}
.order {
  width: 20px;
  height: 20px;
  line-height: 20px;
  color: #fff;
  background: #25c88a;
  text-align: center;
}
.order_logo {
  margin: 0 10px;
}
.introduce div {
  margin-bottom: 10px;
}
.introduce div span {
  color: #1da16e;
  padding: 2px 6px;
  white-space: nowrap;
  border: 1px solid #1da16e;
  margin-right: 5px;
}
.rt_title {
  font-size: 16px;
  height: 37px;
  line-height: 37px;
  border-bottom: 1px solid #e4e4e4;
  margin: 0 15px;
}
.rt_title .on {
  color: #ffcc20;
}
.rank {
  display: flex;
}
.rank .order_logo {
  flex: 1;
}
</style>
