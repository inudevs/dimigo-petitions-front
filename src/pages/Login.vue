<script>
import DimiButton from '../components/DimiButton'
import DimiCard from '../components/DimiCard'
import DimiInput from '../components/DimiInput'

export default {
  name: 'Login',
  components: {
    DimiButton,
    DimiCard,
    DimiInput
  },
  props: {
    redirect: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      enter: false,
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async onClickLogin () {
      try {
        console.log(this.form)
        const { data } = await this.$api.post('http://api.inudevs.com/auth/login', this.form)
        this.$store.commit('login', data)
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
  <div class="login">
    <div class="login__content">
      <section class="login__image-wrap">
        <img
          class="login__image"
          :src="require('../assets/login-cover.jpg')"
        >
      </section>
      <section class="login__section">
        <div class="login__section-content">
          <div class="login__main">
            <div
              v-if="!enter"
              class="login__info"
            >
              <h1 class="login__title">
                디미청원
              </h1>
              <p class="login__desc">
                한국디지털미디어고등학교 교내 건의함 서비스
              </p>
              <dimi-button :onClick="() => enter = true">
                ENTER
              </dimi-button>
            </div>
            <div
              v-else
              class="login__form"
            >
              <div class="login__form-content">
                <dimi-input
                  class="login__input"
                  v-model="form.email"
                  placeholder="디미고 아이디"
                />
                <dimi-input
                  class="login__input"
                  v-model="form.password"
                  placeholder="패스워드"
                  type="password"
                />
              </div>
              <dimi-button
                :onClick="onClickLogin"
              >
                LOGIN
              </dimi-button>
            </div>
          </div>
          <div class="login__cards">
            <dimi-card class="login__card">
              <h1>매점 운영 시간을 연장해 주세요</h1>
              <span>
                <span class="value">300</span>명
              </span>
            </dimi-card>
            <dimi-card class="login__card">
              <h1>야외 점호를 폐지합시다</h1>
              <span>
                <span class="value">300</span>명
              </span>
            </dimi-card>
            <dimi-card class="login__card">
              <h1>인강실 사용 제한을 없애주세요</h1>
              <span>
                <span class="value">300</span>명
              </span>
            </dimi-card>
          </div>
        </div>
        <div class="login__contributors">
          <span class="inu">© INU 2019</span>
          <strong>개발</strong> 여준호 문형일 장종우
          <strong>디자인</strong> 김한경 박승아
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  height: 100%;
  margin: 0;

  &__content {
    height: -webkit-fill-available;
    padding-top: 0;
    padding-bottom: 0;
    height: -webkit-fill-available;
    display: flex;
    flex-direction: row;

    @media (max-width: 400px) {
      flex-direction: column;
    }
  }

  &__image-wrap {
    height: 100%;
    width: 35%;

    @media (max-width: 630px) {
      width: 25%;
    }

    @media (max-width: 400px) {
      margin-bottom: 2rem;
    }

    img {
      height: 100vh;
      width: 100%;
      object-fit: cover;
      object-position: center;

      @media (max-width: 400px) {
        display: none;
      }
    }
  }

  &__section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-content {
      width: 95%;
      display: flex;
      justify-content: space-evenly;

      @media (max-width: 1000px) {
        width: 80%;
        flex-direction: column;
      }
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;

    @media (max-width: 1000px) {
      width: unset;
    }
  }

  &__title {
    margin: 0;
    font-size: 5.2rem;
    letter-spacing: 4px;
    font-weight: 900;

    @media (max-width: 1150px) {
      font-size: 4rem;
    }

    @media (max-width: 600px) {
      font-size: 3.5rem;
    }

    @media (max-width: 400px) {
      font-size: 3rem;
    }
  }

  &__desc {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 300;
    word-break: keep-all;

    @media (max-width: 630px) {
      font-size: 1.1rem;
    }
  }

  &__cards {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-top: 1.5rem;

    @media (max-width: 1000px) {
      width: unset;
    }
  }

  &__card {
    margin-bottom: 0.8rem;
  }

  &__contributors {
    position: absolute;
    bottom: 3rem;
    right: 3rem;
    font-weight: 400;
    color: #aaa;

    @media (max-width: 400px) {
      position: unset;
      width: 100%;
      text-align: center;
      margin: 1rem 0;
      font-size: 0.8rem;
    }

    span {
      margin-right: 0.5rem;
    }

    strong {
      font-weight: 500;
      color: #888;
    }
  }

  &__input {
    margin-top: 0.8rem;
    width: 80%;

    @media (max-width: 400px) {
      width: unset;
    }
  }

  &__form {

    &-content {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
