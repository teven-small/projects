<template>
    <div class="content_box">
        <div class="sub_title">
            <span>Bồi thường và lợi ích</span>
        </div>

        <div class="compensation_box">
            <dl>
                <dt>
                    <span>{{compensation.vTitle}}</span>
                </dt>
                <dd v-for="(item, index) in compensation.cConditionList" :key="index">
                    <b class="lt">{{item.ranking}}</b>
                    <p>{{item.vCondition}}</p>
                </dd>
            </dl>

            <dl>
                <dt>
                    <span>{{welfare.vTitle}}</span>
                </dt>
                <dd v-for="(item, index) in welfare.cConditionList" :key="index">
                   
                    <b class="lt">{{item.ranking}}</b>
                    <p>{{item.vCondition}}</p>
                </dd>
            </dl>

            <dl>
                <dt>
                    <span>Tuyển</span> 
                    <span>dụng dài hạn</span>
                </dt>
            </dl>

             <dl>
                <dt>
                    <span>Số lượng</span>
                    <span>người cần thiết</span>
                </dt>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            compensation:{
                vTitle: 'Lương', cConditionList:[
                    { 
                        ranking: '①',
                        vCondition:'thời gian thử việc (3 tháng) lương cơ bản: 6000RMB；' 
                    },
                    { 
                        ranking: '②',
                        vCondition:'Lương cơ bản sau khi chuyển chính : Sau khi chuyển chính, lương sẽ tăng 500RMB mỗi tháng và mức lương của năm đầu tiên sẽ tăng tới giới hạn 8000RMB；' 
                    },
                    { 
                        ranking: '③',
                        vCondition:'Thưởng chuyên cần : làm đủ cả tháng, 500RMB' 
                    }
                ]
            },

            welfare:{
                vTitle: 'Phúc lợi', cConditionList:[
                    { 
                        ranking: '①',
                        vCondition:'Sau 15 ngày làm việc, trợ cấp sẽ được trả vào ngày mồng 8 của tháng tiếp theo: 70 đô la；' 
                    },
                    { 
                        ranking: '②',
                        vCondition:'3 tháng làm việc, tiền thưởng sinh nhật: 150 đô la, ngày sinh nhật sẽ căn cứ theo ngày trên  hộ chiếu làm chuẩn；' 
                    },
                    { 
                        ranking: '③',
                        vCondition:'Sau 6 tháng làm việc, hãy tận hưởng 15 ngày nghỉ phép có lương, Công ty thanh toán toàn bộ tiền vé máy bay và các chi phí khác, làm việc đủ 1 năm, không nghỉ phép, tận hưởng phần thưởng 10.000RMB, vào làm biệc 1 năm rưỡi, không nghỉ phép tận hưởng phần thưởng 15.000RMB；' 
                    },
                    { 
                        ranking: '④',
                        vCondition:'Trong các ngày lễ lớn, như tết đoan ngọ, tết trung thu, quốc khánh, tế nguyên đán, v.v… sẽ phát tiền quà hoặc quà tặng；' 
                    },
                ]
            }
        }
    }
}
</script>

<style>

</style>
