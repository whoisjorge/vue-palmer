<template>
  <footer>
    <div class="columns is-mobile">
      
      <!-- Left -->
      <div class="column has-text-left">
        <a href="/">vue-palmer</a>
      </div>

      <!-- Right -->
      <div class="column has-text-right">
        <a href="https://github.com/whoisjorge/vue-palmer/" target="_blank">
          <span class="icon"><i class="fa fa-github"></i></span>
        </a>
      </div>

    </div>
  </footer>
</template>


<script>
export default {
  name: 'FOOTER'
}
</script>


<style lang="sass" scoped>
@import '~bulma/sass/utilities/_all'

footer
    position: absolute
    right: 0px
    bottom: 0px
    left: 0px
    padding-top: 1rem
    text-align: center
    z-index: 1

    .columns
        margin: 0

    .column 
        padding-right: 3.625rem
        padding-left: 3.625rem
        
        // Responsive
        +mobile
            padding-right: 1.125rem
            padding-left: 1.125rem

    a
        font-family: 'BrandonGrotesque', sans-serif
        text-rendering: auto
        user-select: none
        font-weight: 800
        font-style: italic
        font-size: 4rem
        text-align: left
        outline: none
        cursor: default

        // Responsive
        +tablet-only
            font-size: 3rem
        +mobile
            font-size: 1.75rem
      
        .icon i
            font-size: 66%
            cursor: pointer

            // Responsive
            +tablet-only
                font-size: 80%
            +mobile
                font-size: 2rem


/* *
   *   
   *    LINKS
   * 
   * */ 
a 
    color: rgba(0,0,0,.05)
    text-shadow: none
    transition: text-shadow 0.666s ease-in-out, color 1.666s
  
    &:hover
        color: rgba(0,0,0,0)
        text-shadow: 1px 0px 4px rgba(16,215,174,0.7)
  
</style>
