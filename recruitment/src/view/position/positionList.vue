<template>
    <div class="positionList" style="padding: 40px;">

        <div>
            <div>

                        <div class="margin">
                            <ul class="clear" style="padding:0 ;fons-size:20px">
                                <li class="lt "  style="padding:0 20px 20px 0 ">
                                    <p class="fyzt">Ngành nghề :  </p>
                                    <p>职位类别 :  </p>
                                </li>
                                <li v-for="(item,i) in  PositionCategory" :key="i" class="lt pointer title-hover" style=" padding:0 30px 20px 0" @click="getType(i)" :class="item.selection?'type':''">
                                    <p class="fyzt">{{item.ranslation}}</p>
                                    <p>{{item.chinese}}</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p class="post-type">
                                <span class="width"> 职位名称 - Chức danh công việc</span>    <span> 职位类别 - Chức danh công việc </span>  
                            </p>

                            <div >
                                <p  class="pointer chuk relative" @click="postList = !postList">
                                    <span class="width">{{post.name.Cname+' - '+post.name.Vname}}</span>  <span> {{post.name.Ctype+' - '+post.name.Vtype}} Hoạt động  <div class="zhishi" :class="postList?'jxia':''"> </div></span>  
                                </p>
                                <el-collapse-transition>
                                    <div v-show="postList">
                                        <ul >
                                            <li v-for="(item,i) in add" :key="i" @click="opi(item)" class="chuk bk pointer" :class="i % 2==0 ?'libackg':''">
                                                <p>
                                                    <span> {{ list1(item) }}</span>
                                                    <span> {{ list2(item) }}</span> 
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </el-collapse-transition>
                            </div>
                        </div>

                        <div v-for="(item,i) in post.list" :key="i" >
                            <p class="p-title">{{item.title}}</p>
                            <div class="zhize">
                                <p v-for="(item1,i1) in item.chinese" :key="i1">{{item1}}</p>
                                
                            </div>
                            <div class=" zhize">
                                <p class="fyzt" v-for="(item2,i2) in item.vietnamese" :key="i2">{{item2}}</p>
                            </div>
                        </div>
                        
                        <div>
                            <p class="lianxifangs">联系方式 -  Thông tin liên lạc</p>
                            <p class="ltitle">您可以通过以下方式联系我们   Bạn có thể liên hệ với chúng tôi theo những cách sau</p>
                            <p class="lx"> <span class="erq"> ①　微信：We chat  </span>     <span class="wx-fs">jhct88888</span> </p>
                            <p class="lx"> <span class="erq"> ②　Facebook：Facebook  </span> <span class="wx-fs">JHCT8888HR</span></p>

                        </div>

                    </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            add:['post1'],
            postList:false,
            post:null,
            post1:{
                name:{Cname:'出入款专员 ',Vname:'Truy cập vào các khoản ủy viên',Ctype:'运营',Vtype:'Hoạt động'},
                list:[ //出入款专员
                    {
                        title:'岗位职责 - Trách nhiệm công việc',
                        chinese:['①　出入款主要负责公司网银操作，熟悉电脑，细心、反应灵活，踏实肯干；','②　有团队精神，责任心，能吃苦耐劳，敢于挑战，服从公司领导管理；','③　无需相关经验。'],
                        vietnamese:['①  Xuất nhập khoản chủ yếu phụ trách : Việc gửi và rút tiền, chịu trách nhiệm cho hoạt động của ngân hàng trực tuyến của công ty, biết sử dụng máy tính, cẩn thận, linh hoạt , thành thật, làm việc chăm chỉ；','②  Có tinh thần đồng đội, có trách nhiệm, chăm chỉ, dám thách thức và tuân thủ quản lý lãnh đạo công ty；','③  Không cần kinh nghiệm liên quan.']
                    },
                    {
                        title:'任职要求 - Yêu cầu công việc',
                        chinese:['①　年龄18-30周岁，90后不下限，男女不限，女生优先；','②　大专及以上学历，性格开朗，头脑灵活，有耐心；','③　熟悉电脑使用，中文打字速度每分钟40个字以上；','④　无同行业从业经历。'],
                        vietnamese:['①　Tuổi từ 18-30, không giới hạn dưới 90, nam hay nữ, ưu tiên nữ；','②　Bằng đại học trở lên, vui vẻ, linh hoạt, kiên nhẫn；','③　Thành thạo với việc sử dụng máy tính, tốc độ gõ chữ tiếng Trung Quốc là hơn 40 từ mỗi phút；','④　Chưa có kinh nghiệm trong ngành。']
                    },
               
                ]
            },
            post2:{
                name:{Cname:'招聘助理 ',Vname:'Trợ lý tuyển dụng',Ctype:'人事',Vtype:'Nhân sự'},
                list:
                [  //招聘助理
                    {
                        title:'岗位职责 - Trách nhiệm công việc',
                        chinese:['①　拓展招聘渠道，辅助招聘主管完成招聘周边工作；','②　协助招聘专员执行整个招聘流程；','③　完成领导交付的其他临时性工作'],
                        vietnamese:['①  Mở rộng kênh tuyển dụng, hỗ trợ giám sát chuyên viên tuyển dụng hoàn thành công việc tuyển dụng；','②  Hỗ trợ các chuyên viên tuyển dụng trong toàn bộ quá trình tuyển dụng','③  Hoàn thành công việc tạm thời khác do lãnh đạo giao phó'],
                    },
                    {
                        title:'任职要求 - Yêu cầu công việc',
                        chinese:['①　年龄18-30周岁，90后不下限，男女不限，女生优先；','②  大专及以上学历，性格开朗，头脑灵活，有耐心；','③  熟悉电脑使用，中文打字速度每分钟40个字以上。'],
                        vietnamese:['①  Tuổi từ 18-30, không giới hạn dưới 90, nam hay nữ, ưu tiên nữ','②  Bằng đại học trở lên, vui vẻ, linh hoạt, kiên nhẫn','③  Thành thạo với việc sử dụng máy tính, tốc độ gõ chữ tiếng Trung Quốc là hơn 40 từ mỗi phút'],
                    },
                ]
            },
            post3:{
                name:{Cname:'招聘专员',Vname:'Trách nhiệm công việc',Ctype:'人事',Vtype:'Nhân sự'},//招聘专员
                list:
                [  
                    {
                        title:'岗位职责 - Trách nhiệm công việc',
                        chinese:['①　拓展招聘渠道，完成招聘任务','②　执行整个招聘流程；','③　完成领导交付的其他临时性工作'],
                        vietnamese:['①　Mở rộng các kênh tuyển dụng và hoàn thành nhiệm vụ tuyển dụng','②　Thực hiện toàn bộ quy trình tuyển dụng','③　Hoàn thành công việc tạm thời khác do lãnh đạo giao phó'],
                    },
                    {
                        title:'任职要求 - Yêu cầu công việc',
                        chinese:['①　年龄18-30周岁，90后不下限，男女不限；','②　学历不限，性格开朗，头脑灵活，有耐心；','③　熟悉电脑使用，中文打字速度每分钟40个字以上。'],
                        vietnamese:['①　Tuổi từ 18-30, không giới hạn dưới 90, không giới hạn nam và nữ','②　Không có bằng cấp, tính cách vui vẻ, đầu óc linh hoạt, kiên nhẫn','③　Thành thạo với việc sử dụng máy tính, tốc độ gõ chữ tiếng Trung Quốc là hơn 40 từ mỗi phút'],
                    },
                ]
            },
            post4:{   //人事文员
                name:{Cname:'人事文员',Vname:'Trách nhiệm công việc',Ctype:'人事',Vtype:'Nhân sự'},
                list:[
                    {
                        title:'岗位职责 - Trách nhiệm công việc',
                        chinese:['①　完成本职工作，包括但不限于处理员工考勤、入离职等相关事宜；','②　制作公司所需文档材料；','③　完成领导交付的其他临时性工作'],
                        vietnamese:['①  Hoàn thành công việc của bản thân, bao gồm những việc liên quan như chấm công, nhận việc và thôi việc của nhân viên','②  Làm những tài liệu văn kiện về Chế độ Công ty yêu cầu','③  Hoàn thành công việc tạm thời khác do lãnh đạo giao phó'],
                    },
                    {
                        title:'任职要求 - Yêu cầu công việc',
                        chinese:['①　年龄18-30周岁，90后不下限，女生优先；','②　大专及以上学历，性格开朗，头脑灵活，有耐心；','③　熟悉电脑使用，中文打字速度每分钟40个字以上。'],
                        vietnamese:['①　Tuổi từ 18-30, không giới hạn dưới 90, ưu tiên Nữ','②　Bằng đại học trở lên, vui vẻ, linh hoạt, kiên nhẫn','③　Thành thạo với việc sử dụng máy tính, tốc độ gõ chữ tiếng Trung Quốc là hơn 40 từ mỗi phút'],
                    },
                ]
            },
            post5:{ //财务下发/中转专员
                name:{Cname:'财务下发/中转专员',Vname:'Chuyên viên điều phối / chuyển nhượng tài chính',Ctype:'财务',Vtype:'Tài Vụ'},
                list:[
                    {
                        title:'岗位职责 - Trách nhiệm công việc',
                        chinese:['①　完成本职工作，处理工作中的突发情况；','②　确保账目准确，防止公司财产流失；','③　完成领导交付的其他临时性工作。'],
                        vietnamese:['①　Hoàn thành công việc của bản thân và xử lý các tình huống bất ngờ trong công việc；','②　Đảm bảo tính chính xác của tài khoản và ngăn ngừa mất tài sản của công ty；','③　Hoàn thành công việc tạm thời khác do lãnh đạo giao phó'],
                    },
                    {
                        title:'任职要求 - Yêu cầu công việc',
                        chinese:['①　年龄18-30周岁，90后不下限，男女不限；','②　大专及以上学历，性格开朗，头脑灵活，有耐心；','③　熟悉电脑使用，中文打字速度每分钟40个字以上；','④  无同行业从业经历'],
                        vietnamese:['①　Tuổi từ 18-30, không giới hạn dưới 90, không giới hạn nam và nữ；','②　Bằng đại học trở lên, vui vẻ, linh hoạt, kiên nhẫn','③　Thành thạo với việc sử dụng máy tính, tốc độ gõ chữ tiếng Trung Quốc là hơn 40 từ mỗi phút','④  Chưa có kinh nghiệm trong ngành.'],
                    },
                ]
            },
            post6:{ //出款核实专员
                name:{Cname:'出款核实专员',Vname:'Chuyên viên xác minh thanh toán',Ctype:'财务',Vtype:'Tài Vụ'},
                list:[
                    {
                        title:'岗位职责 - Trách nhiệm công việc',
                        chinese:['①　完成本职工作，处理工作中的突发情况；','②　确保账目准确，防止公司财产流失；','③　完成领导交付的其他临时性工作'],
                        vietnamese:['①  Hoàn thành công việc của bản thân và xử lý các tình huống bất ngờ trong công việc；','②  Đảm bảo tính chính xác của tài khoản và ngăn ngừa mất tài sản của công ty；','③  Hoàn thành công việc tạm thời khác do lãnh đạo giao phó'],
                    },
                    {
                        title:'任职要求 - Yêu cầu công việc',
                        chinese:['①　年龄18-30周岁，90后不下限，男女不限；','②  大专及以上学历，性格开朗，头脑灵活，有耐心；','③　熟悉电脑使用，中文打字速度每分钟40个字以上；','④　无同行业从业经历。'],
                        vietnamese:['①　Tuổi từ 18-30, không giới hạn dưới 90, không giới hạn nam và nữ；','②  Bằng đại học trở lên, vui vẻ, linh hoạt, kiên nhẫn；','③　Thành thạo với việc sử dụng máy tính, tốc độ gõ chữ tiếng Trung Quốc là hơn 40 từ mỗi phút','④　Chưa có kinh nghiệm trong ngành.'],
                    },
                ]
            },
            post7:{  //平台账目专员
                name:{Cname:'平台账目专员',Vname:'Chuyên viên tổng hợp tài chính',Ctype:'财务',Vtype:'Tài Vụ'},
                list:[
                    {
                        title:'岗位职责 - Trách nhiệm công việc',
                        chinese:['①　核对公司平台账目，确保账目准确；','②　统计账目数据，进行账目汇总；','③　完成领导交付的其他临时性工作。'],
                        vietnamese:['①　Kiểm tra tài khoản nền tảng của công ty để đảm bảo tài khoản chính xác；','②　Thống kê dữ liệu kế toán, tổng hợp tài khoản；','③　Hoàn thành công việc tạm thời khác do lãnh đạo giao phó。'],
                    },
                    {
                        title:'任职要求 - Yêu cầu công việc',
                        chinese:['①　年龄18-30周岁，90后不下限，女生优先，有财务工作经验者优先；','②　本科及以上学历，性格开朗，头脑灵活，有耐心；','③　熟悉电脑使用，中文打字速度每分钟40个字以上；','④　无同行业从业经历。'],
                        vietnamese:['①　Tuổi từ 18-30, không giới hạn dưới 90, ưu tiên nữ, có kinh nghiệm tài vụ được ưu tiên；','②　Bằng cử nhân trở lên, vui vẻ, linh hoạt, kiên nhẫn；','③　Thành thạo với việc sử dụng máy tính, tốc độ gõ chữ tiếng Trung Quốc là hơn 40 từ mỗi phút','④　Chưa có kinh nghiệm trong ngành.'],
                    },
                ]
            },
            post8:{  //银行卡专员：
                name:{Cname:'银行卡专员：',Vname:'Chuyên viên quản lý thẻ ngân hàng',Ctype:'财务',Vtype:'Tài Vụ'},
                list:[
                    {
                        title:'岗位职责 - Trách nhiệm công việc',
                        chinese:['①　发展和维护银行卡渠道；','②　分析现有银行卡使用情况并作出相应判断；','③　完成领导交付的其他临时性工作。'],
                        vietnamese:['①　Phát triển và duy trì các kênh thẻ ngân hàng；','②　Phân tích việc sử dụng thẻ ngân hàng hiện có và đưa ra những đánh giá tương ứng；','③　Hoàn thành công việc tạm thời khác do lãnh đạo giao phó'],
                    },
                    {
                        title:'任职要求 - Yêu cầu công việc',
                        chinese:['①　年龄18-30周岁，90后不下限，男女不限；','②　大专及以上学历，性格开朗，头脑灵活，有耐心；','③　熟悉银行卡网上银行的使用，具备安全意识；','④　熟悉电脑使用，中文打字速度每分钟40个字以上；','⑤　无同行业从业经历。'],
                        vietnamese:['①　Tuổi từ 18-30, không giới hạn dưới 90, không giới hạn nam và nữ；','②　Bằng đại học trở lên, vui vẻ, linh hoạt, kiên nhẫn；','③　Làm quen với việc sử dụng thẻ ngân hàng trực tuyến, với nhận thức về bảo mật；','④  Thành thạo với việc sử dụng máy tính, tốc độ gõ chữ tiếng Trung Quốc là hơn 40 từ mỗi phút','⑤  Chưa có kinh nghiệm trong ngành.'],
                    },
                ]
            },
            post9:{  //行政专员
                name:{Cname:'行政专员',Vname:'Chuyên viên hành chính',Ctype:'行政',Vtype:'Hành chính'},
                list:[
                    {
                        title:'岗位职责 - Trách nhiệm công việc',
                        chinese:['①　完成本职工作，包括但不限于办理员工离职和提供后勤保障；','②　日常巡查，协助各部门处理突发事故；','③　完成领导交付的其他临时性工作。'],
                        vietnamese:['①　Hoàn thành công việc của bản thân, bao gồm những việc liên quan như xử lý thôi việc của nhân viên và hỗ trợ những công việc hậu cần；','②　Kiểm tra hàng ngày để hỗ trợ các bộ phận trong việc xử lý các trường hợp khẩn cấp；','③　Hoàn thành công việc tạm thời khác do lãnh đạo giao phó'],
                    },
                    {
                        title:'任职要求 - Yêu cầu công việc',
                        chinese:['①　年龄18-30周岁，90后不下限，男女不限，女生优先；','②　大专及以上学历，性格开朗，头脑灵活，有耐心；','③　熟悉电脑使用，中文打字速度每分钟40个字以上；'],
                        vietnamese:['①　Tuổi từ 18-30, không giới hạn dưới 90, nam hay nữ, ưu tiên nữ；','②　Bằng đại học trở lên, vui vẻ, linh hoạt, kiên nhẫn；','③　Thành thạo với việc sử dụng máy tính, tốc độ gõ chữ tiếng Trung Quốc là hơn 40 từ mỗi phút'],
                    },
                ]
            },
            PositionCategory:[
                // {chinese:'职位类别：',ranslation:'Ngành nghề',selection:true,post:['post1']},
                {chinese:'运营',ranslation:'Hoạt động',selection:true,post:['post1']},
                {chinese:'人事',ranslation:'Nhân sự',selection:false,post:['post2','post3','post4']},
                {chinese:'财务',ranslation:'Tài Vụ',selection:false,post:['post5','post6','post7','post8']},
                {chinese:'行政',ranslation:'Hành chính',selection:false,post:['post9']}

            ],
            newPost:[]
            

        }
    },
    methods:{
        opi(i){
            this.post = this[i];
            this.postList = !this.postList;
        },
        getType(i){
            let k;
            for(k in this.PositionCategory){
                if(k == i){
                    this.PositionCategory[k].selection = true;
                    this.add = this.PositionCategory[k].post;
                }else{
                    this.PositionCategory[k].selection = false;
                }
            }
        },
        list1(i){
            return this[i].name.Cname+' - '+this[i].name.Vname;
        },
        list2(i){
            return this[i].name.Ctype+' - '+this[i].name.Vtype
        }
    },
    created(){
        this.post = this.post1;
    }
}
</script>

<style scoped>
    .type{
        color: red
    }
    .margin{
        /* border-bottom:1px solid #ccc; */
    }
    .chuk{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #ccc;
    }
    .margin p{
        margin-top:10px ;
        text-align: center
    }
    .post-type{
        height: 50px;
        line-height: 50px;
        margin: 0 -40px;
        padding: 0 40px;
        
        border-bottom: 1px solid #ccc;
        background: rgb(250,250,250)
        /* background:red; */
    }
    p span{
        display: inline-block;
        width: 49%;
    }
    .zhishi{
        /* float: right; */
        position: absolute;
        transform: rotate(45deg);
        right: 20px;
        top: 20px;
        width: 12px;
        height: 12px;
        border-top: 2px solid #666;
        border-right: 2px solid #666;
        border-radius: 5%;
        transition: all 0.5s;
    }
    .jxia{
        transform: rotate(135deg);
    }
    .relative{
        position: relative;
    }
    .libackg{
        background: rgb(250,250,250)
    }
    .bk:hover{
        background: rgb(245,245,245)
    }
    .p-title{
        margin: 30px 0;
        color:#333;
        font-size: 18px;
    }
    .zhize{
        margin-bottom: 20px
    }
    .zhize p{
        margin: 5px 20px
    }
    .lianxifangs{
        margin: 40px 0 20px 0;
        color:#333;
        font-size: 18px;
    }
    
    .ltitle{
        /* color: red; */
        margin: 0 20px 10px 20px
    }
    .lx{
        margin: 5px 20px;
    }
    .wx-fs{
        display: inline-block;
        text-align: center;
        /* margin-left:200px; */
        max-width: 100px;
        padding: 5px 10px;
        background: yellow;
        

    }
    .erq{
        display: inline-block;
        width: 200px;

    }
    .title-hover:hover{
        color: red
    }
</style>
