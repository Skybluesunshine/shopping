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
    const productList = cartList[shopId]?.productList || {}
    // 过滤productList中数量小于0的
    // const notEmptyProductList = {}
    // for (const i in productList) {
    //   const product = productList[i]
    //   if (product.count > 0) {
    //     notEmptyProductList[i] = product
    //   }
    // }
    // return notEmptyProductList
    return productList
  })
  // shopName
  const shopName = computed(() => {
    const shopName = cartList[shopId]?.shopName || ''
    return shopName
  })

  // 购物车计算操作
  const calculations = computed(() => {
    const productList = cartList[shopId]?.productList
    const result = { total: 0, price: 0, allChecked: true }
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        result.total += product.count
        if (product.check) {
          result.price += (product.count * product.price)
        }
        if (product.count > 0 && !product.check) {
          result.allChecked = false
        }
      }
    }
    result.price = result.price.toFixed(2)
    return result
  })
  return { cartList, changeCartItem, productList, shopName, calculations }
}
