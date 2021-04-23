<template>
  <div class="bg-light-50 dark:bg-blue-700">
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
