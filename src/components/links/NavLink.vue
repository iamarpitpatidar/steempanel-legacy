<template>
  <app-link
    :to="to"
    active-class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
    inactive-class="text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-200"
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
