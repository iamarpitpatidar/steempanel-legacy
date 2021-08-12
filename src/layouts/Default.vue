<template>
  <div class="flex flex-col bg-gray-100 dark:bg-gray-700 min-h-screen">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from './partials/Header'
import Footer from './partials/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
