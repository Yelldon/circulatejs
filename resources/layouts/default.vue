<template>
  <div class="flex flex-row">
    <menu-component />
    <div class="w-full bg-gray-200">
      <nuxt />
    </div>
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
