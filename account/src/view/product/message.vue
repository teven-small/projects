<template>
    <div class="main">

            <!-- 最新消息 -->
        <News></News>

        <!-- 表格头部  -->
        <div class="table_top clear" style="border:1px solid #dcdcdc;margin-top: 20px">
            <span class="lt">消息大厅</span>
            <div class="rt">
                <router-link tag="a" target="_blank" :to="{name:'sell'}">
                    <button class="buy btn">我要买</button>
                </router-link>
                <router-link tag="a" target="_blank" :to="{name:'mySell'}">
                    <button class="sell btn">我要卖</button>
                </router-link>
            </div>
        </div>

        <div class="table_box news_box">
            <table style="width:100%">
                <thead>
                    <tr>
                        <th style="width:20%">标题</th>
                        <th style="width:50%">内容</th>
                        <th style="width:20%">时间</th>
                        <th style="width:10%">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="newsData.length==0">
                        <td colspan="4">暂无数据</td>
                    </tr>
                    <tr v-for="(item, index) in newsData" :key="index" v-else>
                        <td>{{item.title}}</td>
                        <td><div>{{item.content}}</div></td>
                        <td>{{item.createTime}}</td>
                        <td><i @click="readNews(item)">查看详细</i></td>
                    </tr>
                </tbody>
            </table>
                <!-- 表格分页 -->
            <div class="table_num clear">
                <div class="lt">
                    <span>共{{totle}}条记录,共{{totalPages}}页,每页{{pageSize}}条记录</span>
                    <el-pagination background layout="prev, pager, next" :total="totle" :page-size="pageSize" :current-count="pageIndex" @size-change="pageSize"
                        @current-change="changCuurengFn"></el-pagination>
                </div>
                <div class="rt">
                    <span>每页显示：</span>
                    <span v-for="(item,index) in indexArr" :key="index" @click="changSizeFn(item)">{{item}}</span>
                </div>
            </div>
        </div>

         <!-- 消息内容 -->
        <el-dialog title="收件详情" :visible.sync="showDialog" @closed="closedFn"  width='40%;'>
            <ul class="news_dialog">
                <li class="gray clear">
                    <span class="title lt">标题：</span>
                    <span class="lt">{{newsContent.title}}</span>
                </li>
                <li class="clear">
                    <span class="title lt">发件人：</span>
                    <span class="lt">{{newsContent.userId}}</span>
                </li>
                <li class="clear">
                    <span class="title lt">发送时间：</span>
                    <span class="lt">{{newsContent.createTime}}</span>
                </li>
                <li>
                    <p>{{newsContent.content}}</p>
                </li>
            </ul>
            <div class="dialog_btn" style="text-align: center;padding: 40px 0 0 0;">
                <el-button type="primary" size="small" @click="closedFn">关 闭</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import News from '@/components/news'
export default {
    components:{
        News
    },
    data(){
        return{
            newsData: [],
            showDialog: false,
            newsContent:{},
            totle: 0,
            totalPages: 0,
            totle: 0,
            pageSize: 10,
            pageIndex: 1,
            indexArr:[20, 50, 100, 200],
            id: null
        }
    },
    methods:{
        //获取认证返回的数据
        getUserApproveNewsNum(){
            var params = {
                size: this.pageSize,
                page: this.pageIndex,
                userId: this.$store.state.uid
            }
            this.api.userApproveNewsFn(params).then((res)=>{
                // console.log(res.data)
                if(res.data.data){
                    this.newsData = []
                    this.newsData = res.data.data
                }
            })
        },
        
        //获取消息内容
        readNews(arg){
            this.id = arg.id
            var params={
                id: arg.id
            }
            this.api.approveNewsContentFn(params).then((res)=>{
                //console.log(res.data)
                if(res.data.data){
                    this.showDialog = true
                    this.newsContent = arg
                }
            })
        },

        closedFn(){
            this.showDialog = false
            //刷新页面
            this.getUserApproveNewsNum()
        },

         //改变每页大小
        changSizeFn(arg){
            this.pageSize = arg
            this.pageIndex = 1
            this.getUserApproveNewsNum()
        },

        //分页页码点击
        changCuurengFn(val){
            this.pageIndex = val
            this.getUserApproveNewsNum()
        },
    },
    created(){
        this.getUserApproveNewsNum()
    }
}
</script>

