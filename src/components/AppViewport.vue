<template>
  <main class="viewport">
    <transition
        mode="out-in"
        :enter-active-class="transitionName"
        :leave-active-class="transitionName"
        appear>

      <router-view class="router-view animated"></router-view>

    </transition>

    <pre>{{ $data }}</pre>
  </main>
</template>


<script>
export default {
  name: 'VIEWPORT',
  data () {
    return {
      transitionName: ''
    }
  }
}
</script>


<style lang="scss">
.viewport {
}
</style>
