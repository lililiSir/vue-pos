<template>
    <div class="accountSummary">
        <h2>{{msg}}</h2>
        <el-row>
            <el-col :span="24">
                <el-table :data="accountsList" stripe style="width: 100%" align="center">
                    <el-table-column prop="date" label="日期" align="center"></el-table-column>
                    <el-table-column prop="count" label="数量(件)" align="center"></el-table-column>
                    <el-table-column prop="money" label="金额(元)" align="center"></el-table-column>
                </el-table>
                <div style="margin-top:20px">
                    <span>卖出总数：{{totalCount}} 件 &nbsp;&nbsp;&nbsp; 今日收入: {{totalMoney}} 元</span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import store from "@/vuex/store";
    import {
        mapState,
        mapMutations
    } from "vuex";
    export default {
        name: "accountSummary",
        data() {
            return {
                msg: "账单",
                totalCount: 0,
                totalMoney: 0
            };
        },
        store,
        // computed:{
        //     accountData(){
        //         return this.$store.state.accountsList;
        //     }
        // }
        computed: {
            accountsList:function () {
                
                this.$store.state.accountsList.forEach(element => {
                    this.totalCount+=element.count;
                    this.totalMoney+=element.money;
                });

                return this.$store.state.accountsList;
            }
        }
    };
</script>

<style>

</style>

