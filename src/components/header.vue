<template>
    <div class="head">
        <img @click="backToHome()" src="./../assets/home/logo.png" alt="" width="60" height="24">
        <a href="tel:0755-33019765">0755-33019765</a>
    </div>
</template>
<script>
import router from '../router/index.js'
export default {
    data() {
        return {
           
        };
    },
    methods: {
        backToHome() {
            router.push('/');
        }
    }
};
</script>
<style>
    .head {
        width: calc(100% - 40px);
        padding: 20px 20px 0px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .head > a {
        text-decoration: none;
        color: #fff;
        font-size: 14px;
    }
</style>



