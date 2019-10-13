<script>
export default {
  name: 'DimiLongCard',
  props: {
    image: {
      type: String
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<template>
  <div
    class="card"
    @click="onClick"
  >
    <img :src="require('../assets/hakbong.jpeg')" />
    <div class="card-content">
      <div class="card-main">
        <slot name="main" />
      </div>
      <div class="card-side">
        <slot name="side" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  margin-bottom: 0.8rem;
  background-color: white;
  border-radius: 20px;
  color: black;
  padding: 1rem;
  display: flex;
  align-items: center;
  box-shadow: 10px 10px 25px -1px rgba(0, 0, 0, .06);

  img {
    height: 4rem;
    width: 4rem;
    border-radius: 20px;
    box-shadow: 10px 10px 25px -1px rgba(0, 0, 0, .06);
    margin-right: 1.2rem;
  }

  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: -webkit-fill-available;
  }
}
</style>
