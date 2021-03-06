// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/store'
// 引用路由配置文件
import routes from './router/routes'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引用axios文件
import axios from './router/axios'
// 绑定api方法到全局
Vue.prototype.axios = axios
Vue.use(MintUI)
Vue.use(VueRouter)
Vue.config.productionTip = false
/* eslint-disable no-new */
// 使用配置文件规则
const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
