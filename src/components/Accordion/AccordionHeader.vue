<template>
  <div
    class="flex justify-between text-gray-700 dark:text-gray-400 font-medium mb-1"
    @click="setActive"
  >
    <span>
      <slot />
    </span>
    <chevron :class="['h-4', 'w-4', 'sm:hidden', 'text-gray-500', 'transition-all', 'transform', { 'rotate-90' : isActive }]" />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { isMobile } from '~/utils'
import chevron from '~/assets/icons/chevron.svg'

export default {
  components: {
    chevron
  },
  inject: ['_id'],
  computed: {
    ...mapState(['activeFooterMenu']),
    isActive () {
      return this.activeFooterMenu === this._id
    }
  },
  methods: {
    ...mapMutations(['toggleActiveFooterMenu']),
    setActive () {
      if (isMobile()) this.toggleActiveFooterMenu(this._id)
    }
  }
}
</script>
