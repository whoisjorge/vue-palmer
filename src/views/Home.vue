<template>
  <section>

        <ul>
          <li> <router-link to="/" exact> Home </router-link> </li>
          <li> <router-link to="/about" exact> About </router-link> </li>
          <li> <router-link to="/login" exact> Login </router-link> </li>
          <li> <a href="https://github.com/whoisjorge/vue-palmer/tree/master/docs" target="_blank">Docs</a> </li>
        </ul>
        <br>
        <img src="../assets/images/vue-palmer.png" alt="vue-palmer" width="290px">

  </section>
</template>


<script>
export default {
  name: 'HOME_VIEW',

  data () {
    return {
      transitionName: 'fadeInUp'
    }
  },

  mounted () {
    // enterAnim = 'fadeInDown'
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
