<template>
    <div class="sidebar-box">
        <router-link class="main" :to="{ path: main.path }">{{main.name}}</router-link>
        <ul>
            <router-link tag="li" v-for="item in navinfo" :to="{ path: item.path }">{{item.name}}</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "sidebar",
        props:{
            navinfo:Array
        },
        created() {
            this.main = this.navinfo[0]
            this.navinfo = this.navinfo.shift()
        },
        methods:{
            push(){
                this.$router.push('/index')
            }
        }
    }
</script>

<style scoped>
    .sidebar-box{
        width: 120px;
    }

    .main{
        position: absolute;
        top: 0;
        left: 20px;
        background-color: #009dff;
        color: white;
        border: solid 1px #009dff;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        width: 120px;
        text-align: center;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        text-decoration: none;
    }

    ul{
        position: absolute;
        top: 52px;
        left: 40px;
        width: 100px;
        text-align: center;
        border-bottom-left-radius: 10px;
        border: solid 1px #cbcbcb;
        list-style: none;
        overflow: hidden;
    }

    li{
        color: grey;
        height: 30px;
        line-height: 30px;
        width: 100px;
        background-color: white;
        cursor: pointer;
    }

</style>