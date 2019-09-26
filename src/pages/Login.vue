<script>
export default {
  name: 'Login',
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
        this.$store.commit('saveID', data.id)
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
    <div class="content">
      <div class="card-wrap">
        <div class="card">
          <div class="login">
            <h1 class="login__title">
              <span class="login__brand">디미청원</span>에 로그인
            </h1>
            <p class="login__desc">
              디미청원은 한국디지털미디어고등학교 학생회와 자율동아리 INU가 함께 운영하는 <strong>교내 학생 건의함</strong> 서비스입니다.
            </p>
            <ul class="login__notice">
              <li>청원에 동의하려면 <strong>로그인</strong>이 필요합니다. 디미고 계정의 아이디 또는 이메일로 로그인해 주세요.</li>
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
          <img
            class="image"
            :src="require('../assets/login-cover.jpg')"
          />
        </div>
        <span class="footer">ⓒ INU 2019</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  height: auto;
  margin: 0;
  background: linear-gradient(to top, #ed1280, #db4a92);

  @media (min-height: 767px) {
    height: inherit;
  }
}

.content {
  height: -webkit-fill-available;
  padding-top: 0;
  padding-bottom: 0;
}

.card-wrap {
  height: -webkit-fill-available;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 800px) {
    height: unset;
  }
}

.card {
  max-width: 65rem;
  min-height: 40rem;
  box-shadow: 15px 19px 32px -18px rgba(21, 19, 19, .07);
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    width: 95%;
    flex-direction: column;
  }

  @media (max-width: 800px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}

.login {
  width: 50%;
  padding: 2rem;

  @media (max-width: 800px) {
    padding: 1.2rem;
    padding-top: 2rem;
    width: unset;
  }

  &__title {
    margin: 0;
    font-size: 2.5rem;
    display: inline-block;
    word-break: keep-all;
    margin-bottom: 1rem;

    @media (max-width: 1000px) {
      font-size: 2.2rem;
    }

    @media (max-width: 800px) {
      font-size: 1.8rem;
    }
  }

  &__brand {
    color: #ed1280;
  }

  &__desc {
    margin: 0;
    font-size: 1.1rem;
    display: inline-block;
    word-break: keep-all;

    @media (max-width: 800px) {
      margin-top: 0.5rem;
      font-size: 0.9rem;
    }
  }

  &__notice {
    list-style: none;
    padding: 0;
    font-weight: 300;
    line-height: 1.5;
    font-size: 1.1rem;

    li {
      display: inline-block;
      word-break: keep-all;
      border-left: 5px solid lightgray;
      color: gray;
      padding-left: 0.5rem;
      margin-bottom: 0.7rem;
    }

    li strong {
      font-weight: 500;
    }

    @media (max-width: 800px) {
      font-size: 0.88rem;
    }
  }

  &__input {
    width: 100%;
    font-size: 1.2rem;
    padding: 0.8rem;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    box-sizing: border-box;
    margin-bottom: 1.2rem;
    border-radius: 25px;
    border: 0;
    background-color: rgb(241, 241, 241);
    box-shadow: 15px 19px 32px -18px rgba(21, 19, 19, .07);

    &:focus {
      outline: none;
    }

    @media (max-width: 800px) {
      font-size: 1rem;
    }
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
    margin-top: 1rem;
    border-radius: 25px;
    border: 0;
    box-shadow: 15px 19px 32px -18px rgba(21, 19, 19, .07);

    @media (max-width: 800px) {
      font-size: 1.1rem;
      padding: 0.8rem 0;
      margin-bottom: 1rem;
    }
  }
}

.image {
  width: 50%;
  object-fit: cover;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  @media (max-width: 800px) {
    width: 100%;
    height: 15rem;
  }
}

.footer {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: white;

  @media (max-width: 800px) {
    margin-top: -1rem;
    margin-bottom: 1.5rem;
  }
}
</style>
