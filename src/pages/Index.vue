<template>
  <Layout>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <project-logo class="object-fill h-48 w-full text-gray-800" />
        <div class="max-w-xl mb-5 mx-auto text-center lg:max-w-2xl">
          <label
            for="username"
            class="text-base text-gray-600 dark:text-gray-300 md:text-lg"
          >
            Check your account APR and stats
          </label>
        </div>
        <form
          class="flex w-full max-w-sm mx-auto space-x-3"
          autocomplete="off"
          @submit.prevent=""
        >
          <input
            id="username"
            type="text"
            placeholder="username"
            class="flex-1 appearance-none w-full py-2 sm:py-1 px-4 bg-white dark:bg-blueGray-600 text-gray-600 dark:text-gray-200 placeholder-gray-400 shadow-md rounded text-base focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 focus:shadow-xl"
          >
          <button
            type="submit"
            class="flex-shrink-0 bg-gray-600 dark:bg-blueGray-600 text-white py-2 sm:py-1 px-5 font-semibold rounded shadow-md hover:bg-gray-700 dark:hover:bg-blueGray-500 focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
import ProjectLogo from '~/assets/images/steem-logo.svg'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    ProjectLogo
  }
}
</script>
