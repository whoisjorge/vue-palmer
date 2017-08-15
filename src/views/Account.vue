<template>
<section id="login">
  <div class="content">

    <h2> Welcome back, <strong>friend</strong> </h2>

    <div class="columns is-marginless is-vcentered">
      <div class="column is-6 is-offset-3">
        <div class="box">
          <!-- Auth Buttons -->
          <p> This is your account profile page 👀 </p>
          <hr>
          <router-link to="/"> Back to home </router-link>
          <router-link to="/logout"> Log out! </router-link>
        </div>
      </div>
    </div>

  </div>
</section>
</template>


<script>
export default {
  name: 'ACCOUNT',

  data () {
    return {
      loginForm: {
        email: 'admin@mail.com',
        password: ''
      }
    }
  }
}
</script>

<style lang="sass" scoped>
#account

.content
    margin-top: 2rem

    h2 
        font-size: 2.5rem
        font-weight: 100
        text-align: center
        strong
            font-weight: 600

    .box 
        border-radius: 0
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
        
        text-align: center


</style>
