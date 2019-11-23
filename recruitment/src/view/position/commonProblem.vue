<template>
    <div class="CommonProblem">
        <div class="content">
            <div class="p-100">
                        <table></table>
                        <div class="center name-title">
                            <p>热门问题</p>
                            <p class="fyzt">Câu hỏi nóng</p>
                        </div>
                        <div>
                            <div v-for="(item,i) in CommonProblem" :key="i" v-if="i<4" class="wtilsit">
                                <div class="qu">
                                    <p class="chinese">{{item.questions.chinese}}</p>
                                    <p class="vietnamese fyzt">{{item.questions.vietnamese}}</p>
                                </div>
                                <div class="as">
                                    <p class="chinese">{{item.answer.chinese}}</p>
                                    <p class="vietnamese fyzt">{{item.answer.vietnamese}}</p>
                                </div>
                                
                            </div>

                            <div v-else>
                                <div class="qt">
                                    <p>{{CommonProblem[4].chinese}}</p>
                                    <p class="fyzt">{{CommonProblem[4].vietnamese}}</p>
                                </div>
                                
                                
                            </div>
                            <table></table>
                        </div>
                        <img src="../../assets/imgs/d-top.png" alt="" class="buttom-img">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            CommonProblem:[
                {
                    questions:{chinese:'Q:招聘对所学专业和学历有限制吗？不是相关专业的可以投递吗？',vietnamese:'Có giới hạn về chuyên ngành và trình độ của sinh viên không? Nếu như không có chuyên ngành liên quan thì có được tuyển không?'},
                    answer:{
                        chinese:'A：学历和专业只是作为参考的一个方面，而对公司的向往和对工作的热爱才是我们更为看重的！只要你的兴趣和能力与职位相符，都可以进行投递申请。',
                        vietnamese:'Học thức và chuyên ngành chỉ là một khía cạnh của tài liệu tham khảo, và sự khao khát và yêu thích công việc của bạn mới là điều công ty chúng tôi coi trọng hơn! Chỉ cần bạn có hứng thứ và khả năng của bạn phù hợp với vị trí ứng tuyển, bạn có thể đăng ký ứng tuyển.'},
                },
                {
                    questions:{chinese:'Q：如何知道应聘进度？如果在申请中被拒绝，我会收到相关通知吗？',vietnamese:'Làm thế nào để biết tiến độ quá trình ứng tuyển? Nếu trong quá trình ứng tuyển bị từ chối, tôi sẽ nhận được thông báo liên quan không?'},
                    answer:{chinese:'A：对于没有通过的求职者，我们都会给予答复。',vietnamese:'Đối với những người xin việc chưa được thông qua, chúng tôi sẽ trả lời.'}
                },
                {
                    questions:{chinese:'Q：职位投递成功之后，我还能更改投递的职位吗？',vietnamese:'Sau khi ứng tuyển thành công, tôi có thể thay đổi vị trí ứng tuyển hay không?'},
                    answer:{chinese:'A：在简历未被处理之前，可以更改投递的职位。',vietnamese:'Vị trí ứng tuyển có thể được thay đổi nếu hồ sơ chưa xử lý.'}
                },
                {
                    questions:{chinese:'Q：我最多可以申请多少个职位？',vietnamese:'Tôi có thể ứng tuyển nhiều nhất bao nhiêu vị trí?'},
                    answer:{chinese:'A：根据个人简历，每个人可以申请的职位不同，具体可以申请的职位可以联系人事咨询。',vietnamese:'Theo sơ yếu lý lịch, mỗi người có thể ứng tuyển vào một vị trí khác nhau, và vị trí cụ thể có thể liên hệ với nhân sự để được tư vấn.'}
                },
                {
                    chinese:'更多问题可以联系人事进行咨询，人事将一一为您解答，期待您的到来！',
                    vietnamese:'Nhiều câu hỏi có thể được tư vấn, và nhân sự sẽ trả lời từng câu hỏi một, tôi mong chờ sự xuất hiện của bạn!',
                }
            ]
        }
    }
}
</script>

<style scoped>
    .center p{
        text-align: center 
    }
    .p-100{
        padding: 0 200px
    }
    .content{
        background: url('../../assets/imgs/d-top.png') no-repeat top right;
        position: relative;
    }
    .name-title{
        color :red;
        margin: 20px;
        font-size: 20px;
        line-height: 28px
        
    }
    .qu,.as{
        margin: 20px 0
    }
    .qu{
        font-size: 20px;
        color :#333;
        margin: 5px 0 0 0px;

    }
    .vietnamese{
        margin-left: 40px !important;
    }
    .qu p,.as p{ 
        margin: 10px
    }
    .as {
        color:#666;
        font-size: 18px
    }
    .wtilsit{
        margin: 0 0 50px 0;
    }
    p{
        line-height: 30px
    }
    .qt{
        margin: 20px 0 50px 0
    }
    .qt p{
        font-size: 18px ;
        color: #666;
        line-height: 30px
    }
    .buttom-img{
        position:absolute;
        bottom:0px; 
        left: 0px;
        z-index: 500;
        transform: rotate(180deg)
    }
    /* .as .chinese{
        color: #666;
        font-size: 18px;
    } */
</style>
