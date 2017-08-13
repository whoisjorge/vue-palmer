<template>
  <main class="viewport">
    <transition
        :mode="modeAnim"
        :enter-active-class="enterAnim"
        :leave-active-class="leaveAnim"
        appear>

      <router-view class="router-view animated"></router-view>
      
    </transition>

    <!-- <pre>{{ $data }}</pre> -->
  </main>
</template>


<script>
export default {
  data () {
    return {
      modeAnim: 'out-in',
      enterAnim: 'fadeInUp',
      leaveAnim: 'fadeOutUp'
    }
  }
}
</script>


<style lang="scss">
</style>
