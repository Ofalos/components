<template>
  <a v-bind="$attrs" class="dropdown-menu__item">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "OfalosDropdownItem"
}
</script>

<style scoped>

</style>