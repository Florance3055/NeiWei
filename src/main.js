import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import './plugins/element.js'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000 // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' // 配置post请求头
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8' // 配置get请求头
// axios.defaults.baseURL = '/api' // 配置接口地址
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  // 在发送请求之前做某件事
  if (config.method === 'post') {
    // 这里使用qs对数据进行处理，防止后台$_POST接收不到
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  console.log('错误的传参', 'fail')
  return Promise.reject(error)
})
 
Vue.prototype.$http = axios // 定义axios的全局变量

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
  router
});