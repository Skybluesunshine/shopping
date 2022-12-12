<template>
  <div class="header">
    <StaticPart />
    <Docker />
  </div>
</template>
<script>
import Docker from './Docker.vue'
import StaticPart from './StaticPart.vue'
export default {
  name: 'Home',
  components: { Docker, StaticPart }
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
