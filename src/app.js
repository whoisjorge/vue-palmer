/**
 * This is the entry point!
 */
import { sync } from 'vuex-router-sync'
import Vue from 'vue'
import App from './App.vue'

/**
* This is the Vuex store and it is
* avaible to all your components
*/
import store from './store'

/**
* This is the Router
*/
import router from './router'

/**
* Firebase Inegration
*/
import './api/firebase'

// Filters (dev)
import * as filters from './filters'
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/**
 *
 *
 * NProgress UI Component
 */
import NProgress from 'vue-nprogress'
Vue.use(NProgress)
const nprogress = new NProgress({ parent: '.nprogress-container' })

// Vue global configurations
Vue.config.devtools = true
Vue.config.productionTip = false

/**
 * Sync the router with the vuex store. This registers `store.state.route`
 * (https://github.com/vuejs/vuex-router-sync/tree/next)
 */
sync(store, router)

/* eslint-disable no-new */
const app = new Vue({
  nprogress,
  router,
  store,
  ...App
})

// Expose the app, the router and the store.
export { app, router, store }
