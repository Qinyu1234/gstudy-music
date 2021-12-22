import Vue from 'vue'
import App from './App.vue'
import fastclick from 'fastclick'
fastclick.attach(document.body)
import './assets/css/base.scss'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
