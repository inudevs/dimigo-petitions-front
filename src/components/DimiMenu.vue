<script>
export default {
  name: 'DimiMenu',
  props: {
    menu: {
      type: Array,
      default: function () {
        return [
          { name: '분야별 청원', href: '/' },
          { name: '추천순 청원', href: '/best' },
          { name: '답변순 청원', href: '/answer' }
        ]
      }
    }
  }
}
</script>

<template>
  <div class="menu">
    <div
      class="menu__item"
      v-for="(item, idx) in menu"
      :key="idx"
    >
      <a
        v-if="item.href"
        :href="item.href"
      >
        {{ item.name }}
      </a>
      <span
        v-else
        @click="item.onClick"
      >
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid #868e96;

  &__item {
    display: flex;
    width: 100%;
    align-content: center;
    justify-content: center;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    color: #868e96;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 400;
    user-select: none;
  }

  &__item:not(:last-of-type) {
    border-right: 1px solid #868e86;
  }
}

a {
  color: #868e86;
  text-decoration: none;
}
</style>
