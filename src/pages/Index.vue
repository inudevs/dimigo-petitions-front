<script>
import DimiHeader from '@/components/DimiHeader'
import DimiMenu from '@/components/DimiMenu'
import FieldView from '@/components/FieldView'
import FieldView2 from '@/components/FieldView2'

export default {
  name: 'Index',
  components: {
    DimiHeader,
    DimiMenu,
    FieldView,
    FieldView2
  }
}
</script>

<template>
  <div class="page">
    <dimi-header />
    <dimi-menu />
    <div class="content">
      <field-view />
      <field-view2 />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
