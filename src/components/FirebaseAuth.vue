<template>
  <div id="firebaseui-auth-container" />
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import { ui } from '../app/firebase'

// Configuration
const uiConfig = {
  signInSuccessUrl: '/account',
  callbacks: {
    // Called when the user has been successfully signed in
    signInSuccess (user, credential, redirectUrl) {
      // router.push('/')
      // Do not redirect.
      return false
    }
  },
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  // Opens IDP Providers sign-in flow in a popup
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.TwitterAuthProvider.PROVIDER_ID
    },
    {
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      scopes: [
        'public_profile',
        'email'
        // 'user_likes',
        // 'user_friends'
      ]
    },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: ['https://www.googleapis.com/auth/plus.login']
    }
  ]
}

export default {
  name: 'FirebaseAuth',

  mounted () {
    ui.start('#firebaseui-auth-container', uiConfig)
  },
  computed: {
    ...mapState(['user'])
  },
  // Redirect users
  watch: {
    user (val) {
      if (val) {
        if (this.$router.currentRoute.query.redirect) {
          this.$router.replace(this.$router.currentRoute.query.redirect)
        } else {
          this.$router.replace('/login')
        }
      }
    }
  }
}
</script>



<style lang="sass">
/**
 * Firebase UI
 *
 * for more information about this library, please visit 
 * source at: https://github.com/firebase/firebaseui-web
 */
@import '~firebaseui/dist/firebaseui.css'


ul.firebaseui-idp-list 
    margin: 0
    list-style-type: none

.firebaseui-card-content
    padding: 0 5px



.firebaseui-container
    max-width: 768px

.firebaseui-idp-button
    font-weight: 100
    max-width: 768px
    line-height: 36px
    span
        text-align: center

.firebaseui-idp-google>.firebaseui-idp-text
    color: #363636
</style>
