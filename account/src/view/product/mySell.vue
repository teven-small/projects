<template>
  <div class="main">
    <div class="clear">
      <img src="../../assets/imgs/fh.png" class="lt" style="margin:16px 16px 0 0" />
      <el-breadcrumb separator-class="el-icon-arrow-right" class="lt">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <span style="color:#288cea">出售账号</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="back_item">
      <!-- 标题 -->
      <div class="table_top">
        <span>活动详情</span>
      </div>
      <div style="padding: 40px">
        <p>
          温馨提示：出售账号前必须先联系：
          <Kefu />
        </p>
      </div>
    </div>

    <div class="back_item">
      <!-- 标题 -->
      <div class="table_top">
        <span>我要出售账号</span>
      </div>

      <!-- 表单 -->
      <Form></Form>
    </div>

    <div class="back_item">
      <!-- 标题 -->
      <div class="table_top">
        <span>活动细则</span>
      </div>
      <div style="padding: 28px 40px">
        <p>
          1、提交账号系统回收前必须先联系：
          <Kefu />
        </p>
        <p>2、注册的ID账号必须与即将出售的会员账号一致！</p>
        <p>3、注册ID账号后必须实名才可以出售账号和购买账号！</p>
        <p>4、实名必须上传真实有效身份证正面、身份证反面、银行卡照片才可以通过审核！</p>
        <p>5、联系微信专员提交您要购买的会员账号和价格！</p>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "@/components/form";
import Kefu from "@/components/kefu";
export default {
  components: {
    Form,
    Kefu
  }
};
</script>

<style>
</style>
