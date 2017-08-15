import Vue from 'vue'
import Router from 'vue-router'
// import beforeEach from './beforeEach'

/**
 * Import Views
 */
import Home from '@/views/Home'
import About from '@/views/About'
import Login from '@/views/Login'
import Account from '@/views/Account'

//

Vue.use(Router)
const router = new Router({
  // routes,
  linkActiveClass: 'is-active',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Home },
    {
      path: '/about',
      component: About
    },
    // ACCOUNTS SECTION
    {
      path: '/login',
      component: Login
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    // 404 PAGE
    {
      path: '*',
      redirect: '/'
    }
  ]
})

/**
* Before a route is resolved we check for
* the token if the route is marked as
* requireAuth.
*/
// router.beforeEach(beforeEach)

export default router
