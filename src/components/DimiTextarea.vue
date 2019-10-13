<script>
export default {
  name: 'DimiTextarea',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      innerValue: this.value
    }
  },
  watch: {
    value (v) {
      this.innerValue = v
    },
    innerValue (v) {
      this.$emit('input', v)
    }
  }
}
</script>

<template>
  <textarea
    v-model="innerValue"
    :placeholder="placeholder"
  />
</template>

<style lang="scss" scoped>
textarea {
  background-color: #fae7f1;
  border: none;
  border-radius: 24px;
  font-size: 1.1rem;
  padding: 1rem 1.2rem;

  &:active,
  &:focus {
    outline: none;
  }
}
</style>
