import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from '@/store'
import router from './router'
import request from '@/utils/request'

Vue.config.productionTip = false

import '@/permission'

Vue.prototype.$api = request

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
