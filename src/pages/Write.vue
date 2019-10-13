<script>
import DimiButton from '../components/DimiButton'
import DimiHeader from '@/components/DimiHeader'
import DimiInput from '../components/DimiInput'
import DimiTextarea from '../components/DimiTextarea'

export default {
  name: 'Write',
  components: {
    DimiButton,
    DimiHeader,
    DimiInput,
    DimiTextarea
  },
  data () {
    return {
      post: {
        name: '',
        content: '',
        image: '',
        topic: ''
      }
    }
  },
  methods: {
    async onClickSubmit () {
      try {
        const { data: { post_id: id } } = await this.$api.post('/posts/', this.post)
        await this.$swal('청원을 등록했습니다!', '청원 페이지로 이동합니다.', 'success')
        this.$router.push({ name: 'post', params: { id } })
      } catch (error) {
        await this.$swal('에러!', error.message, 'error')
      }
    }
  }
}
</script>

<template>
  <div class="page">
    <dimi-header />
    <div class="content">
      <div class="write">
        <h1 class="write__title">
          청원하기
        </h1>
        <div class="write__form">
          <dimi-input v-model="post.name" placeholder="제목" />
          <dimi-textarea v-model="post.content" placeholder="내용" />
          <dimi-input v-model="post.image" placeholder="이미지 URL" />
          <dimi-input v-model="post.topic" placeholder="분류" />
        </div>
        <dimi-button :onClick="onClickSubmit">
          WRITE
        </dimi-button>
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

.write {
  border: 1px solid rgb(201, 201, 201);
  border-radius: 8px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  &__title {
    margin: 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid #868e96;
  }

  &__form {
    width: 80%;
    display: flex;
    flex-direction: column;

    input,
    textarea {
      margin-top: 0.8rem;
    }
  }
}
</style>
