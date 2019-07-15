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
  },
  methods: {
    onClickProceeding () {

    },
    onClickExpired () {

    }
  }
}
</script>

<template>
  <div class="page">
    <dimi-header />
    <dimi-menu />
    <div class="content">
      <field-view />
      <dimi-menu
        :menu="[
          { name: '진행중 청원', onClick: onClickProceeding },
          { name: '만료된 청원', onClick: onClickExpired }
        ]"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  width: 100%;
  flex-direction: column;
}
</style>
