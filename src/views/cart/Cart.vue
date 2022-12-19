<template>
  <div class="wrapper">
    <Docker :currentIndex="1"/>
  </div>
</template>
<script>
import Docker from '../../components/Docker.vue'
export default {
  name: 'Cart',
  components: { Docker }
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
  background: rgb(248, 248,248);
}
</style>
