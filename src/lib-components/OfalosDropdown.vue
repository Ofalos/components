<template>
  <div class="relative inline-block text-left">
    <button type="button" class="dropdown-menu" aria-haspopup="true" @focus="focussed" @blur="blurred">
      Options
    </button>

    <!--
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    -->
    <transition name="land">
      <div class="dropdown-menu__items" v-if="isFocussed">
        <div class="py-1" role="none">
          <OfalosDropdownItem>Edit</OfalosDropdownItem>
          <OfalosDropdownItem @click="handle">Delete</OfalosDropdownItem>
          <OfalosDropdownItem href="https://dlajfdklaj.com">Duplicate</OfalosDropdownItem>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import OfalosDropdownItem from "./OfalosDropdownItem"
export default {
  name: "OfalosDropdown",
  components: { OfalosDropdownItem },
  data() {
    return {
      isFocussed: false
    }
  },
  methods: {
    focussed() {
      this.isFocussed = true
    },
    blurred() {
      this.isFocussed = false
    },
    handle () {
      console.log("handled")
    }
  }
}
</script>

<style scoped>

</style>