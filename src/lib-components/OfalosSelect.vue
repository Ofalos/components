<template>
  <div>
    <label :for="id">{{ label }}</label>
    <select :id="id" class="form-select">
      <ofalos-select-option>Leonardo DiCaprio</ofalos-select-option>
      <ofalos-select-option>Johnny Deep</ofalos-select-option>
      <ofalos-select-option>Robert Downey, Jr</ofalos-select-option>
      <ofalos-select-option>Samuel L. Jackson</ofalos-select-option>
      <ofalos-select-option>Morgan Freeman</ofalos-select-option>
    </select>
  </div>
</template>

<script>
import form from "./form"
import OfalosSelectOption from "./OfalosSelectOption"

export default {
name: "OfalosSelect",
  components: { OfalosSelectOption },
  mixins: [form]
}
</script>

<style scoped>

</style>