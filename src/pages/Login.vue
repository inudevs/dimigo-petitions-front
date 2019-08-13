<script>
import DimiHeader from '@/components/DimiHeader'

export default {
  name: 'Login',
  components: {
    DimiHeader
  },
  props: {
    redirect: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      form: {
        id: '',
        password: ''
      }
    }
  },
  methods: {
    async onClick () {
      try {
        console.log(this.form)
        const { data } = await this.$api.post('/auth/login', this.form)
        console.log(data)
        this.$store.commit('login', data.token)
        if (this.redirect) this.$router.push(this.redirect)
        else this.$router.push({ name: 'index' })
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<template>
  <div class="page">
    <dimi-header />
    <div class="content">
      <div class="login">
        <h1 class="login__title">
          로그인
        </h1>
        <ul class="login__desc">
          <li>청원에 동의하려면 로그인이 필요합니다. 디미고 아이디로 로그인해 주세요.</li>
          <li>디미고 아이디를 분실하신 경우, 교내 인트라넷 관리자나 선생님께 문의하세요.</li>
        </ul>
        <div class="login__form">
          <input
            class="login__input"
            v-model.trim="form.id"
            placeholder="디미고 아이디"
          />
          <input
            type="password"
            class="login__input"
            v-model.trim="form.password"
            placeholder="패스워드"
            @keydown.enter="onClick"
          />
          <div
            class="login__button"
            @click="onClick"
          >
            동의하러 가기
          </div>
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

.login {
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

  &__desc {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    width: 60%;
    box-sizing: border-box;
    border: 1px solid #868e96;
    padding: 0.8rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: rgb(233, 233, 233);
  }

  &__form {
    width: 60%;
  }

  &__input {
    width: 100%;
    font-size: 1.2rem;
    padding: 0.5rem;
    box-sizing: border-box;
    margin-bottom: 0.5rem;
    border: 1px solid #868e96;
  }

  &__button {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #ed1280;
    font-size: 1.2rem;
    padding: 1rem 0;
  }
}
</style>
