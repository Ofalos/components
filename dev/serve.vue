<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { ComponentsSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  data () {
    return {
      test: "Abdulh",
      checkedNames: [],
      options: ["Kano", "Abuja", "Niger"],
      selectedOptions: null,
      radioVal: null
    }
  }
});
</script>

<template>
  <div id="app">
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
<br>
<span>Checked names: {{ checkedNames }}</span>
    <div class="mx-auto container">
      <pre>{{ test }}</pre>
      <ofalos-input label="Full name" type="text" floating v-model="test" />
      <pre> {{checkedNames}} </pre>
      <ofalos-checkbox v-model:checkedOption="checkedNames">Abdulhakeem</ofalos-checkbox>
      <ofalos-checkbox v-model:checkedOption="checkedNames" value="Mus'ab" />
      <ofalos-checkbox v-model:checkedOption="checkedNames" label="Raliyat" />

      {{radioVal}}
      <ofalos-radio v-model:radio="radioVal" label="Male" name="gender" />

      <ofalos-radio v-model:radio="radioVal" label="Femaile" name="gender" />
      <ofalos-radio v-model:radio="radioVal" label="Not SAy" name="gender" />
      {{selectedOptions}} in serve
      <ofalos-select v-model:selected="selectedOptions" :options="options" multiple  />

    </div>
  </div>
</template>
<style>
</style>