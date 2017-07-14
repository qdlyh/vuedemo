import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count: 1
}
//getters计算过滤操作
const getters = {
    count (state) {
        return state.count += 100;
    }
}

const mutations = {
    add(state,n) {
        state.count+=n
    },
    reduce(state) {
        state.count--
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters
})