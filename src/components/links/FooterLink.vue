<template>
  <g-link
    :to="to"
    class="text-gray-500 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-400"
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
