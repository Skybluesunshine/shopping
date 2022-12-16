// 购物车
import { useStore } from 'vuex'
import { computed } from 'vue'
export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList
  const changeCartItem = (shopId, productId, productInfo, num) => {
    // console.log(shopId, productId, productInfo)
    store.commit('changeCartItem', {
      shopId, productId, productInfo, num
    })
  }
  // 购物列表
  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || []
    return productList
  })
  // shopName
  const shopName = computed(() => {
    const shopName = cartList[shopId]?.shopName || ''
    return shopName
  })
  return { cartList, changeCartItem, productList, shopName }
}
