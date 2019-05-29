import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css/animate.min.css'
import 'font-awesome/css/font-awesome.css'
import './../mock/index.js'
import $ from 'jquery'

if (process.env.NODE_ENV === "development") {
  require("./../mock/index.js");
}

window.$=$

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
