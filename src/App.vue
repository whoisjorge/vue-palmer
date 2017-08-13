<template>
  <div id="app">

    <Viewport></Viewport>

    <app-Footer></app-Footer>
    
    <div id="bg_effect"></div>
  </div>
</template>


<script>
import Viewport from '@/components/AppViewport'
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'

export default {
  name: 'APP_NAME',

  components: {
    Viewport, AppHeader, AppFooter
  },

  created () {
    // Development purposes
    jQuery(document).ready(function ($) {
      console.info('jQuery ready!')
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


// Project Specific
#app 
    padding-top: 2rem

#bg_effect
    position: fixed
    width: 100vw
    height: 100vh
    top: 0px
    left: 0px
    pointer-events: none
    background: radial-gradient(at center center, rgba(0, 0, 0, 0) 51%, rgba(0, 0, 0, 0.15) 100%)
</style>
