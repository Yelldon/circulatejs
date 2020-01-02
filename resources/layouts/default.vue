<template>
  <div class="flex flex-row">
    <menu-component />
    <nuxt />
  </div>
</template>

<script>
import menuComponent from '~/components/menu'
export default {
  components: {
    menuComponent
  }
}
</script>
