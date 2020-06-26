<template>
    <div>
        <div class="search">
            <p style="font-size: 25px;padding-left: 15px;padding-top: 5px;">筛选</p>
            <el-divider></el-divider>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item style="padding-left: 40px;">
                    <el-input v-model="keyword" placeholder="请输入电影名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" plain="true">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div v-for="(item,i) in movie_info">
            <card class="card" :imgurl="item.imgurl" :name='item.name' :intro='item.intro' :tags='item.tags'></card>
        </div>
    </div>
</template>

<script>
    import card from "../../components/card";
    export default {
        name: "pet_movie",
        components:{
            card
        },
        data(){
            return{
                keyword:'',
                movie_info:[
                    {
                        name:'忠犬八公',
                        intro:'电影简介电影简介电影简介电影简介电影简介电影简介电影简介电影简介电影简介' +
                            '电影简介电影简介电影简介电影简介电影简介电影简介电影简介电影简介',
                        imgurl:'https://test-1300330493.cos.ap-chengdu.myqcloud.com/Epet/movie.jpg',
                        tags: [
                            { name: '影视经典', type: '' },
                            { name: '感人', type: 'success' },
                            { name: '播放量20.7w', type: 'info' },
                            { name: '忠诚', type: 'warning' }
                        ]
                    },
                    {
                        name:'忠犬八公',
                        intro:'电影简介电影简介电影简介电影简介电影简介电影简介电影简介电影简介电影简介' +
                            '电影简介电影简介电影简介电影简介电影简介电影简介电影简介电影简介',
                        imgurl:'https://test-1300330493.cos.ap-chengdu.myqcloud.com/Epet/movie.jpg',
                        tags: [
                            { name: '影视经典', type: '' },
                            { name: '感人', type: 'success' },
                            { name: '播放量20.7w', type: 'info' },
                            { name: '忠诚', type: 'warning' }
                        ]
                    },
                    {
                        name:'忠犬八公',
                        intro:'电影简介电影简介电影简介电影简介电影简介电影简介电影简介电影简介电影简介' +
                            '电影简介电影简介电影简介电影简介电影简介电影简介电影简介电影简介',
                        imgurl:'https://test-1300330493.cos.ap-chengdu.myqcloud.com/Epet/movie.jpg',
                        tags: [
                            { name: '影视经典', type: '' },
                            { name: '感人', type: 'success' },
                            { name: '播放量20.7w', type: 'info' },
                            { name: '忠诚', type: 'warning' }
                        ]
                    },
                ],
            }
        }
    }
</script>

<style scoped>
    .search{
        position: absolute;
        top: 20px;
        left: 25%;
        background-color: white;
        width: 100%;
        border: solid 1px #cbcbcb;
        border-top-right-radius: 20px;
    }

    .card{
        position: relative;
        top: 200px;
        left: 25%;
        background-color: white;
    }
</style>