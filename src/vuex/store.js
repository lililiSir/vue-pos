import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 统计，统计结账的订单，包括结账时间，购买数量，金额
const state={
    accountsList:[]
}

const mutations={
    // 新增订单，包括结账时间，购买数量，金额
    addAccounts(state,object){
        state.accountsList.push(object);
    }
}

export default new Vuex.Store({
    state,mutations
});