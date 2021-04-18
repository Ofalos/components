<script>
import { defineComponent } from 'vue';
import OfalosButton from "../src/lib-components/OfalosButton"
import OfalosDropdown from "../src/lib-components/OfalosDropdown"
import OfalosSideNav from "../src/lib-components/sidenav/OfalosSideNav"
import OfalosHeader from "../src/lib-components/OfalosHeader"
import OfalosTable from "../src/lib-components/table/OfalosTable"
// Uncomment import and local "components" registration if library is not registered globally.
// import { ComponentsSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  components: { OfalosTable, OfalosHeader, OfalosSideNav, OfalosDropdown, OfalosButton },
  data () {
    return {
      test: "Abdulh"
    }
  }
});
</script>

<template>
  <div id="app">
<!--    <ofalos-side-nav />-->
    <div class="mx-auto container py-5">
      <ofalos-table></ofalos-table>

<!--      <ofalos-button role="button" >kdlfjaf</ofalos-button>-->
      <ofalos-input label="Full name" type="text" floating :v-model="test" disabled />
<!--      <ofalos-checkbox>Abdulhakeem </ofalos-checkbox>-->
<!--      <ofalos-checkbox label="Raliyat" />-->
<!--      <ofalos-radio label="Male" name="gender" />-->
<!--      <ofalos-radio label="Femaile" name="gender" />-->
<!--      <ofalos-radio label="Not SAy" name="gender" />-->
<!--      <ofalos-select />-->
<!---->
<!--      Dropdown-->
<!--      <ofalos-dropdown />-->

    </div>
  </div>
</template>
<style>
</style>