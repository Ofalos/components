<template>
  <div class="form-check flex">
    <label class="form-check-label ml-0 " :for="id">
      <slot>{{ val }}</slot>
    </label>
    <!-- $emit('update:checkedOption', $event.target.value) -->
    <input
      :id="id"
      @input="updateChecked"
      class="form-check-input mr-3 order-first"
      type="checkbox"
    />
  </div>
</template>

<script>
import form from "./form";

export default {
  name: "OfalosCheckbox",
  mixins: [form],
  props: {
    modelValue: [Array, String, Boolean],
    value: String
  },
  methods: {
    updateChecked(event) {
      let isChecked = event.target.checked
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]
        if (isChecked) {
          newValue.push(this.val)
        } else {
          newValue.splice(newValue.indexOf(this.val), 1)
        }
        this.$emit('update:modelValue', newValue)
      } else {
        this.$emit('update:modelValue', isChecked)
      }
    },
  }
};
</script>

<style scoped>
</style>