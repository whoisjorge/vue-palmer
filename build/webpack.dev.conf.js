var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
//
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      title: 'Vue Palmer',
      description: 'A starter point with everything you could possibly need to start a new funky Vue.js Full-Stack Web Application.',
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // https://github.com/jantimon/favicons-webpack-plugin
    /*new FaviconsWebpackPlugin({
      logo: ('./src/assets/Vue.png'),
      // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
      background: '#f0f',
      // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
      title: '',
      // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
      icons: {
        avicons: true,
        android: true,
        appleIcon: true,
        firefox: true,
        appleStartup: false,
        coast: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),*/
    // https://webpack.github.io/docs/shimming-modules.html
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      jQuery: 'jquery'
    }),
    // BrowserSync for device testing (https://www.npmjs.com/package/browser-sync-webpack-plugin)
    /*
      new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080'
    }, {
      // prevent BrowserSync from reloading the page
      // and let Webpack Dev Server take care of this
      reload: false
    }),
    */
    new FriendlyErrorsPlugin()
  ]
})
