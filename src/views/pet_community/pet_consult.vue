<template>
    <div>
    <div class="search">
        <p style="font-size: 25px;padding-left: 15px;padding-top: 5px;">筛选</p>
        <el-divider></el-divider>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item style="padding-left: 40px;">
                <el-input v-model="keyword" placeholder="请输入医生姓名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" plain="true">查询</el-button>
            </el-form-item>
        </el-form>
    </div>
    <div v-for="(item,i) in doctor_info">
        <card class="card" :imgurl='item.imgurl' :name='item.name' :intro='item.intro' :tags='item.tags'></card>
    </div>
    </div>
</template>

<script>
    import card from "../../components/card";
    export default {
        name: "pet_consult",
        components:{
            card
        },
        data(){
            return{
                keyword:'',
                doctor_info:[
                    {
                        name:'医生名',
                        intro:'个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介' +
                            '个人简介个人简介个人简介个人简介个人简介个人简介个人简介',
                        imgurl:'https://test-1300330493.cos.ap-chengdu.myqcloud.com/Epet/doctor.jpg',
                        tags: [
                            { name: '从业5年', type: '' },
                            { name: '300/h', type: 'success' },
                            { name: '123人咨询', type: 'info' },
                            { name: '周一到周五 9:00-17:00', type: 'warning' }
                        ]
                    },
                    {
                        name:'医生名',
                        intro:'个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介' +
                            '个人简介个人简介个人简介个人简介个人简介个人简介个人简介',
                        imgurl:'https://test-1300330493.cos.ap-chengdu.myqcloud.com/Epet/doctor.jpg',
                        tags: [
                            { name: '从业5年', type: '' },
                            { name: '300/h', type: 'success' },
                            { name: '123人咨询', type: 'info' },
                            { name: '周一到周五 9:00-17:00', type: 'warning' }
                        ]
                    },
                    {
                        name:'医生名',
                        intro:'个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介' +
                            '个人简介个人简介个人简介个人简介个人简介个人简介个人简介',
                        imgurl:'https://test-1300330493.cos.ap-chengdu.myqcloud.com/Epet/doctor.jpg',
                        tags: [
                            { name: '从业5年', type: '' },
                            { name: '300/h', type: 'success' },
                            { name: '123人咨询', type: 'info' },
                            { name: '周一到周五 9:00-17:00', type: 'warning' }
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