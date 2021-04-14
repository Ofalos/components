<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <button :for="id" class="form-select" @focus="focused" @blur="blurred">
      <span class="flex items-center">
        <span class="block truncate">
          {{ isMultiple ? multipleValues : selectedValue || "-" }}
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
        <!-- <OfalosSelectOption>
          Ghana
        </OfalosSelectOption>
        <OfalosSelectOption>
          Ivory Coast
        </OfalosSelectOption>
        <OfalosSelectOption>
          Cameroon
        </OfalosSelectOption>
        <OfalosSelectOption value="alkjdafj" selected="true">
          Gambia
        </OfalosSelectOption> -->
        <div v-for="(option, i) in options" :key="i">
          <ofalos-select-option @selected="updateSelected" :value="option" />
        </div>
      </ul>
    </button>
  </div>
</template>

<script>
import form from "./form";
import OfalosSelectOption from "./OfalosSelectOption";

export default {
  name: "OfalosSelect",
  components: { OfalosSelectOption },
  mixins: [form],
  data() {
    return {
      selectedValue: null,
      multipleValues: [],
    };
  },
  props: {
    options: [Array],
    multiple: [String, Boolean],
  },
  computed: {
    isMultiple() {
      return ["", "true", true].includes(this.multiple);
    },
    returnValue() {
      this.isMultiple ? this.multipleValues : this.selectedValue
    }
  },
  methods: {
    // focused() {
    //   console.log("focused");
    // },
    // blurred() {
    //   console.log("blurred");
    // },
    updateSelected(value, e) {
      if (this.isMultiple) {
        if (this.multipleValues.includes(value)) {
          e.target.classList.remove("selected")
          this.multipleValues = this.multipleValues.filter((item) => {
            return item != value
          })
        }else{
          e.target.classList.add("selected")
          this.multipleValues.push(value);
        }
        this.$emit("update:selected", this.multipleValues)
      }
      else {
        document.querySelectorAll(".form-select-option").forEach(el=>{
          el.classList.remove("selected")
        })
        if (this.selectedValue !== value) {
          e.target.classList.add("selected")
          this.selectedValue = value 
        }else {
          e.target.classList.remove("selected")
          this.selectedValue = null
        }
        this.$emit("update:selected", this.selectedValue)
      }
    },
  },
}
</script>

<style scoped>
</style>