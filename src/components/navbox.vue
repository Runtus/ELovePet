<template>
    <div class="nav_box">
        <img src="../assets/e-logo.png" class="logo" alt="">
        <p id="title">E爱成宠</p>
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
                username:'兰翰麟'
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
    .nav{
        position: absolute;
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
        color: black;
        text-decoration: none;
    }

    #title{
        position: absolute;
        left: 20%;
        top: 5px;
        color: #00a2ff;
        font-weight: bold;
        font-size: 23px;
        font-family: Tahoma;
    }

    .logo{
        position: absolute;
        left: 12%;
        top: 5px;
        height: 65px;
        width: 65px;
    }

    .activeClass{
        background-color: #00a2ff;
        color: white;
    }

    #user_tx{
        padding: 15px;
        width: 40px;
        height: 40px;
        border-radius: 40px;
    }

    #username{
        position: absolute;
        left: 65px;
        top: 20px;
        font-size: 12px;
    }

    .userinfo{
        position: absolute;
        left: 80%;
        width: 20%;
    }
</style>