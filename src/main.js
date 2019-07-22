import Vue from 'vue'
import HomeView from './HomeView.vue'
import './style/main.css'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(HomeView),
}).$mount('#app')
