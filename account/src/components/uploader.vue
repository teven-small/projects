<template>
    <div>
        <div class="upload-btn common mb_10 lt" v-if="!isShow">
            {{tip}}
            <label>
                <input type="file" @change="uploadImg" accept="image/*">
            </label>
        </div>
        <div class="img-list-item common mb_10 lt" v-if="isShow">
            <img :src="src" class="common">
            <i class="del-img" @click="forkImage"></i>
        </div>
    </div>
</template>

<script>
export default {
    props:["tip"],
    data(){
        return{
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,

            src: '',
            isShow:false,
        }
    },
    methods:{
        uploadImg (e) {
            let _this = this;
            let files = e.target.files[0];
            let _fileName =  files.name.substring(files.name.lastIndexOf(".") + 1).toLowerCase()
            if(files.size>5000*1024){
                this.$alert('上传的图片不能大于5M', '温馨提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        
                    }
                });
                return
            }
            if (_fileName !== "png" && _fileName !== "jpg") {
                this.$alert('上传的文件格式不对', '温馨提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        
                    }
                });
                return
            }
            if (!e || !window.FileReader) return; // 看支持不支持FileReader
            let reader = new FileReader();
            reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
            reader.onloadend = function () {
                _this.src = this.result;
                _this.isShow = true;
            }
            _this.$emit('sengFile',files)
        },

        forkImage () {
            this.src = '';
            this.isShow = false;
            this.$emit("deleteImg")
        },
    }
}
</script>

<style>
.common {
    width: 180px;
    height: 100px;
    border: 1px solid #d8d8d9;
}
.img-list-item {
    position: relative;
    margin: auto;
}
.img-list-item img {
    box-sizing: border-box;
    vertical-align: middle;
    border: 0;       
}
.img-list-item i.del-img {
    width: 15px;
    height: 15px;
    display: inline-block;
    background: rgba(0,0,0,.6);
    background-image: url('../assets/imgs/delete.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    cursor: pointer;
}
.upload-btn {
    background-repeat: no-repeat;
    background-size: 50px 50px;
    background-position-x: center;
    background-image:  url('../assets/imgs/sc.png');
    margin: auto;
    text-align: center;    
    line-height: 140px;
    background-position-y: 6px;
    position: relative;
    padding-left: 24px;
}
input[type="file"] {
    color: transparent;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: absolute;
    left: 0;
}
#wrapper:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.mb_10 {
    margin-bottom: 10px; 
}
</style>
