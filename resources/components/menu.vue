<template>
  <div class="menu">
    <ul>
      <li v-for="(menuItem, index) in menuItems" :key="index">
        <nuxt-link :to="menuItem.link">
          {{ menuItem.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
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
  background: #ccc;
}
</style>
