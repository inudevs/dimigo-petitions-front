<script>
import DimiHeader from '@/components/DimiHeader'

export default {
  name: 'Post',
  components: {
    DimiHeader
  },
  data () {
    return {
      post: {
        title: '롱패딩을 입고 싶어요',
        status: true,
        likes: 3150,
        topic: '교칙',
        start: '2019-08-12',
        expire: '2019-09-15',
        author: '테**'
      }
    }
  }
}
</script>

<template>
  <div class="page">
    <dimi-header />
    <div class="content">
      <div class="post">
        <div class="post__content">
          <span class="post__status">
            - {{ post.status ? '청원진행중' : '청원종료' }} -
          </span>
          <h1 class="post__title">
            {{ post.title }}
          </h1>
          <span class="post__likes">
            참여인원: [ <strong>{{ post.likes.toLocaleString() }}</strong>명 ]
          </span>
          <div class="post__meta">
            <div class="post__meta-data">
              <span class="post__meta-field">분류</span>
              <span class="post__meta-value">
                {{ post.topic }}
              </span>
            </div>
            <div class="post__meta-data">
              <span class="post__meta-field">청원시작</span>
              <span class="post__meta-value">
                {{ post.start }}
              </span>
            </div>
            <div class="post__meta-data">
              <span class="post__meta-field">청원마감</span>
              <span class="post__meta-value">
                {{ post.expire }}
              </span>
            </div>
            <div class="post__meta-data">
              <span class="post__meta-field">청원인</span>
              <span class="post__meta-value">
                {{ post.author }}
              </span>
            </div>
          </div>
        </div>
        <div class="post__side">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  width: 100%;
  justify-content: center;
}

.post {
  border: 1px solid rgb(201, 201, 201);
  border-radius: 8px;
  width: 80%;
  display: flex;

  &__content {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 0;
  }

  &__side {
    flex-shrink: 0;
    width: 20rem;
    border-left: 1px solid rgb(201, 201, 201);
  }

  &__status {
    font-size: 1.2rem;
    font-weight: 300;
    color: rgb(102, 102, 102);
    margin-bottom: 0.5rem;
  }

  &__title {
    margin: 0;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  &__likes {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;

    strong {
      color: #ed1280;
    }
  }

  &__meta {
    width: 80%;
    border: 1px solid #868e96;
    padding: 0.8rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: rgb(233, 233, 233);
    display: flex;
    justify-content: space-between;
  }

  &__meta-field {
    font-weight: 600;
    margin-right: 0.5rem;
  }

  &__meta-value {
    font-weight: 300;
  }
}
</style>
