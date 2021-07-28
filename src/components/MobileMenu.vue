<template>
  <div class="sm:hidden px-2 pt-2 pb-3 space-y-1">
    <nav-link
      to="/news"
      class="block px-3 py-2 rounded-md text-base font-medium"
    >
      News
    </nav-link>
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
