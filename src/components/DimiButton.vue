<script>
export default {
  name: 'DimiButton',
  props: {
    onClick: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<template>
  <button
    @click="onClick"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  border: none;
  border-radius: 25px;
  color: white;
  background-color: #ed1280;
  font-size: 1.2rem;
  font-weight: 800;
  padding: 0.8rem 2.4rem;
  margin-top: 1.2rem;
  font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
  user-select: none;
  cursor: pointer;

  &:active,
  &:focus {
    outline: none;
  }
}
</style>
