<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { ComponentsSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  ComponentsSample,
  // }
});
</script>

<template>
  <div id="app">
    <components-sample />
  </div>
</template>
