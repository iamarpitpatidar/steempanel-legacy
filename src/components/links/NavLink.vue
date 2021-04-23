<template>
  <app-link
    :to="to"
    active-class="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-white"
    inactive-class="text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white"
  >
    <slot />
  </app-link>
</template>

<script>
import AppLink from './AppLink'

export default {
  components: {
    AppLink
  },
  props: {
    to: {
      type: String,
      default: '/'
    }
  }
}
</script>
