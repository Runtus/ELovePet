<template>
    <div class="community_box">
        <router-view class="route"></router-view>
        <div id="join">
            <p>最专业的宠物咨询</p>
            <p>最贴心的医生</p>
            <p>无微不至的服务</p>
            <p>加入我们！</p>
            <el-button  type="primary" round icon="el-icon-circle-check">申请入住宠物咨询师</el-button>
        </div>
        <sidebar class="sidebar" :navinfo='navinfo'></sidebar>
    </div>
</template>

<script>
    import sidebar from "../components/sidebar";
    export default {
        name: "pet_community",
        components:{
            sidebar
        },
        data(){
            return{
                navinfo:[
                    {"name":'宠物咨询',"path":'/pet_community/pet_consult'},
                    {"name":'宠物影视',"path":'/pet_community/pet_movie'},
                    {"name":'宠物明星',"path":'/pet_community/pet_star'}
                ]
            }
        },created() {
        }
    }
</script>

<style scoped>
    .community_box{
        position: absolute;
        top: 70px;
        width: 100%;
        background-color: #f7f7f7;
    }


    .route{
        position: absolute;
        top: 20px;
        left: 10%;
        width: 50%;
    }


    .sidebar{
        position: absolute;
        top: 40px;
        left: 6%;
    }

    #join{
        position: absolute;
        right: 50px;
        top: 50px;
        padding: 5px;
        border-radius: 10px;
        background-color: white;
    }

    #join p{
        padding: 8px;
    }
</style>