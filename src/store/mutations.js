const mutations = {
  toggleMobileMenu (store) {
    store.isMobileMenuOpen = !store.isMobileMenuOpen
  },
  toggleActiveFooterMenu (store, payload) {
    if (store.activeFooterMenu === payload) store.activeFooterMenu = null
    else store.activeFooterMenu = payload
  }
}

export default mutations
