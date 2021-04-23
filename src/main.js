// Import global styles
import '~/assets/styles/index.css'
import DefaultLayout from '~/layouts/Default'

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.component('Layout', DefaultLayout)
}
