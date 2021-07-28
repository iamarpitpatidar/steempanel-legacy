<template>
  <header class="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md">
    <div class="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <menu-icon />
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <logo />
          <nav-bar />
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <toggle-theme />
          <user-profile v-if="isUserAuth" />
        </div>
      </div>
    </div>
    <mobile-menu v-if="isMobileMenuOpen" />
  </header>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Logo from '~/components/Logo'
import MenuIcon from '~/components/MenuIcon'
import MobileMenu from '~/components/MobileMenu'
import NavBar from '~/components/NavBar'
import ToggleTheme from '~/components/ToggleTheme'
import UserProfile from '~/components/UserProfile'

export default {
  components: {
    Logo,
    MenuIcon,
    MobileMenu,
    NavBar,
    ToggleTheme,
    UserProfile
  },
  computed: {
    ...mapState(['isMobileMenuOpen']),
    ...mapGetters(['isUserAuth'])
  }
}
</script>
