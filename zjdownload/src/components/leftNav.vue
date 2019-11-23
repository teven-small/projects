<template>
     <!-- 左半部分区域 -->
    <div class="content-left">
        <!-- 1 装机必备LOGO -->
        <div class="zj-logo bottom-box">
            <img :src="leftImg">
        </div>
        <!-- 2 热门软件 -->
        <div class="rj-hot bottom-box">
            <div class="hot-top">
                <h2 class="hot-title">热门软件</h2>
            </div>
            <div class="hot-list">
                <ul>
                    <li v-for="(item, index) in hotSoftware" :key="index">
                        <em :class="['n1', index==0?'r1':'', index==1?'r3':'', index==2?'r3':'']">{{item.rank}}</em>
                        <a href="">{{item.title}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 3 最近更新 -->
        <div class="latest bottom-box">
            <h2 class="hot-title">最近更新</h2>
            <div class="logo-list">
                <div v-for="(item, index) in updateSoftware" :key="index">
                    <div class="logo-img">
                        <img :src="item.img" width="100%">
                    </div>
                    <div class="logo-name">{{item.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['hotSoftware', 'updateSoftware', 'leftImg'],
}
</script>


<style scoped>

@import '../assets/css/base.css';
@import '../assets/css/main.css';
@import '../assets/css/pager.css';

</style>