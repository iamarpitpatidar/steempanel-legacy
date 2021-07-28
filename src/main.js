// Import global styles
import '~/assets/styles/index.css'
import DefaultLayout from '~/layouts/Default'
import ContentLayout from '~/layouts/Content'

import Vuex from 'vuex'
import { actions, getters, initiateState, mutations } from './store'

export default function (Vue, { appOptions }) {
  Vue.use(Vuex)
  Vue.component('Layout', DefaultLayout)
  Vue.component('Content', ContentLayout)

  // registering the store
  appOptions.store = new Vuex.Store({
    state: initiateState(),
    mutations: mutations,
    actions: actions,
    getters: getters
  })
}
