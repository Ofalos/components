<template>
  <li :class="['form-select-option', {selected: isSelected}]" role="option" @click="handleSelect">
    <slot>
      {{ value }}
    </slot>
  </li>
</template>

<script>
export default {
  name: "OfalosSelectOption",
  props: {
    value: String,
    selected: [String, Boolean]
  },
  computed: {
    isSelected () {
      return ["", true].includes(this.selected)
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
    handleSelect () {
      this.$emit('selected', this.val)
    }
  }
}
</script>

<style scoped>

</style>