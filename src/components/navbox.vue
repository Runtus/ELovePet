<template>
    <div class="nav_box">
        <div class="title-box">
            <img src="../assets/e-logo.png" class="logo" alt="">
            <div class="font">
                <p id="title">E爱成宠</p>
                <p class="intro"> xxxxxxxx(简介)</p>
            </div>
        </div>
        <ul class="nav">
            <router-link  tag="li" active-class="activeClass" class="nav-item" :to="{path:'/index'}">首页</router-link>
            <router-link  tag="li" active-class="activeClass" class="nav-item" :to="{path:'/pet_business'}">宠物业务</router-link>
            <router-link  tag="li" active-class="activeClass" class="nav-item" :to="{path:'/pet_community'}">宠物社区</router-link>
            <router-link  tag="li" active-class="activeClass" class="nav-item" :to="{path:'/pet_market'}">宠物商城</router-link>
        </ul>
        <div class="userinfo">
            <img src="../assets/user_tx.jpg" id="user_tx">
            <p id="username">{{username}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'navbox',
        data() {
            return {
                username:'秦墨涵🐮🍺'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .nav_box{
        width: 70%;
        margin: 0 auto;
        display: flex;
        position: relative;
        justify-content: space-around;
        align-items: center;
    }
    .title-box{
        display: flex;
        align-items: center;
    }
    .title-box > .font > .intro{
        color: #99a9bf;
    }
    .nav{
        top: 0;
        left: 30%;
        list-style: none;
        height: 70px;
        width: 40%;
    }

    .nav li{
        float: left;
        height: 70px;
        width: 25%;
        line-height: 70px;
        text-align: center;
        cursor: pointer;
    }

    .nav-item{
        text-decoration: none;
    }

    #title{
        color: #00a2ff;
        font-weight: bold;
        font-size: 23px;
        font-family: Tahoma,serif;
    }

    .logo{
        height: 65px;
        width: 65px;
        margin-right: 10px;
    }

    .activeClass{
        background-color: #00a2ff;
        color: white;
    }



    .userinfo{

        position: relative;
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .userinfo > img{
        width: 50px;
        height: 50px;
        border-radius: 25px;
        margin-right: 10px;
    }





</style>