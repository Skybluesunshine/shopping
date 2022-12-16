<template>
  <div class="wrapper">
    <TopArea />
    <ProductList />
    <BottomArea />
  </div>
</template>
<script>
import TopArea from './TopArea.vue'
import ProductList from './ProductList.vue'
import BottomArea from './BottomArea.vue'
export default {
  name: 'Order',
  components: { TopArea, ProductList, BottomArea }
}
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
  overflow-y: scroll;
}
</style>
