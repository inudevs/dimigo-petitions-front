<script>
export default {
  name: 'DimiMenu'
}
</script>

<template>
  <div class="menu">
    <div class="menu__item">
      분야별 청원
    </div>
    <div class="menu__item">
      추천순
    </div>
    <div class="menu__item">
      답변된 청원
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  border: 1px solid #868e96;

  &__item {
    display: flex;
    width: 100%;
    justify-content: center;
    align-content: center;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    font-size: 1.1rem;
    font-weight: 400;
    color: #868e96;
    user-select: none;
    cursor: pointer;
  }

  &__item:not(:last-of-type){
    border-right: 1px solid #868e86;
  }
}
</style>
