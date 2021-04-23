<template>
  <div class="form-check flex">
    <label class="form-check-label ml-0 " :for="id">
      <slot>{{ label }}</slot></label>
    <input
        :id="id"
        class="form-check-input mr-3 order-first"
        v-bind="$attrs"
        type="radio"
        @change="radioValUpdate"
    />
  </div>

</template>

<script>
import form from "./form"
 
export default {
  name: "OfalosCheckbox",
  mixins: [form],
  methods: {
    radioValUpdate(e) {
      this.$emit("update:modelValue", this.val)
    }
  }
}
</script>

<style scoped>

</style>