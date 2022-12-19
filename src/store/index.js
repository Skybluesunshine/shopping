import { createStore } from 'vuex'

// localStorage实现购物车数据持久存储
const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}
// 使用trycatch 即使localStorage中的数据被删为空，首页也会正常显示
// const getLocaCartList = () => {
//   try {
//     return JSON.parse(localStorage.cartList)
//   } catch (error) {
//     return {}
//   }
// }
export default createStore({
  state: {
    cartList: {
    // shopId: {
    //   shopName: '沃尔玛',
    //   productList: { // 商品列表
    //     productId: { // 商品id及内容
    //       _id: '1',
    //       name: '番茄250g/份',
    //       imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
    //       sales: 10,
    //       price: 33.6,
    //       oldPrice: 39.6,
    //       count: 2
    //     }
    //   }
    // }
    }
    // cartList: getLocaCartList()
  },
  getters: {
  },
  mutations: {
    changeCartItem (state, payload) {
      // console.log(payload)
      const { shopId, productId, productInfo } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      let product = shopInfo.productList[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
        // product = productInfo
        // product.count = 0
      }
      // 同时处理加减
      product.count = product.count + payload.num
      if (product.count < 0) { product.count = 0 }
      // console.log(shopInfo)// {}
      // console.log(product)

      // 选中和未选中处理checked处理
      if (payload.num > 0) { product.check = true }

      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      console.log(state.cartList)
      setLocalCartList(state)
    },
    // 点击勾选框操作
    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
      setLocalCartList(state)
    },
    // 点击全选操作
    setCartItemsChecked (state, payload) {
      const { shopId } = payload
      const products = state.cartList[shopId].productList
      if (products) {
        for (const i in products) {
          const product = products[i]
          product.check = true
        }
      }
      setLocalCartList(state)
    },
    // 清空购物车操作
    cleanCartProducts (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalCartList(state)
    },
    // shopName逻辑2
    changeShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    // 点击确认订单时清空购物车数据
    clearCartData (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
    }
  },
  actions: {
  },
  modules: {
  }
})
