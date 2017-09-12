<template>
  <footer :class="[fadeIn]">
    <section class="columns is-mobile">

      <div class="column">
        <a href="/">vue-palmer</a>
      </div>

      <div class="column">
        <a :href="[url.repository]" target="_blank">
          <span class="icon"><i class="fa fa-github"></i></span>
        </a>
      </div>

    </section>
  </footer>
</template>


<script>
export default {
  name: 'FOOTER',

  data: () => ({
    fadeIn: 'animated fadeIn',
    url: {
      repository: 'https://github.com/whoisjorge/vue-palmer/'
    }
  })

}
</script>


<style lang="sass" scoped>
@import '~bulma/sass/utilities/_all'

footer
    position: fixed
    right: 0px
    bottom: 0px
    left: 0px
    text-align: center
    z-index: 1
    animation-delay: .666s

    .columns
        margin: 0

    .column
        padding-right: 3.625rem
        padding-left: 3.625rem
        &:nth-child(1)
            text-align: left
        &:nth-child(2)
            text-align: right

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
