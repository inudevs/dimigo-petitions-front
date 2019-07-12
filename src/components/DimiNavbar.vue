<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li
        v-for="(item, idx) in menu"
        :key="idx"
        class="navbar__item"
      >
        <a
          :href="item.href"
          class="navbar__link"
          target="_black"
        >
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data:
    function () {
      return {
        menu: [
          {
            name: '디미고인',
            href: 'https://dimigo.in/'
          },
          {
            name: '디미고라이프',
            href: 'https://dimigo.life/'
          },
          {
            name: '베네듀',
            href: 'https://benedu.co.kr/'
          },
          {
            name: '학교 홈페이지',
            href: 'https://www.dimigo.hs.kr/'
          },
          {
            name: '커뮤니티',
            href: null
          },
          {
            name: 'INU',
            href: 'https://inudevs.github.io/'
          }
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
  &__list {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.65);
    list-style-type: none;
  }

  &__item {
    padding: 1em;
    padding-right: 2.5em;
    cursor: pointer;
    float: right;
  }

  &__item:last-child {
    margin-right: 1em;
  }

  &__link {
    text-align: center;
    text-decoration: none;
    color: white;
  }

  @media (max-width: 700px) {
  }
}
</style>
