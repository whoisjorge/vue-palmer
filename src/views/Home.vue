<template>
  <section>

        <!-- <h1 class="title"> vue-palmer</h1> -->
        <img src="../assets/images/vue-palmer.png" alt="vue-palmer" width="290px">

        <ul>
          <li> <router-link to="/" exact> Home </router-link> </li>
          <li> <router-link to="/about" exact> About </router-link> </li>
          <li> <router-link to="/login" exact> Login </router-link> </li>
          <li> <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs</a> </li>
        </ul>

  </section>
</template>


<script>
export default {
  mounted () {
    // enterAnim = 'Hola'
  }
}
</script>


<style lang="sass" scoped>

section
    text-align: center

ul
    list-style-type: none
    padding: 0

li
    display: inline-block
    margin: 0 10px
    
</style>
