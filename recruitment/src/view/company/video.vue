<template>
    <div class="rt rt_box">
        <div class="features_box">
            <p class="tip">
                <span>Vùng</span>
                <span>video</span>
            </p>
        </div>

        <div class="video_box clear" style="margin-top: 80px;">
            <div class="play_area lt">
                <img :src="img1" alt="">
            </div>
            <div class="play_list rt">
                <div>
                    <img :src="img2" alt="">
                </div>
                <div>
                    <img :src="img3" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            img1: require('../../assets/imgs/around7.jpg'),
            img2: require('../../assets/imgs/around3.jpg'),
            img3: require('../../assets/imgs/around6.jpg'),
        }
    }
}
</script>

<style scoped>
img{
    width: 100%;
    height: 100%;
}
</style>
