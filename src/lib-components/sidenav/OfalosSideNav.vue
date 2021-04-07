<template>
  <!-- you will need to add a little "X" button next to the logo in order to close it though -->
  <div class="sidenav" id="main-nav">

    <div class="w-full h-20 border-b flex px-4 items-center mb-8">
      <p class="font-semibold text-3xl text-blue-400 pl-4">LOGO</p>
    </div>

    <nav class="sidebar__nav">
      <OfalosSidenavTitle>MAIN</OfalosSidenavTitle>
      <OfalosSidenavItem>
        Dashboard
      </OfalosSidenavItem>
      <OfalosSidenavItem class="active">
        Analytics
      </OfalosSidenavItem>
      <OfalosSidenavItem>
        Inventory
      </OfalosSidenavItem>
    </nav>

  </div>
</template>

<script>
import OfalosSidenavTitle from "./OfalosSidenavTitle"
import OfalosSidenavItem from "./OfalosSidenavItem"
export default {
name: "OfalosSideNav",
  components: { OfalosSidenavItem, OfalosSidenavTitle }
}
</script>

<style scoped>

</style>