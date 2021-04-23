<template>
  <header>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <menu-icon />
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <logo />
        </div>
      </div>
    </div>
    <mobile-menu v-if="isMobileMenuOpen" />
  </header>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '~/components/Logo'
import MenuIcon from '~/components/MenuIcon'
import MobileMenu from '~/components/MobileMenu'

export default {
  components: {
    Logo,
    MenuIcon,
    MobileMenu
  },
  computed: {
    ...mapState(['isMobileMenuOpen'])
  }
}
</script>
