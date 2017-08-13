<template>
<section class="login">
</section>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        loginForm: {
          email: 'admin@mail.com',
          password: ''
        },
        loginRules: {
          email: [
                { required: true, trigger: 'blur' }
          ],
          password: [
                { required: true, trigger: 'blur' }
          ]
        },
        loading: false,
        showDialog: false
      }
    }
  }
</script>

<style lang="scss">
</style>
