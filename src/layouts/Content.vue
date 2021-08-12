<template>
  <div class='flex flex-col bg-gray-100 dark:bg-gray-700 min-h-screen'>
    <Header />
    <main class='px-4 sm:px-6 lg:px-8 mt-2 py-4'>
      <slot />
    </main>
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
