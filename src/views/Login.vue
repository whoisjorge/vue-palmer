<template>
  <section id="login" class="content">
    <h2> Welcome back, <strong>friend</strong> </h2>

      <div class="columns">

        <div class="column">
          <div class="box">
            <!-- LOGIN -->
            <div class="field">
              <p class="control has-icons-left">
                <input class="input" type="email" placeholder="Email">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-text-right">
                <button class="button is-primary is-outlined"
                        @click="$event.target.classList.add('is-loading')">
                  Login
                </button>
              </p>
            </div>
            <hr>
          </div>
        </div>



        <div class="is-divider-vertical is-mobile" data-content="OR"></div>


        <!-- Auth Buttons -->
        <div class="column">
            <FirebaseAuth />
        </div>


      </div> <!-- .columns -->
    
    <!-- <div class="signup tile">
      <p>Need an account?</p> 
      <router-link to="signup"> Sign the fuck up! </router-link> 
    </div> -->

    <h3>Need an account? <strong>create one</strong></h3>


  </section>
</template>

<script>
import FirebaseAuth from '@/components/FirebaseAuth'

export default {
  name: 'Login',
  components: {
    FirebaseAuth
  },
  methods: {
    isLoading () { this.isActive = !this.isActive }
  }
}
</script>


<style lang="sass" scoped>
@import '~bulma/sass/utilities/_all';

#login
    max-width: 800px
    margin: 0 auto
    padding: 20px 20px 150px 20px
    position: relative
    +mobile
        max-width: 500px



.content
    margin-top: 2rem
    
    h2 
        font-size: 2.5rem
        font-weight: 100
        text-align: center
        strong
            font-weight: 600
    h3   
        font-size: 1.25rem       
        font-weight: 100
        text-align: center

    .box
        // margin-top: 1.5rem

    .box 
        border-radius: 0
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)


.signup
    text-align: center
    justify-content: center
    p 
        margin-right: 0.5rem
        +mobile
            margin-right: 0


// Divider (https://github.com/Wikiki/bulma-divider)
$divider-background-color: $grey-lighter !default
$divider-font-size: $size-7 !default
$divider-color: $grey-light !default

.is-divider, .is-divider-vertical
    display: block
    position: relative

.is-divider[data-content]::after, .is-divider-vertical[data-content]::after
    background: #fafafa
    color: $divider-color
    content: attr(data-content)
    display: inline-block
    font-size: $divider-font-size
    padding: 0 .8rem
    transform: translateY(-1.1rem)
    text-align: center

.is-divider
    border-top: .1rem solid $divider-background-color
    height: .1rem
    margin: 2rem 0
    text-align: center
    +tablet
        display: none

.is-divider-vertical
    display: block
    padding: 8rem 2rem
    position: relative
    &::before
        border-left: .1rem solid $divider-background-color
        bottom: 1rem
        content: ""
        display: block
        left: 50%
        position: absolute
        top: 1rem
        transform: translateX(-50%)
    &[data-content]::after
        left: 50%
        padding: .4rem 0
        position: relative
        top: 50%
        transform: translate(-50%, -50%)

    // Responsive
    +mobile
      
</style>
