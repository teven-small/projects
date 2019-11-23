<template>
    <div class="content_box">
        <div class="sub_title">
            <span>Hệ thống kinh doanh</span>
        </div>

        <div class="business_landscape">
            <p class="vietnam">
                Báo cáo đầu tư Campuchia do Hội đồng phát triển Campuchia (CDC) công bố hôm nay cho thấy năm 2016, Campuchia thu hút
                đầu tư trực tiếp nước ngoài (FDI) là 2.155 tỷ USD. Trung Quốc là nguồn vốn nước ngoài lớn nhất của Campuchia.
            </p>
            <p class="vietnam">
                Đầu tư vào Campuchia có thể tận hưởng các phương pháp điều trị GSP và MFN được cung cấp bởi 28 quốc gia bao gồm Hoa Kỳ, 
                Châu Âu và Nhật Bản. Một số sản phẩm được hưởng mức thuế suất ưu đãi đặc biệt GSP, rất cạnh tranh về giá cả thị trường 
                và dễ dàng xuất khẩu sang các thị trường như Mỹ và Châu Âu. Ngoài ra, Campuchia đã ký thỏa thuận miễn thuế với EU và các 
                sản phẩm có thể được xuất khẩu trực tiếp sang EU.
            </p>
        </div>

        <div class="market_compete">
            <p class="tip">
                <span>Khả năng</span>  
                <span>cạnh tranh thị trường</span>
            </p>

            <div class="proportion_box">
                <div class="proportion_item">
                    <p>Thị phần 63%</p>
                    <div class="progress_bar">
                        <div class="already_occupy first"></div>
                    </div>
                </div>
                <div class="proportion_item">
                    <p>Thị phần 69%</p>
                    <div class="progress_bar">
                        <div class="already_occupy second"></div>
                    </div>
                </div>
                <div class="proportion_item">
                    <p>Thị phần 72%</p>
                    <div class="progress_bar">
                        <div class="already_occupy three"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="involved_field clear">
            <div class="lt" v-for="(item, index) in involvedField" :key="index">
                <img :src="item.img" alt="">
                <p>{{item.vietnam}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            involvedField:[
                {
                    img: require('../../assets/imgs/earch.png'),
                    vietnam: 'Tạo một hệ sinh thái toàn cầu hóa công nghiệp và nâng cấp trải nghiệm người dùng'
                },
                { 
                    img: require('../../assets/imgs/number.png'),
                    vietnam: 'Thu thập phân tích nâng cao để tối đa hóa giá trị dữ liệu'
                },
                { 
                    img: require('../../assets/imgs/financial.png'),
                    vietnam: 'Bố cục chuyển tiếp đa miền, đầu tư đa dạng trong các ngành công nghiệp'
                },
                { 
                    img: require('../../assets/imgs/p.png'),
                    vietnam: 'Sự chuyển đổi công nghệ trí tuệ nhân tạo để đạt được một tương lai rực rỡ cho các doanh nghiệp'
                },
            ]
        }
    }
}
</script>

<style>

</style>
