// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'
import * as filters from './filters'

// Keep vue-router and vuex store in sync : reg. `store.state.route`
// (https://github.com/vuejs/vuex-router-sync/tree/next)
sync(store, router)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// Configuration
Vue.config.productionTip = false
Vue.config.debug = true
Vue.config.devTools = true

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  ...App
})

// Expose the app, the router and the store.
export { app, router, store }
