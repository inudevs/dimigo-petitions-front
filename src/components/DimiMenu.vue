<script>
export default {
  name: 'DimiMenu',
  props: {
    menu: {
      type: Array,
      default: function () {
        return [
          { name: '최신순 청원', value: 'topic' },
          { name: '추천순 청원', value: 'best' },
          { name: '답변순 청원', value: 'answer' }
        ]
      }
    }
  },
  data () {
    return {
      tab: 0
    }
  },
  methods: {
    onClick (item) {
      if (item.onClick) return item.onClick()
      this.$emit('click', item.value)
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
      :class="{ selected: (idx === tab) }"
      @click="onClick(item)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-around;
  // border: 1px solid #868e96;

  &__item {
    display: flex;
    width: 100%;
    align-content: center;
    justify-content: center;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    color: #868e96;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 700;
    user-select: none;
    border-bottom: 3px solid transparent;
  }

  &__item.selected {
    color: #e00070;
    border-bottom: 3px solid #e00070;
  }

  // &__item:not(:last-of-type) {
  //   border-right: 1px solid #868e86;
  // }
}

a {
  color: #868e86;
  text-decoration: none;
}
</style>
