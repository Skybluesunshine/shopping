<template>
  <div class="wrapper">
    <StaticPart />
    <Docker />
    <Nearby />
  </div>
</template>
<script>
import Docker from './Docker.vue'
import StaticPart from './StaticPart.vue'
import Nearby from './Nearby.vue'
export default {
  name: 'Home',
  components: { Docker, StaticPart, Nearby }
}
</script>
<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem;
}
</style>
