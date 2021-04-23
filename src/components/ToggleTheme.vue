<template>
  <button
    class="focus:outline-none"
    :title="'Toggle ' + nextTheme"
    @click="toggleTheme"
  >
    <Sun
      v-if="current === 'light'"
      class="h-6 w-6 text-gray-500 hover:text-gray-700"
    />
    <Moon
      v-else
      class="h-6 w-6 text-gray-400 hover:text-gray-300"
    />
  </button>
</template>

<script>
import Sun from '~/assets/icons/sun.svg'
import Moon from '~/assets/icons/moon.svg'

export default {
  components: {
    Sun,
    Moon
  },
  data () {
    return {
      themes: ['light', 'dark'],
      current: 'light'
    }
  },
  computed: {
    nextTheme () {
      const currentIndex = this.themes.indexOf(this.current)
      const nextIndex = (currentIndex + 1) % this.themes.length
      return this.themes[nextIndex]
    }
  },
  mounted () {
    if (window.__theme) {
      this.current = window.__theme
    }
  },
  methods: {
    toggleTheme () {
      const currentIndex = this.themes.indexOf(this.current)
      const nextIndex = (currentIndex + 1) % this.themes.length
      window.__setPreferredTheme(this.themes[nextIndex])
      this.current = this.themes[nextIndex]
    }
  }
}
</script>
