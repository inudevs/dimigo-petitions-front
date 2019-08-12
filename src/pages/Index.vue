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
      // 진행중 청원 클릭 시

    },
    onClickExpired () {
      // 만료된 청원 클릭 시

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
      <div class="index__list">
        <div class="index__table">
          <div class="index__row head">
            <div class="index__cell head">번호</div>
            <div class="index__cell head">카테고리</div>
            <div class="index__cell head">제목</div>
            <div class="index__cell head">청원 만료일</div>
            <div class="index__cell head">참여인원</div>
          </div>
          <div class="index__row">
            <div class="index__cell">1</div>
            <div class="index__cell">교칙</div>
            <div class="index__cell">롱패딩을 입고 싶어요</div>
            <div class="index__cell">2019-09-15</div>
            <div class="index__cell">3,150명</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index {

  &__table {
    display: flex;
    flex-direction: column;
  }

  &__row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid rgb(230, 230, 230);

    &.head {
      margin-top: 1.5rem;
      border-top: 2px solid black;
    }
  }

  &__cell {
    display: flex;
    color: rgb(46, 46, 46);
    padding: 1.2rem 1rem;
    font-size: 1.1rem;

    &.head {
      justify-content: center;
      padding: .8rem 1rem;
      color: black;
      font-size: 1.2rem;
    }

    &.head:not(:nth-child(2)) {
      font-weight: 300;
    }

    &:nth-child(2):not(.head) {
      color: #ed1280;
    }

    &:nth-child(3) {
      width: 40%;
    }

    &:nth-child(4):not(.head) {
      color: #868e96;
    }

    &:last-child:not(.head) {
      color: #ed1280;
    }
  }
}
</style>
