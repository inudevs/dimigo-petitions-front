<script>
import DimiButton from '@/components/DimiButton'
import DimiHeader from '@/components/DimiHeader'
import DimiLongCard from '@/components/DimiLongCard'
import DimiMenu from '@/components/DimiMenu'

export default {
  name: 'Index',
  components: {
    DimiButton,
    DimiLongCard,
    DimiHeader,
    DimiMenu
  },
  methods: {
    onClickMenu (value) {
      console.log(value)
    }
  },
  data () {
    return {
      tab: 0,
      list: []
    }
  },
  async created () {
    try {
      const { data } = await this.$api.get('/posts/')
      console.log(data)
      this.list = data.posts
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<template>
  <div class="page">
    <dimi-header />
    <dimi-menu @click="onClickMenu" />
    <div class="content">
      <div class="index__list">
        <div class="index__head">
          <div class="index__head-content">
            <h1 class="index__title">{{ ['진행중인 청원', '이미 만료된 청원'][tab] }}</h1>
            <p>학교와 학생회에 여러분의 의견을 전달하세요.</p>
          </div>
          <dimi-button
            class="index__button"
            :onClick="() => $router.push({ name: 'write' })"
          >
            학교에 청원하기
          </dimi-button>
        </div>
        <div class="index__table">
          <dimi-long-card
            class="index__card"
            v-for="(item, idx) in list"
            :key="idx"
            :onClick="() => $router.push({ name: 'post', params: { id: item.id } })"
          >
            <template slot="main">
              <div class="index__card-main">
                <span class="index__card-row">
                  <span class="index__card-idx">
                    #{{ item.idx }}
                  </span>
                  <span class="index__card-topic">
                    {{ item.topic }}
                  </span>
                </span>
                <h1>{{ item.name }}</h1>
              </div>
            </template>
            <template slot="side">
              <div class="index__card-side">
                <span class="index__card-expire">
                  {{ item.expire }}까지
                </span>
                <span class="index__card-likes">
                  현재 동의 수 <span class="value">{{ item.likes.toLocaleString() }}</span>명
                </span>
              </div>
            </template>
          </dimi-long-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index {

  // &__list {
  //   margin-top: 1.5rem;
  // }

  &__head {
    margin-bottom: 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__title {
    font-size: 1.8rem;
  }

  &__button {
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
    font-weight: 700;
  }

  &__table {
    display: flex;
    flex-direction: column;
  }

  &__card {
    transition: 0.5s;

    &-main,
    &-side {
      display: flex;
      flex-direction: column;
    }

    &-row {
      font-weight: 500;
      margin-bottom: 0.2rem;
    }

    &-topic {
      color: #ed1280;
    }

    &-expire {
      color: rgba(0, 0, 0, 0.7);
    }

    &-likes {
      font-weight: bold;
      color: rgba(0, 0, 0, 0.7);

      .value {
        font-size: 1.5rem;
        color: #ed1280;
      }
    }

    &:hover {
      transform: scale(1.02);
    }
  }
}
</style>
