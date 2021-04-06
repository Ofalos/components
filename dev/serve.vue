<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { ComponentsSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  data () {
    return {
      x: "Abdulh"
    }
  }
});
</script>

<template>
  <div id="app">
    <div class="mx-auto container">
      <ofalos-input label="Full name" type="text" />

    </div>
  </div>
</template>
<style>
</style>