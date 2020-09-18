import Vue from 'vue'
import PortalVue from 'portal-vue'
import App from './App.vue'
import router from './router'
 

import './css/main.css'
import './css/normalize.css'
import './css/webflow.css'
import './css/0xbtc.webflow.css'

Vue.config.productionTip = false

Vue.use(PortalVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
