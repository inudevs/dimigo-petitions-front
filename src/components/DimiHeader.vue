<script>
// import DimiNavbar from '@/components/DimiNavbar'

export default {
  name: 'DimiHeader',
  // components: {
  //   DimiNavbar
  // },
  // data () {
  //   return {
  //     width: 0
  //   }
  // },
  // mounted () {
  //   this.updateMobile()
  // },
  // created () {
  //   window.addEventListener('resize', this.updateMobile)
  // },
  // destroyed () {
  //   window.removeEventListener('resize', this.updateMobile)
  // },
  computed: {
    // mobile () {
    //   return this.width <= 500
    // },
    headerStyle () {
      return {
        backgroundImage:
        // `linear-gradient(rgba(0, 0, 0, .01), rgba(0, 0, 0, ${this.mobile ? '0.5' : '.01'})), url('${require('../assets/hakbong.jpeg')}')`
        `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url('${require('../assets/hakbong.jpeg')}')`
      }
    }
  },
  methods: {
    updateMobile () {
      this.width = this.$parent.$el.offsetWidth
    }
  }
}
</script>

<template>
  <div
    class="header"
    :style="headerStyle"
  >
    <div class="header__top">
      <div class="header__top-content">
        <a href="/">
          <img class="header__logo" src="../assets/logo.svg">
        </a>
      </div>
    </div>
    <div class="header__content">
      <h1 class="header__title">
        바꾸고 싶은 것이 있나요?
      </h1>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 25em;
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: cover;
  vertical-align: middle;

  &__top {
    position: absolute;
    top: 0;
    width: 80%;
    height: 5rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    box-shadow: 10px 10px 25px -1px rgba(0, 0, 0, .06);

    &-content {
      width: 90%;
    }
  }

  &__logo {
    height: 10em;
    cursor: pointer;

    @media (max-width: 500px) {
      height: 8em;
    }
  }

  &__content {
    position: relative;
    height: 100%;
    width: 80%;
  }

  &__title {
    position: absolute;
    bottom: 1.5rem;
    margin: 0;
    color: #fff;
    font-size: 3rem;
    font-weight: 600;

    @media (max-width: 500px) {
      left: 1.5rem;
    }
  }
}

.navbar {
  bottom: 0;
  margin-top: 2em;
}
</style>
