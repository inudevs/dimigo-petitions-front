<script>
export default {
  name: 'DimiInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
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
  },
  methods: {
    emitEnter () {
      this.$emit('enter')
    }
  }
}
</script>

<template>
  <input
    v-model="innerValue"
    :type="type"
    :placeholder="placeholder"
    @keyup.enter="emitEnter"
  >
</template>

<style lang="scss" scoped>
input {
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
