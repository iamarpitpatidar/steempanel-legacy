<template>
  <div class="hidden sm:block sm:ml-6">
    <div class="flex space-x-4">
      <nav-link
        to="/news"
        class="px-3 py-2 rounded-md text-sm font-medium"
      >
        News
      </nav-link>
    </div>
  </div>
</template>

<script>
import NavLink from './links/NavLink'

export default {
  components: {
    NavLink
  }
}
</script>
