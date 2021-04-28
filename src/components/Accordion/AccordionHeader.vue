<template>
  <div
    class="mb-1"
    @click="setActive"
  >
    <slot />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  inject: ['_id'],
  methods: {
    ...mapMutations(['toggleActiveFooterMenu']),
    setActive () {
      this.toggleActiveFooterMenu(this._id)
    }
  }
}
</script>
