<script>
export default {
  name: 'DimiCard',
  props: {
    image: {
      type: String
    }
  }
}
</script>

<template>
  <div class="card">
    <img :src="require('../assets/hakbong.jpeg')" />
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: 4.8rem;
  width: 100%;
  margin-bottom: 0.8rem;
  background-color: white;
  border-radius: 20px;
  color: black;
  padding: 1rem;
  display: flex;
  align-items: center;
  box-shadow: 10px 10px 25px -1px rgba(0, 0, 0, .06);

  @media (max-width: 1000px) {
    width: unset;
  }

  @media (max-width: 630px) {
    padding: 0.6rem;
  }

  img {
    height: 4rem;
    width: 4rem;
    border-radius: 20px;
    box-shadow: 10px 10px 25px -1px rgba(0, 0, 0, .06);
    margin-right: 1.2rem;
  }

  h1 {
    margin: 0;
    margin-bottom: 0.2rem;
    width: 100%;
    word-break: keep-all;
    font-size: 1.3rem;

    @media (max-width: 630px) {
      font-size: 1.1rem;
    }

    @media (max-width: 380px) {
      font-size: 1rem;
    }

    @media (max-width: 360px) {
      font-size: 0.9rem;
    }
  }

  span {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);

    &.value {
      color: #ed1280;
    }
  }
}
</style>
