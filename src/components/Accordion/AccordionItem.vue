<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  provide () {
    return {
      _id: Math.random().toString(36).substring(2, 15)
    }
  }
}
</script>
