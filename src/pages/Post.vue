<script>
import DimiHeader from '@/components/DimiHeader'

export default {
  name: 'Post',
  components: {
    DimiHeader
  },
  data () {
    return {
      post_id: this.$route.params.id,
      post: {},
      comment: ''
    }
  },
  async created () {
    await this.updatePost()
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    },
    token () {
      return this.$store.state.token
    },
    userId () {
      return this.$store.state.id
    }
  },
  methods: {
    async updatePost () {
      this.comment = ''
      console.log(this.userId, this.token)
      try {
        const { data } = await this.$api.get(`/posts/${this.post_id}`)
        console.log(data)
        this.post = data
      } catch (error) {
        console.error(error)
      }
    },
    onClickTextarea () {
      if (!this.isLogin) {
        this.$router.push({
          name: 'login',
          query: {
            redirect: this.$route.path
          }
        })
      }
    },
    async onClickComment () {
      try {
        await this.$api.post(`/comments/${this.post_id}`, {
          content: this.comment
        }, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
        this.updatePost()
      } catch (error) {
        await this.$swal('에러!', '이미 동의한 청원입니다.', 'error')
      }
    },
    async onClickDelete () {
      try {
        await this.$api.delete(`/comments/${this.post_id}`, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
        this.updatePost()
      } catch (error) {
        await this.$swal('에러!', '동의하지 않은 청원입니다.', 'error')
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
            {{ post.name }}
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
          <div class="post__article">
            <h2 class="post__desc">청원내용</h2>
            <div class="post__article-content">
              {{ post.content }}
            </div>
          </div>
          <div class="post__comments">
            <h2 class="post__desc">
              청원동의 <strong>{{ post.likes.toLocaleString() }}</strong> 명
            </h2>
            <div class="post__form">
              <textarea
                class="post__input"
                :placeholder="isLogin ? '응원의 댓글을 남겨 주세요.' : '디미고 계정으로 로그인이 필요합니다.'"
                v-model="comment"
                @click="onClickTextarea"
              />
              <div
                class="post__button"
                @click="onClickComment"
              >
                동의
              </div>
            </div>
            <div class="post__comments-list">
              <div
                class="post__comment"
                v-for="(comment, idx) in post.comments"
                :key="idx"
              >
                <span class="post__comment-author">
                  {{ comment.author }}
                  <span
                    class="post__comment-delete"
                    v-if="comment.author_id === userId"
                    @click="onClickDelete"
                  >
                    삭제
                  </span>
                </span>
                <span class="post__comment-content">
                  {{ comment.content }}
                </span>
              </div>
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

  &__desc {
    color: rgb(58, 58, 58);
    font-weight: 600;
    font-size: 1.3rem;
    padding: 0.5rem 0;
    margin: 0.5rem 0;
    border-bottom: 1px solid rgb(201, 201, 201);

    strong {
      color: #ed1280;
    }
  }

  &__article-content {
    margin: 1rem 0;
  }

  &__article {
    width: 85%;
  }

  &__comments {
    width: 85%;
  }

  &__comment {
    display: flex;
    flex-direction: column;
    padding: 1.2rem 0.5rem;
    border-bottom: 1px solid rgb(201, 201, 201);
    font-size: 1rem;
  }

  &__comment-author {
    font-weight: 600;
    color: black;
  }

  &__comment-delete {
    cursor: pointer;
    font-weight: 500;
    color: #ed1280;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  &__form {
    display: flex;
    background-color: rgb(238, 238, 238);
    padding: 1rem 1.1rem;
  }

  &__input {
    flex: 1 1;
    margin-right: 0.8rem;
    font-size: 1rem;
    padding: 0.5rem;
  }

  &__button {
    cursor: pointer;
    width: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #ed1280;
    font-size: 1rem;
    padding: 1.5rem 0.3rem;
  }
}
</style>
