<template>
    <div class="RecruitmentProcess" style="padding: 40px;">
        <div class="content">
                    <div>
                        <div class="">
                            <ul class="clear title-img">
                                <li v-for="(item,i) in process" :key="i" class=" w-25">
                                    <img :src="item.img" alt="">
                                    <p>{{item.chinese}}</p>
                                    <p class="fyzt">{{item.translation}}</p>
                                    <div v-if="i>0" class=" jt"></div>
                                </li>
                            </ul>
                        </div>
                        <div class="new-coentent">

                            <div v-for="(item,i) in RecruitmentProcess" :key="i" v-if="i < 3" >
                                <p class="p-title">{{item.title}}</p>
                                <div class="cv">
                                    <p v-for="(ch,i) in item.chinese" :key="i">{{ch}}</p>
                                </div>
                                <div class="cv">
                                    <p class="fyzt" v-for="(vi,i) in item.vietnamese" :key="i">{{vi}}</p>
                                </div>
                            </div>

                            <div  v-else >
                                <p class="p-title">{{RecruitmentProcess[3].title}}</p>
                                
                                <p class="rz">{{RecruitmentProcess[3].chinese}}</p>
                                
                                
                                <p class="rz fyzt">{{ RecruitmentProcess[3].vietnamese}}</p>
                                
                            </div>
                            

                        </div>
                    </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            process:[
                { chinese:'投递简历',translation: 'Gửi hồ sơ',img:require('../../assets/imgs/jl.png')},
                { chinese:'人员筛选',translation: 'Sàng lọc nhân sự',img:require('../../assets/imgs/sx.png')},
                { chinese:'参加面试',translation: 'Tham gia phỏng vấn',img:require('../../assets/imgs/ms.png')},
                { chinese:'赴柬入职',translation: 'Đến công ty CMG',img:require('../../assets/imgs/offer.png')},
            ],
            RecruitmentProcess:[
                {
                    title:'投递简历 - Gửi hồ sơ',
                    chinese:[
                        '①　仔细查看公司职位要求；','②　添加公司联系方式咨询；','③　根据求职意愿投递简历；'
                    ],
                    vietnamese:[
                        '①　Xem xét cẩn thận yêu cầu công việc của công ty','②　Thêm thông tin liên hệ của công ty','③　Gửi hồ sơ dựa trên ý định tìm kiếm việc làm'
                    ]
                },
                {
                    title:'人员筛选 - Sàng lọc nhân sự',
                    chinese:[
                        '①　求职者通过简历筛选后进入面试环节；','②　人事会通知具体面试时间，筛选时间为1个工作日；','③　根据求职意愿投递简历；'
                    ],
                    vietnamese:[
                        '①　Người tìm việc sau khi được sàng lọc thông qua sơ yếu lý lịch sẽ tiến hành quá trình phỏng vấn ','②　Nhân sự sẽ thông báo thời gian phỏng vấn cụ thể, thời gian sàng lọc là 1 ngày làm việc.'
                    ]
                },
                {
                    title:'参加面试 - Tham gia phỏng vấn',
                    chinese:[
                        '①　面试形式 - 视频面试或者当面面试，面试分为HR面试和专业面试；','②　面试后，2个小时内人事会通知求职者面试结果'
                    ],
                    vietnamese:[
                        '①　Phương thức phỏng vấn: phỏng vấn video hoặc phỏng vấn trực tiếp, phỏng vấn được chia thành nhân sự phỏng vấn và phỏng vấn chuyên môn','②　Sau cuộc phỏng vấn, nhân sự sẽ thông báo cho người tìm việc về kết quả phỏng vấn trong vòng 2 giờ.'
                    ]
                },
                {
                    title:'赴柬入职 - Đến công ty CMG',
                    chinese:'入职前三个工作日内，请求职者与人事联系，沟通入职工作相关事宜。',
                    vietnamese:'Trong vòng 3 ngày làm việc trước khi vào làm, ứng viên sẽ liên hệ với nhân sự để bàn bạc các vấn đề liên quan đến nhận việc.'
                },
            ],
        }
    }
}
</script>

<style scoped>
    .content{
        padding: 20px  0px;
    }
    .title-img{
        display: flex;
        justify-content: space-between;
    }
    .title-img p{
        margin: 5px
    }
    .jt{
        width: 15px;
        height: 15px;
        border-top:2px solid #666;
        border-right:2px solid #666;
        transform: rotate(45deg);
        border-radius: 5%;
        position: absolute;
        top:20%
    }
    .w-25{
        width:25%;
        font-size: 18px;
        position: relative;
        text-align: center
    }
    .new-coentent{
        padding: 20px 100px;
    }
    .p-title{
        margin: 40px 0 10px 0;
        font-size: 22px;
        color:#222;

    }
    .cv{
        margin-bottom: 15px
    }
    .cv p{
        margin: 5px 60px;
    }
    .rz{
        margin: 5px 60px;
    }
</style>
