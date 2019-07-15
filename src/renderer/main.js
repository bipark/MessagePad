import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'


// import Moment
const moment = require('moment')
require('moment/locale/ko')
Vue.use(require('vue-moment'), {
  moment
})

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
