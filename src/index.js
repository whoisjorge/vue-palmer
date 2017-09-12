import 'es6-promise/auto' // polyfills
import 'weakmap' // for vuexfire  (using imports-loader)
import { app } from './app'

/**
 * Mount to DOM
 */
app.$mount('#app')
