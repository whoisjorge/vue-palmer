// polyfills
import 'es6-promise/auto'
import 'weakmap' // for vuexfire, using (imports-loader)

/**
 * Mount to DOM
 */
import { app } from './app'
app.$mount('#app')
