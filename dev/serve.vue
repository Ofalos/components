<script>
import { defineComponent } from 'vue';
import OfalosSelect from "../src/lib-components/OfalosSelect"
import OfalosDropdown from "../src/lib-components/OfalosDropdown"
import OfalosSideNav from "../src/lib-components/sidenav/OfalosSideNav"
import OfalosHeader from "../src/lib-components/OfalosHeader"
import OfalosRadio from '../src/lib-components/OfalosRadio.vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { ComponentsSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  components: { OfalosHeader, OfalosSelect, OfalosDropdown, OfalosRadio},
  data () {
    return {
      myItem: '',
      items: [
        { name: "Wade Cooper" },
        { name: "Arlene Mccoy" },
        { name: "Devon Webb" },
        { name: "Tom Cook" },
        { name: "Tanya Fox" },
        { name: "Hellen Schmidt" },
      ],
      test: "Abdulh"
    }
  }
});
</script>

<template>
  <div id="app">
<!--    <ofalos-side-nav />-->
    <ofalos-header></ofalos-header>
    
    <!-- <div class="block h-screen"></div> -->
    <div class="mx-auto h-screen container py-5">
<!--      <ofalos-button role="button" >kdlfjaf</ofalos-button>-->
      <ofalos-input label="Full name" type="text" floating :v-model="test" disabled />
      <!-- <ofalos-dropdown ></ofalos-dropdown> -->
      <ofalos-select v-model:item="myItem" :items="items"></ofalos-select>
      items-{{myItem}}
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
