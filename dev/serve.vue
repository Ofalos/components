<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { ComponentsSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  data () {
    return {
      test: "Abdulh"
    }
  }
});
</script>

<template>
  <div id="app">
    <div class="mx-auto container">
      <pre>{{ test }}</pre>
      <ofalos-input label="Full name" type="text" floating :v-model="test" />
      <ofalos-checkbox>Abdulhakeem </ofalos-checkbox>
      <ofalos-checkbox label="Raliyat" />
      <ofalos-radio label="Male" name="gender" />
      <ofalos-radio label="Femaile" name="gender" />
      <ofalos-radio label="Not SAy" name="gender" />

      <ofalos-select />


    </div>
  </div>
</template>
<style>
</style>