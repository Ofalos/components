<template>
  <div class="form-check flex">
    <label class="form-check-label ml-0 " :for="id">
      <slot>{{ label }}</slot></label>
    <input
        :id="id"
        v-model="dataProxy"
        class="form-check-input mr-3 order-first"
        v-bind="$attrs"
        type="radio"
    />
  </div>

</template>

<script>
import form from "./form"

export default {
  name: "OfalosCheckbox",
  mixins: [form]
}
</script>

<style scoped>

</style>