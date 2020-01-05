<template>
  <div class="menu">
    <h1 class="p-4 font-bold text-lg">{{ settings.title }}</h1>
    <ul>
      <li v-for="(menuItem, index) in menuItems" :key="index">
        <nuxt-link class="px-4 py-1" :to="menuItem.link">
          {{ menuItem.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    settings() {
      return this.$store.state.settings
    },
    menuItems() {
      return this.$store.state.menu
    }
  }
}
</script>

<style lang="postcss" scoped>
.menu {
  width: 300px;
  height: 100vh;
  /* background: #ccc; */
  @apply .border-r .border-gray-500 .border-solid;
}
</style>
