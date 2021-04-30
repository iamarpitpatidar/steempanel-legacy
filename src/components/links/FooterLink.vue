<template>
  <g-link
    :to="to"
    class="block text-gray-500 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300"
  >
    <slot />
  </g-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '/'
    }
  }
}
</script>
