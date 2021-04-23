<script>
import { defineComponent } from 'vue';
import OfalosCheckbox from '../src/lib-components/OfalosCheckbox.vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { ComponentsSample } from '@/entry.esm';

export default defineComponent({
  components: { OfalosCheckbox },
  name: 'ServeDev',
  data () {
    return {
      test: "Abdulh",
      checkedNames: [],
      options: ["Kano", "Abuja", "Niger"],
      selectedOptions: null,
      radioVal: null,
      state: null,
      agreed: ""
    }
  }
});
</script>

<template>
  <div id="app">
<span>Checked names: {{ checkedNames }}</span>
    <div class="mx-auto container">
      <pre>{{ test }}</pre>
      <ofalos-input label="Full name" type="text" floating v-model="test" />

      <pre> {{checkedNames}} </pre>
      <ofalos-checkbox v-model="checkedNames">Abdulhakeem</ofalos-checkbox>
      <ofalos-checkbox v-model="checkedNames" value="Mus'ab" />
      <ofalos-checkbox v-model="checkedNames" label="Raliyat" />

      {{radioVal}}
      <ofalos-radio v-model="radioVal" label="Male" name="gender" />
      <ofalos-radio v-model="radioVal" label="Femaile" name="gender" />
      <ofalos-radio v-model="radioVal" label="Not SAy" name="gender" />

      {{state}}
      <ofalos-radio v-model="state" label="Abuja" name="genders" />
      <ofalos-radio v-model="state" label="Kaduna" name="genders" />
      <ofalos-radio v-model="state" label="Lagos" name="genders" />

      {{selectedOptions}}
      <ofalos-select v-model="selectedOptions" :options="states"  />

      {{agreed}}
      <ofalos-checkbox v-model="agreed" value="I agree to subscribe for ads" /> 
    </div>
  </div>
</template>
<style>
</style>