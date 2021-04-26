<template>
  <div class="w-56 text-right">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Options
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-for="(item, key) in items" :key="key" v-slot="{ active }">
              <button
                @click="handleClick(item)"
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                ]"
              >
              {{item.name}}
              </button>
            </MenuItem>
          </div>

          <div class="px-1 py-1">
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
// import { ChevronDownIcon } from "@heroicons/vue/solid";
// import ArchiveIcon from "./archive-icon.vue";
// import DuplicateIcon from "./duplicate-icon.vue";
// import MoveIcon from "./move-icon.vue";
// import EditIcon from "./edit-icon.vue";
// import DeleteIcon from "./delete-icon.vue";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    // ChevronDownIcon,
    // ArchiveIcon,
    // DuplicateIcon,
    // MoveIcon,
    // EditIcon,
    // DeleteIcon,
  },
  props: {
    items: {
      type: Array,
      default: []
    } 
  },
  setup(){
    const handleClick = (item)=> {
      //do something with or go to a route
      console.log(item)    
    }
    return { handleClick }
  }

};
</script>
