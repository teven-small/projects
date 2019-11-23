<template>
    <div class="index" >
        <div class="top">
            <Head :active="0"></Head>
            <div class="position">
                <div class="content">
                    
                    <div style="padding-left:220px">
                        <table >
                            <tr>
                                <td>
                                    <span class="yellowdiv"></span>
                                    <div>
                                        <p>出入款专员</p>
                                        <p>Bạn có muốn những vị</p>
                                    </div>
                                </td>
                                <td>
                                    <span class="yellowdiv"></span>
                                    <div>
                                        <p>招聘助理</p>
                                        <p>Trợ lý tuyển dụng</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="yellowdiv"></span>
                                    <div>
                                        <p>人事文员</p>
                                        <p>Nhân viên nhân sự</p>
                                    </div>
                                </td>
                                <td>
                                    <span class="yellowdiv"></span>
                                    <div>
                                        <p>财务下发专员</p>
                                        <p>Chuyên viên điều phối tài chính</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span class="yellowdiv"></span>
                                    <div>
                                        <p>平台账目专员</p>
                                        <p>Chuyên viên tổng hợp tài chính</p>
                                    </div>
                                </td>
                                <td>
                                    <span class="yellowdiv"></span>
                                    <div>
                                        <p>行政专员</p>
                                        <p>Chuyên viên hành chính</p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="wx-fs">
                        <p class="m-b-15">： jhct88888</p>
                        <p>：JHCT8888HR</p>
                    </div>
                </div>
            </div>

        </div>
        
        <div class="bottom">
            <Head :active="0"></Head>
            <img src="../assets/imgs/index2.png" alt="" style="width: 100%;">
        </div>
        
        
    </div>
</template>

<script>
import Head from '@/components/Head'
export default {
    components:{
        Head,
    }
}
</script>

<style scoped>
    .h-80{
        height: 80px;
    }
    .top{
        background: url('../assets/imgs/index1.png') no-repeat  left top;
        background-size: 100% 100%;
        height: 1080px;
        position: relative;
    }
    .position{
        position: absolute;
        z-index: 9999;
        width: 100%;
        left: 0px;
        bottom: 0px;
        height: 680px;
        /* border:3px solid red; */
        /* margin-top:300px; */
        background: url('../assets/imgs/index3.png') no-repeat scroll center center;
    }
    .content{
        padding-top:260px;
        position: relative;
        text-align: center
    }
    table{
        height: 200px;
        font-family: '思源黑体';
        font-size: 18px;
        color:rgb(24,46,108);
        width:660px;
        /* padding-left: 120px; */
        margin:auto;
        font-weight: 600;
        text-align: left;
        border-collapse: collapse
    }
    td{
        width: 50%;
        /* border :1px solid red; */
        position: relative;
    }
    .bottom{
        height: 1080px;
        background: #fff;
        /* background: url('../assets/imgs/index2.png') */
    }
    .yellowdiv{
        display: inline-block;
        width: 18px;
        height: 18px;
        background: rgb(241,223,36);
        top: 13px;
        position: absolute;left:-30px
    }
    .wx-fs p{
            background: rgb(241,223,36);
            width: 150px;
            height: 38px;
            /* margin-top:15px; */
            text-align: left;
            line-height: 40px;
            font-size: 20px;
            color: rgb(24,46,108);
            /* padding:0 20px; */
            
        }
        .wx-fs{
            position:absolute;
            left: 57%;
            bottom: -29%
        }
        .m-b-15{
            margin-bottom: 15px;
    }
</style>
