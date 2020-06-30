<template>
    <div class="index">
       <Index_swiper v-bind:urls="urls" v-bind:scroll_timer="time"></Index_swiper>
    </div>
</template>

<script>
    import Index_swiper from "../components/Index_swiper";
    export default {
        name: "index",
        components: {Index_swiper},
        data(){
            return {
                urls :
                        [{imageUrl : "https://lao-lan-go.oss-cn-beijing.aliyuncs.com/highQua/pixiv15.jpg"},
                        {imageUrl : "https://lao-lan-go.oss-cn-beijing.aliyuncs.com/highQua/1593260140203.png"},
                        {imageUrl : "https://lao-lan-go.oss-cn-beijing.aliyuncs.com/highQua/1593260140203.png"},
                        {imageUrl : "https://lao-lan-go.oss-cn-beijing.aliyuncs.com/highQua/1593260140203.png"},
                        {imageUrl : "https://lao-lan-go.oss-cn-beijing.aliyuncs.com/highQua/1593260140203.png"},
                        {imageUrl : "https://lao-lan-go.oss-cn-beijing.aliyuncs.com/highQua/pixiv15.jpg"}
                    ],
                time : 4000
            }
        }
    }
</script>

<style scoped>

</style>