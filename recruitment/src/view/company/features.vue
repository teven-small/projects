<template>
    <div class="rt rt_box">
        <div class="features_box">
            <p class="tip">
                <span>Phong</span>
                <span> cảnh khuôn viên</span>
            </p>
            
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="(item, index) in parkLandscape" :key="index" @click.native="biger(item)">
                    <img :src="item.img" alt="">
                </el-carousel-item>
            </el-carousel>
        
        </div>

        <div class="surrounding_box">
            <p class="tip">
                <span>Xung</span>
                <span>quanh Mộc Bài</span>
            </p>

            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="(item, index) in surrounding" :key="index" @click.native="biger(item)">
                    <img :src="item.img" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{

            //园区风景
            parkLandscape:[
                { img: require('../../assets/imgs/football_field.jpg') },
                { img: require('../../assets/imgs/sky.jpg') },
                { img: require('../../assets/imgs/swimming_pool1.jpg') },
                { img: require('../../assets/imgs/swimming_pool2.jpg') },
                { img: require('../../assets/imgs/swimming_pool3.jpg') },
                { img: require('../../assets/imgs/in1.jpg') },
                { img: require('../../assets/imgs/in2.jpg') },
                { img: require('../../assets/imgs/in3.png') },
                { img: require('../../assets/imgs/in4.jpg') },
                { img: require('../../assets/imgs/in5.jpg') },
                { img: require('../../assets/imgs/in6.jpg') },
                { img: require('../../assets/imgs/in7.jpg') },
            ],

            // 木牌周边
            surrounding:[
                { img: require('../../assets/imgs/around1.jpg') },
                { img: require('../../assets/imgs/around2.jpg') },
                { img: require('../../assets/imgs/around3.jpg') },
                { img: require('../../assets/imgs/around4.jpg') },
                { img: require('../../assets/imgs/around5.jpg') },
                { img: require('../../assets/imgs/around6.jpg') },
                { img: require('../../assets/imgs/around7.jpg') },
                { img: require('../../assets/imgs/around8.jpg') },
                { img: require('../../assets/imgs/around9.jpg') },
                { img: require('../../assets/imgs/around11.jpg') },
                { img: require('../../assets/imgs/around12.jpg') },
                { img: require('../../assets/imgs/around13.jpg') },
                { img: require('../../assets/imgs/around14.jpg') },
                { img: require('../../assets/imgs/around15.jpg') },
                { img: require('../../assets/imgs/around16.jpg') },
            ]
        }
    },
    methods:{
        biger(item){
            this.$emit("sendData", item)
        }
    }
}
</script>

<style>

</style>
