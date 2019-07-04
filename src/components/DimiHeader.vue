<script>
import DimiNavbar from '@/components/DimiNavbar'

export default {
  name: 'DimiHeader',
  components: {
    DimiNavbar
  }
}
</script>

<template>
  <div
    class="header"
    :style="{
      backgroundImage:
      'linear-gradient(rgba(0, 0, 0, .01), rgba(0, 0, 0, .01)), url('+require('../assets/hakbong.jpg')+')'
    }"
  >
    <dimi-navbar />
    <h1 class="header__title">
      디미청원
    </h1>
  </div>
</template>

<style lang="scss">
.header {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
  height: 25em;

  &__title {
    margin: 0;
    position: absolute;
    left: 2rem;
    bottom: 1.5rem;
    font-size: 3rem;
    color: white;
  }
}

.navbar {
  margin-top: 2em;
  bottom: 0;
}
</style>
