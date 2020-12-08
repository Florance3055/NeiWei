import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    // userList: [1, 2, 3, 4]
}

const getters = {
    // getUrlParams: () => () => {
    //     let url = location.search;
    //     let theRequest = {};
    //     if (url.indexOf("?") != -1) {
    //         var str = url.substr(1), strs;
    //         strs = str.split("&");
    //         for (var i = 0; i < strs.length; i++) {
    //             theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    //         }
    //     }
    //     return theRequest;
    // },
    // getUserList: (state) => {
    //     //注：这里会缓存，只有执行了 actions，这里的缓存才会更新
    //     return state.userList;
    // }
}

const mutations = {
    // 修改token，并将token存入localStorage
    changeLogin(state, user) {
        state.Authorization = user.Authorization;
        localStorage.setItem('Authorization', user.Authorization);
    },
    // setUserList(state, data) {
    //     // 如果这里的 userList 接口返回，可以用axios请求
    //     state.userList = data;
    // }
}

const actions = {
    // commitUserList: ({ commit }, userList) => commit('setUserList', userList)
}

const store = new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
})

export default store;