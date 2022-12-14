// 购物车
import { useStore } from 'vuex'
export const useCommonCartEffect = () => {
  const store = useStore()
  const cartList = store.state.cartList
  const changeCartItem = (shopId, productId, productInfo, num) => {
    // console.log(shopId, productId, productInfo)
    store.commit('changeCartItem', {
      shopId, productId, productInfo, num
    })
  }
  return { cartList, changeCartItem }
}
