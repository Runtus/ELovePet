<template>
    <div class="Index_swiper" v-bind:style="{width : imageWidth + 'px', 'overflow' : 'hidden',height : imageHeight*0.7 + 'px'} ">
        <div  id="PB" v-bind:style="{width : listImages.length * imageWidth + 'px','margin-left' :'-' + scrollWidth + 'px'}">
            <div v-for="(item,index) in listImages" class="imageBox" v-bind:style="{height : imageHeight + 'px', width: imageWidth + 'px'}"> <img v-bind:src="item.imageUrl" alt="图片"></div>
        </div>
        <div class="pointerBox">
            <div class="pointer noneChoosen"  v-bind:id="'pointer' + index" v-for="(item,index) in pointerArr" v-on:click="chooseImage(index)"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index_swiper",
        props : ["urls","scroll_timer"],
        data(){
            return {
                listImages : this.urls,
                imageHeight : "",
                imageWidth : "",
                photoBoxWidth : 0,
                scrollWidth : 0,
                scrollCount : 0,
                IntervalSignal : "",
                pointerArr : [],
                timer : this.scroll_timer
            }
        },
        created() {
            this.imageHeight = window.innerHeight;
            this.imageWidth = window.innerWidth;
            this.photoBoxWidth = this.listImages.length * this.imageWidth;
            // console.log(urls)
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

            $("#PB").addClass("photo");
            that.listImages.forEach((value,index) => {
                if(index < that.listImages.length - 1)
                {
                    console.log(index)
                    that.pointerArr.push(value);
                }
            })
            setTimeout(() => {
                let dom = $("#pointer0");
                dom.removeClass("noneChoosen");
                dom.addClass("choosen");
            },0)


            this.startScroll();
        },
        methods : {
            startScroll(){
                var that = this;

                // $("#pointer0").removeClass("noneChoosen");
                // $("#pointer0").addClass("choosen");
                //信号记录
                this.IntervalSignal = setInterval(() => {
                    if (that.scrollCount < that.listImages.length - 2) //0 1 2 3
                    {
                        // console.log(document.getElementById("pointer0"));
                        that.leavePointer(that.scrollCount);
                        that.scrollCount = (that.scrollCount + 1) % that.listImages.length;
                        that.scrollWidth = that.imageWidth * that.scrollCount;
                        that.enterPointer(that.scrollCount);

                    } else if (that.scrollCount === that.listImages.length - 2) { //即将跳转到最后一张图片，最后一张和第一张图片是一样的，应该取消样式
                        that.leavePointer(that.scrollCount);
                        that.scrollCount++; //跳转
                        that.scrollWidth = that.imageWidth * that.scrollCount;
                        that.enterPointer(0);
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
                },that.timer)
            },
            enterPointer(number){
                var dom = $(`#pointer${number}`);
                dom.removeClass("noneChoosen");
                dom.addClass("choosen");
            },
            leavePointer(number){
                var dom = $(`#pointer${number}`);
                dom.removeClass("choosen");
                dom.addClass("noneChoosen");
            },
            chooseImage(index){
                clearInterval(this.IntervalSignal); //关闭计时器
                this.leavePointer(this.scrollCount);
                this.enterPointer(index);
                this.scrollCount = index;
                this.scrollWidth = this.imageWidth * this.scrollCount;
                this.startScroll();
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
        transform: translateX(-50%);
        justify-content: space-around;
    }



    .pointer{
        width: 20px;
        height: 20px;
        border-radius: 10px;
        transition: background-color 0.5s ease-in-out;
        cursor: pointer;
    }
    .pointer:hover{
        background-color: rgba(255,255,255,0.8);
    }
    /*没有被选择时*/
    .noneChoosen{
        background: rgba(220,200,200,0.7);
    }

    .choosen{
        background-color: rgba(255,255,255,0.8);
    }

</style>