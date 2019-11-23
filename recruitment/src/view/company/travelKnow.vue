<template>
    
    <div class="rt rt_box">
        <div class="goods_box">
            <p class="tip">
                <span>Vật</span>
                <span>dụng cần thiết</span>
            </p>
            <div class="goods_item">
                <p>Hộ chiếu, quần áo theo mùa, các nhu cầu cá nhân khác, v.v.</p>
            </div>
        </div>
        <div class="traffic_box">
            <p class="tip">
                <span>Hướng</span>
                <span>dẫn giao thông</span>
            </p>
            <div class="traffic_item">
                    <dl>
                    <dd v-for="(item, index) in traffic" :key="index">
                        <b class="lt">{{item.ranking}}</b>
                        <p>{{item.vCondition}}</p>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        
            traffic:[
                {
                    ranking: '①',
                    vCondition: 'Tự ngồi xe tới Hải quan Mộc Bài, cần thông báo trước cho nhân sự về thời gian đến trước một ngày. Công ty sẽ sắp xếp nhân viên tới Hải quan Mộc Bài đón và làm visa , bảo quan với các việc liên quan' 
                },
                {
                    ranking: '②',
                    vCondition: 'Bằng máy bay đến sân bay Hồ Chí Minh, công ty sắp xếp xe đón tại sân bay đến hải quan Mộc Bài, sau đó làm visa , bảo quan với các việc liên quan' 
                },
            ]
            
        }
    }
}
</script>

<style>

</style>
