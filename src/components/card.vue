<template>
    <div class="cardbox">
        <img :src="imgurl"  alt="">
        <p id="name">{{name}}</p>
        <div id="intro">{{intro}}</div>
        <div class="tag">
            <el-tag
                    v-for="tag in tags"
                    :key="tag.name"
                    closable
                    :type="tag.type">
                {{tag.name}}
            </el-tag>
        </div>
    </div>
</template>

<script>
    export default {
        name: "card",
        props:{
            'name':String,
            'intro':String,
            'imgurl':String,
            'tags':Array
        },
        data(){
            return{
                name:'',
                intro:'',
                tags: [
                ]
            }
        }
    }
</script>

<style scoped>
    .cardbox{
        width: 100%;
        height: 200px;
        border: solid 1px #cbcbcb;
    }

    .cardbox img{
        position: absolute;
        top: 20px;
        left: 20px;
        height: 140px;
        width: 100px;
        border-radius: 10px;
        border: solid 1px #cbcbcb;
    }

    #name{
        position: absolute;
        left: 140px;
        top: 20px;
        font-size: 20px;
    }

    #intro{
        position: absolute;
        left: 140px;
        top: 60px;
        width: 70%;
    }

    .tag{
        position: absolute;
        right: 20px;
        bottom: 7px;
    }
</style>