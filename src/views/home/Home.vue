<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
  <Docker :currentIndex="0"/>
</template>
<script>
import Docker from '../../components/Docker.vue'
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
