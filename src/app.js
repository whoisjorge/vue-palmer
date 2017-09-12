/**
 * This is the entry point!
 */
import { sync } from 'vuex-router-sync'
import Vue from 'vue'
import App from './App.vue'
import Meta from 'vue-meta'

/**
* This is the Vuex store
*/
import store from './store'

/**
* This is the router
*/
import router from './router'

/**
* Firebase
*/
import './app/firebase'

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

Vue.use(Meta, {
  keyName: 'head', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'vmid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
})

/**
 * Sync the router with the vuex store. This registers `store.state.route`
 * (https://github.com/vuejs/vuex-router-sync/tree/next)
 */
sync(store, router)

/**
 * Create the app instance.
 * Injecting to all child components and making them available everywhere */

/* eslint-disable no-new */
const app = new Vue({
  nprogress,
  router, // this.$router
  store, // this.$store
  ...App
})

/**
 * Expose the app, the router and the store.
 * We are not mounting the app here
 * bootstrapping =>  client[?]  or  server[?]
 */
export { app, router, store }
