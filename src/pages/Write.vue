<script>
import DimiHeader from '@/components/DimiHeader'

export default {
  name: 'Write',
  components: {
    DimiHeader
  },
  data () {
    return {}
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
}
</style>
