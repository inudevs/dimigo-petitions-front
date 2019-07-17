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
      'linear-gradient(rgba(0, 0, 0, .01), rgba(0, 0, 0, .01)), url('+require('../assets/hakbong.jpeg')+')'
    }"
  >
    <a href="/">
      <img class="header__logo" src="../assets/logo.svg">
    </a>
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
  width: 100%;
  height: 25em;
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: cover;
  vertical-align: middle;

  &__logo {
    position: absolute;
    top: 0;
    left: 3em;
    height: 10em;
    cursor: pointer;
  }

  &__title {
    position: absolute;
    bottom: 1.5rem;
    left: 8rem;
    margin: 0;
    color: #fff;
    font-size: 2.5rem;
    font-weight: 600;
  }
}

.navbar {
  bottom: 0;
  margin-top: 2em;
}
</style>
