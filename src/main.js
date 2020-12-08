import Vue from 'vue';
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import './plugins/element.js'
import store from './store'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import axios from 'axios'
// import qs from 'qs'

axios.defaults.timeout = 2000 // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' // 配置post请求头
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8' // 配置get请求头
// axios.defaults.baseURL = 'http://47.240.80.23:8080/starmeet/' // 配置接口地址
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  console.log(config)
  // 在发送请求之前做某件事
  // if (config.method === 'post') {
  //   // 这里使用qs对数据进行处理，防止后台$_POST接收不到
  //   // config.data = {
  //   //   ...config.data,
  //   //   "session": localStorage.getItem('Authorization'),
  //   // }
  //   // config.params ={
  //   //   ...config.params,
  //   //   "session": localStorage.getItem('Authorization'),
  //   // }
    // config.data = qs.stringify(config.data)
  // }
  if (localStorage.getItem('Authorization')) {
    config.headers.authorization = localStorage.getItem('Authorization');
  }
  return config
}, (error) => {
  console.log('错误的传参', 'fail')
  return Promise.reject(error)
})
 
Vue.prototype.$http = axios // 定义axios的全局变量
Vue.use(Vuex)

import router from './router.js'

Vue.config.productionTip = false

Vue.directive('title', {
  inserted: function (el) {
    document.title = el.dataset.title
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});