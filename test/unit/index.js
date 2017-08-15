import Vue from 'vue'
Vue.config.productionTip = false

// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
// Function.prototype.bind = require('function-bind')

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except app.js for coverage.
const srcContext = require.context('../../src', true, /^\.\/(?!app(\.js)?$)/)
srcContext.keys().forEach(srcContext)
