<template>
  <div :class="wrapper ">
    <label :for="id" :class="[ {'form-filled-label': isFocussed }, 'form-label']">{{ label }}</label>
    <input
        :id="id"
        v-model="value"
        :type="type"
        class="form-control"
        @focus="focused"
        @blur="blurred"
    />
  </div>
</template>

<script>
import form from "./form"

export default {
  name: "OfalosInput",
  props: {
    type: String,
    floating: Boolean,
    inline: Boolean
  },
  mixins: [form],
  computed: {

    wrapper () {
      if (this.floating) {
        return 'form-floating'
      } else if (this.inline) {
        return 'form-inline'
      } else {
        return ''
      }
    }
  },

}
</script>

<style scoped>

</style>