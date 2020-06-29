<template>
    <div class="Index_swiper" v-bind:style="{width : imageWidth + 'px', 'overflow' : 'hidden',height : imageHeight*0.7 + 'px'} ">
        <div  id="PB" v-bind:style="{width : photoBoxWidth + 'px','margin-left' :'-' + scrollWidth + 'px'}">
            <div v-for="(item,index) in listImages" class="imageBox" v-bind:style="{height : imageHeight + 'px', width: imageWidth + 'px'}"> <img v-bind:src="item.imageUrl" alt="图片"></div>
        </div>
        <div class="pointerBox">
            <div class="pointer" v-for="(item,index) in pointerArr"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index_swiper",
        data(){
            return {
                listImages : [
                    {imageUrl : "https://lao-lan-go.oss-cn-beijing.aliyuncs.com/highQua/pixiv15.jpg"},
                    {imageUrl : "https://lao-lan-go.oss-cn-beijing.aliyuncs.com/highQua/1593260140203.png"},
                    {imageUrl : "https://lao-lan-go.oss-cn-beijing.aliyuncs.com/highQua/1593260140203.png"},
                    {imageUrl : "https://lao-lan-go.oss-cn-beijing.aliyuncs.com/highQua/1593260140203.png"},
                    {imageUrl : "https://lao-lan-go.oss-cn-beijing.aliyuncs.com/highQua/1593260140203.png"},
                    {imageUrl : "https://lao-lan-go.oss-cn-beijing.aliyuncs.com/highQua/pixiv15.jpg"},
                ],
                imageHeight : "",
                imageWidth : "",
                photoBoxWidth : 0,
                scrollWidth : 0,
                scrollCount : 0,
                IntervalSignal : "",
                pointerArr : []
            }
        },
        created() {

            this.imageHeight = window.innerHeight;
            this.imageWidth = window.innerWidth;
            this.photoBoxWidth = this.listImages.length * this.imageWidth;
        },
        mounted() {
            var that = this;
            window.onresize = () => {
                return (() => {
                    console.log(that.imageWidth)
                    that.imageHeight = window.innerHeight;
                    that.imageWidth = window.innerWidth;
                })()
            }
            // setInterval(() => {
            //
            // },1000)
            $("#PB").addClass("photo");
            that.listImages.forEach((value,index) => {
                if(index < that.listImages.length - 1)
                {
                    console.log(index)
                    that.pointerArr.push(value);
                }

            })
            this.startScroll();
        },
        methods : {
            startScroll(){
                var that = this;
                //信号记录
                this.IntervalSignal = setInterval(() => {
                    if (that.scrollCount < that.listImages.length - 2) //0 1 2 3
                    {
                        that.scrollCount = (that.scrollCount + 1) % that.listImages.length;
                        that.scrollWidth = that.imageWidth * that.scrollCount;
                    } else if (that.scrollCount === that.listImages.length - 2) { //即将跳转到最后一张图片，最后一张和第一张图片是一样的，应该取消样式

                        that.scrollCount++; //跳转
                        that.scrollWidth = that.imageWidth * that.scrollCount;
                        //注意，图片移动需要1s的时间，那么这里的延迟必须是大于1s，否则图片滑动会在中途卡断
                        setTimeout(() => {
                            $("#PB").removeClass("photo");
                            setTimeout(() => {
                                that.scrollCount = 0;
                                that.scrollWidth = that.imageWidth * that.scrollCount;
                                setTimeout(() => {
                                    $("#PB").addClass("photo");
                                },500)
                            },0);
                        //    这里设置三层setTimeout是为了保证内部的顺序为  移除photo -> 更新数值 -> 增加photo
                        //    而实现这一个过程的方法是异步
                        }, 2000)
                    }
                },4000)
            }
        }


    }
</script>

<style scoped>


    .photo {
        transition:margin-left 1.25s ease-in-out ;
    }

    .Index_swiper{
        border: 1px solid black;
        position: relative;
    }

    #PB{
        position: relative;
        display: flex;
        overflow: hidden;

    }


    .imageBox{


    }
    .imageBox > img{
        width: 100%;
        height: 100%;
    }

    .pointerBox{
        width: 150px;
        position: absolute;
        display: flex;
        bottom: 5px;
        left: 50%;
        transform:translateX(-50%);
        justify-content: space-around;
    }



    .pointer{
        width: 20px;
        height: 20px;
        background: rgba(220,200,200,0.7);
        border-radius: 10px;

    }

</style>