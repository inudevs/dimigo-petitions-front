<script>
import DimiHeader from '@/components/DimiHeader'
import DimiMenu from '@/components/DimiMenu'

export default {
  name: 'Petitions',
  components: {
    DimiHeader,
    DimiMenu
  }
}
</script>

<template>
  <div class="page">
    <dimi-header />
    <dimi-menu />
    <div class="content">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
