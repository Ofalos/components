<template>
  <a class="button bg-blue-500 button-dark" v-bind="$attrs">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "OfalosButton"
}
</script>

<style scoped>

</style>