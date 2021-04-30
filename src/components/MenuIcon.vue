<template>
  <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
    <button
      type="button"
      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:focus:ring-gray-400"
    >
      <span class="sr-only">Open main menu</span>
      <Hamburger
        v-if="!isMobileMenuOpen"
        class="h-6 w-6 text-gray-500 dark:text-gray-400"
        @click="toggleMobileMenu"
      />
      <Cross
        v-else
        class="h-6 w-6 text-gray-500 dark:text-gray-400"
        @click="toggleMobileMenu"
      />
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Cross from '~/assets/icons/cross.svg'
import Hamburger from '~/assets/icons/menu.svg'

export default {
  components: {
    Cross,
    Hamburger
  },
  computed: {
    ...mapState(['isMobileMenuOpen'])
  },
  methods: {
    ...mapMutations(['toggleMobileMenu'])
  }
}
</script>
