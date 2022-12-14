// // 购物车相关逻辑
// import { useStore } from 'vuex'
// // import { computed } from 'vue'

// export const useCommonCartEffect = (shopId) => {
//   const store = useStore()
//   const cartList = store.state.cartList
//   const changeCartItemInfo = (shopId, productId, productInfo, num) => {
//     console.log(shopId, productId, productInfo, num)
//     store.commit('changeCartItemInfo', {
//       shopId, productId, productInfo, num
//     })
//   }
//   return { cartList, changeCartItemInfo }
// }
