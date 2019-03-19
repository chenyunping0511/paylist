// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/public/Header'
import Footer from './components/public/Footer'

Vue.config.productionTip = false

// 全局注册组件
Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
