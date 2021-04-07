<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <button :for="id" class="form-select" @focus="focused" @blur="blurred">
      <span class="flex items-center">
        <span class="block truncate">
          Cameroon
        </span>
      </span>

      <!--
        Select popover, show/hide based on select state.

        Entering: ""
          From: ""
          To: ""
        Leaving: "transition ease-in duration-100"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <ul :class="['form-select-options']" role="listbox" v-show="isFocussed">
        <!--
          Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

          Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
        -->
        <li class="form-select-option" role="option">
          Nigeria
        </li>
        <li class="form-select-option" role="option">
          Ghana
        </li>
        <li class="form-select-option" role="option">
          Ivory Coast
        </li>
        <li class="form-select-option selected" role="option">
          Cameroon
        </li>
        <li class="form-select-option" role="option">
          Gambia
        </li>

        <!-- More items... -->
      </ul>
    </button>
  </div>

</template>

<script>
import form from "./form"
import OfalosSelectOption from "./OfalosSelectOption"

export default {
  name: "OfalosSelect",
  components: { OfalosSelectOption },
  mixins: [form],
  props: {
    options: {
      type: Array
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>