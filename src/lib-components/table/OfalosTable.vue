<template>
  <table class="table table--striped">
    <thead>
    <tr>
      <th class="border-b-2 dark:border-dark-5 whitespace-nowrap">
        #
      </th>
      <th
          class="border-b-2 dark:border-dark-5 whitespace-nowrap"
      >
        First Name
      </th>
      <th
          class="border-b-2 dark:border-dark-5 whitespace-nowrap"
      >
        Last Name
      </th>
      <th
          class="border-b-2 dark:border-dark-5 whitespace-nowrap"
      >
        Username
      </th>
    </tr>
    </thead>
    <tbody>
      <ofalos-table-row></ofalos-table-row>
      <ofalos-table-row></ofalos-table-row>
      <ofalos-table-row></ofalos-table-row>
      <ofalos-table-row></ofalos-table-row>
    </tbody>
  </table>

</template>

<script>
import OfalosTableRow from "./OfalosTableRow"
export default {
  name: "OfalosTable",
  components: { OfalosTableRow }
}
</script>

<style scoped>

</style>