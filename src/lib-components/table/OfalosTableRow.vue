<template>
  <tr>
    <ofalos-table-column></ofalos-table-column>
    <ofalos-table-column></ofalos-table-column>
    <ofalos-table-column></ofalos-table-column>
    <ofalos-table-column></ofalos-table-column>
  </tr>

</template>

<script>
import OfalosTableColumn from "./OfalosTableColumn"
export default {
  name: "OfalosTableRow",
  components: { OfalosTableColumn }
}
</script>

<style scoped>

</style>