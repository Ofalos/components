<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <button :for="id" class="form-select" @focus="focused" @blur="blurred">
      <span class="flex items-center">
        <span class="block truncate">
          {{ isMultiple ? computedMultiple.toString() : selectedValue || "-" }}
        </span>
      </span>
      <ul :class="['form-select-options']" role="listbox" v-show="isFocussed">
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
    computedMultiple() {
      return this.multipleValues.length > 0 ? this.multipleValues : "-"
    }, 
    isMultiple() {
      return ["", "true", true].includes(this.multiple);
    }
  },
  methods: {
    updateSelected(value, e) {
      if (this.isMultiple) {
        if (this.multipleValues.includes(value)) {
          e.target.classList.remove("selected")
          this.multipleValues.splice(this.multipleValues.indexOf(value),1)
        }else{
          e.target.classList.add("selected")
          this.multipleValues.push(value);
        }
        this.$emit("update:modelValue", this.multipleValues)
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
        this.$emit("update:modelValue", this.selectedValue)
      }
    },
  },
}
</script>

<style scoped>
</style>