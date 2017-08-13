import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  // base: '',
  routes
})
