<script>
export default {
  name: 'FieldView1',
  data: function () {
    return {
      category: [
        {
          name: '궁금한 분야1'
        },
        {
          name: '궁금한 분야2'
        },
        {
          name: '궁금한 분야3'
        },
        {
          name: '궁금한 분야4'
        },
        {
          name: '궁금한 분야5'
        },
        {
          name: '궁금한 분야6'
        },
        {
          name: '궁금한 분야7'
        },
        {
          name: '궁금한 분야8'
        },
        {
          name: '궁금한 분야9'
        },
        {
          name: '궁금한 분야10'
        },
        {
          name: '궁금한 분야11'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="field">
    <div class="field__title">
      <div class="mark"></div>청원 분야별 보기
    </div>
    <div class="field__categories">
      <ul>
        <li
          v-for="(item, idx) in category"
          :key="idx"
          class="field__category"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  padding: 0;
  margin: 0;
}

.mark {
  display: inline-block;
  background-color: #263f73;
  vertical-align: middle;
}

.field {
  overflow: hidden;
  justify-content: center;
  margin-bottom: 1.5rem;

  &__title {
    margin-bottom: 1rem;
    font-size: 2em;
    font-weight: 500;
  }

  &__categories {
    display: flex;
    overflow: hidden;
    flex-direction: row;
    padding: 1.2rem;
    border: 1px solid #761010;
    margin-right: 5rem;
    margin-left: 5rem;
  }

  &__category {
    display: block;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    float: left;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
  }
}
</style>
