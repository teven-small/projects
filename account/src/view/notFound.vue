<template>
    <div class="not">
        <p>404</p>
        <p>页面一不小心跑丢了</p>
        <p>
            <router-link :to="{name:'index'}">
                返回首页
            </router-link>
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.not{
    margin-top: 350px;
}
.not p:first-child{
    color: #d60c0c;
    font-size: 50px;
}
.not p{
    margin: 5px;
    font-size: 26px;
    text-align: center;
    color: chocolate;
    font-style: italic;
}
a{
    font-size: 20px;
}
</style>
