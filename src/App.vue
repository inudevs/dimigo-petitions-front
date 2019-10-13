<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700,900&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,900&display=swap');

* {
  font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
}

.page {
  margin-bottom: 2rem;
}
</style>
