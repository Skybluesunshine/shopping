<template>
  <div class="header">
    <Docker />
  </div>
</template>
<script>
import Docker from './Docker.vue'
export default {
  name: 'Home',
  components: { Docker }
}
</script>
<style lang="scss" scoped>
.header {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem;
}
</style>
