<template>
  <div :class="['text-gray-500', 'overflow-hidden', 'transition-all', 'duration-300', 'ease-in-out', 'mb-3', isActive ? 'max-h-40' : 'max-h-0', 'sm:max-h-unset']">
    <slot />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  inject: ['_id'],
  computed: {
    ...mapState(['activeFooterMenu']),
    isActive () {
      return this.activeFooterMenu === this._id
    }
  }
}
</script>
