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
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
             role="menuitem">Edit</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
             role="menuitem">Duplicate</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "OfalosDropdown",
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
    }
  }
}
</script>

<style scoped>

</style>