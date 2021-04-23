import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const initiateState = () => {
  return {
    isMobileMenuOpen: false,
    user: null
  }
}

export { initiateState, mutations, actions, getters }
