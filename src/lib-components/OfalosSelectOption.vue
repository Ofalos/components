<template>
  <li :class="['form-select-option']" role="option" @click="handleSelect">
    <slot>
      {{ value }}
    </slot>
  </li>
</template>

<script>
export default {
  name: "OfalosSelectOption",
  props: {
    value: String
  },
  computed: {
    isSelected () {
      return ["", "true", true].includes(this.selected)
    },
    val () {
      if (this.value) {
        return this.value
      } else {
        return this.$slots.default()[0].el.nodeValue
      }
    }
  },
  methods: {
    handleSelect (e) {
      this.$emit('selected', this.value, e)
    }
  }
}
</script>

<style scoped>

</style>