import Vue from 'vue'
import App from './App.vue'

import router from './routes'

// analogy with module structure
// import router form './router/index.js'

import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')