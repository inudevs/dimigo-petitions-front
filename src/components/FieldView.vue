<script>
export default {
  name: "FieldView1",
  data: function() {
    return {
      category: [
        {
          name: "궁금한 분야1"
        },
        {
          name: "궁금한 분야2"
        },
        {
          name: "궁금한 분야3"
        },
        {
          name: "궁금한 분야4"
        },
        {
          name: "궁금한 분야5"
        },
        {
          name: "궁금한 분야6"
        },
        {
          name: "궁금한 분야7"
        },
        {
          name: "궁금한 분야8"
        },
        {
          name: "궁금한 분야9"
        },
        {
          name: "궁금한 분야10"
        },
        {
          name: "궁금한 분야11"
        }
      ]
    };
  }
};
</script>

<template>
  <div class="field">
    <div class="field__title">
      <div class="mark"></div>청원 분야별 보기
    </div>
    <div class="field__category__base">
      <ul>
        <li v-for="(item, idx) in category" :key="idx" class="category__content">{{ item.name }}</li>
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
  width: 5px;
  height: 5px;
  margin-right: 6px;
  margin-bottom: 7px;
  margin-left: 6px;
  background-color: #263f73;
  vertical-align: middle;
}

.category__content {
  display: block;
  padding: 10px 20px;
  border-radius: 3px;
  float: left;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
}

.field {
  display: grid;
  overflow: hidden;
  justify-content: center;
  margin-bottom: 5em;

  &__title {
    margin-top: 3em;
    margin-left: 1em;
    font-size: 1.5em;
  }

  &__category__base {
    display: flex;
    overflow: hidden;
    width: 55em;
    flex-direction: row;
    padding: 15px;
    border: 1px solid #761010;
    margin-top: 1.5em;
    margin-right: 7em;
    margin-left: 6.5em;
  }
}
</style>
