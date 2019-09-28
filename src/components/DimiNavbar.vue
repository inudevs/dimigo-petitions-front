<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li
        class="navbar__item navbar__logout"
        @click="logout"
      >
        로그아웃
      </li>
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
  data () {
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
          name: '대나무숲',
          href: 'https://bamboo.dimigo.dev'
        }
        // , {
        //   name: '커뮤니티',
        //   href: null
        // },
        // {
        //   name: 'INU',
        //   href: 'https://inudevs.github.io/'
        // }
      ]
    }
  },
  methods: {
    logout () {
      this.$store.commit('logout')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  &__list {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.65);
    list-style-type: none;

    @media (max-width: 980px) {
      height: 4rem;
    }
  }

  &__item {
    padding: 1em;
    padding-right: 2.5em;
    cursor: pointer;
    float: right;

    @media (max-width: 980px) {
      display: none;
    }
  }

  &__item:last-child {
    margin-right: 1em;
  }

  &__link {
    color: #fff;
    text-align: center;
    text-decoration: none;
  }

  &__logout {
    color: #fff;
  }
}
</style>
