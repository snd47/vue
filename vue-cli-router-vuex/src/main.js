import Vue from 'vue'
import App from './App.vue'

import router from './routes'
// analogy with module structure
// import router form './router/index.js'

import store from './store'
// creating folder store with index.js


import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
