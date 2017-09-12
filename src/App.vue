<template>
  <div id="app">
    <nprogress-container />

    <Viewport />

    <footer-bar></footer-bar>

    <div id="bg_effect"></div>
  </div>
</template>


<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import Viewport from '@/components/AppViewport'
import HeaderBar from '@/components/Header'
import FooterBar from '@/components/Footer'

export default {
  name: 'APP',

  components: {
    NprogressContainer, Viewport, HeaderBar, FooterBar
  },

  created () {
    // Development purposes
    jQuery(document).ready(function ($) {
      console.log('jQuery ready!')
      // useless stuff
      $('img').click(function () {
        $(this).hide()
        console.log('OMG! insane jQuery\'ed...')
      })
    })
  }

}
</script>



<style lang="sass">
// App Styles
@import './assets/sass/app'
#app
    padding-top: 2rem


// Cool effect, uh?
// ( ͡° ͜ʖ ͡°)
#bg_effect
    position: fixed
    width: 100vw
    height: 100vh
    top: 0px
    left: 0px
    pointer-events: none
    background: radial-gradient(at center center, rgba(0, 0, 0, 0) 51%, rgba(0, 0, 0, 0.15) 100%)


// NProgress
.nprogress-container
    position: fixed !important
    width: 100%
    height: 50px
    z-index: 2048
    pointer-events: none
    margin-top: -2rem
    #nprogress
        $color: #48e79a
        .bar
            background: $primary

        .peg
            box-shadow: 0 0 10px $primary, 0 0 5px $primary

        .spinner-icon
            border-top-color: $primary
            border-left-color: $primary
</style>
