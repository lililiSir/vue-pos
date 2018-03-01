<template>
    <div class="left">
        <ul>
            <li>
                <router-link to="/">
                    <i class="iconfont icon-liebiao"></i>
                    <div>列表</div>
                </router-link>
            </li>
            <li>
                <router-link to="/goods">
                    <i class="iconfont icon-hanbao"></i>
                    <div>商品</div>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <i class="iconfont icon-tianmaochaoshigouwuche"></i>
                    <div>购物车</div>
                </router-link>
            </li>
            <li>
                <router-link to="/accountSummary">
                    <i class="iconfont icon-wodezichan1"></i>
                    <div>金额</div>
                </router-link>
            </li>
        </ul>
        <ul>
            <li class="left-setting">
                <router-link to="/">
                    <i class="iconfont icon-shezhi"></i>
                    <div>设置</div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "left"
    };
</script>

<style>
    .left {
        width: 7%;
        height: 100%;
        background-color: #1d8ce0;
        color: #fff;
        font-size: 15px;
        float: left;
    }
    .iconfont {
        font-size: 30px;
    }
    .left ul {
        padding: 0px;
        margin: 0px;
    }
    li {
        display: block;
        list-style: none;
        text-align: center;
        border-bottom: 1px solid #20a0ff;
        padding: 10px;
    }
    .left-setting {
        position: fixed;
        left: 25px;
        bottom: 0px;
    }
    a {
        text-decoration: none;
    }
    a:visited {
        color: #fff;
    }
    a:active {
        color: #fff;
    }
    a:hover {
        color: black;
    }
</style>

