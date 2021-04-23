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
  </header>
</template>

<script>
import Logo from '~/components/Logo'
import MenuIcon from '~/components/MenuIcon'

export default {
  components: {
    Logo,
    MenuIcon
  }
}
</script>
