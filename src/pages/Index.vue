<script>
import DimiHeader from '@/components/DimiHeader'
import DimiMenu from '@/components/DimiMenu'
import FieldView from '@/components/FieldView'

export default {
  name: 'Index',
  components: {
    DimiHeader,
    DimiMenu,
    FieldView
  }
}
</script>

<template>
  <div class="page">
    <dimi-header />
    <dimi-menu />
    <div class="content">
      <field-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/*
.content {
  display: flex;
  justify-content: center;
  width: 100%;
}
*/
</style>
