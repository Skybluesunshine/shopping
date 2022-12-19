<template>
  <div
    class="mask"
    v-if="showCart && calculations.total > 0"
    @click="handleCartShowChange"
  />
  <div class="cart">
    <div class="product" v-if="showCart && calculations.total > 0">
      <div class="product__header">
        <div
          class="product__header__all"
          @click="() => setCartItemsChecked(shopId)"
        >
          <span
            class="product__header__icon iconfont"
            v-html="calculations.allChecked ? '&#xe652;': '&#xe601;'"
          >
          </span>
          全选
        </div>
        <div class="product__header__clear">
          <span class="product__header__clear__btn"
            @click="() => cleanCartProducts(shopId)"
          >清空购物车</span>
        </div>
      </div>
      <div
        v-for="item in productList"
        :key="item._id"
        class="product__item"
      >
        <div
          class="product__item__checked iconfont"
          v-html="item.check ? '&#xe652;': '&#xe601;'"
          @click="() => changeCartItemChecked(shopId, item._id)"
        />
        <img class="product__item__img" :src="item.imgUrl" />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{item.name}}</h4>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{item.price}}
            <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
          </p>
        </div>
        <div class="product__number">
          <span
            class="product__number__minus"
            @click="() => { changeCartItem(shopId, item._id, item, -1) }"
          >-</span>
            {{item.count || 0}}
          <span
            class="product__number__plus"
            @click="() => { changeCartItem(shopId, item._id, item, 1) }"
          >+</span>
        </div>
      </div>
    </div>
    <div class="check">
      <div class="check__icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check__icon__img"
          @click="handleCartShowChange"
        />
        <div class="check__icon__tag">{{calculations.total}}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{calculations.price}}</span>
      </div>
      <div class="check__btn" v-show="calculations.total > 0">
        <router-link :to="{path: `/order/${shopId}`}">
          去结算
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { ref } from 'vue'
import { useCommonCartEffect } from '../../effects/cartEffect'

// 获取购物车信息逻辑
const useCartEffect = (shopId) => {
  const store = useStore()
  const { calculations, productList, changeCartItem } = useCommonCartEffect(shopId)
  // 计算总数量
  // const totalCount = computed(() => {
  //   const productList = cartList[shopId]?.productList
  //   let count = 0
  //   if (productList) {
  //     // console.log(productList)
  //     for (const i in productList) {
  //       const product = productList[i]
  //       count += product.count
  //     }
  //   }
  //   return count
  // })

  // 计算总价格
  // const totalPrice = computed(() => {
  //   const productList = cartList[shopId]?.productList
  //   let price = 0
  //   if (productList) {
  //     for (const i in productList) {
  //       const product = productList[i]
  //       // 要勾选了才计算价格
  //       if (product.check) {
  //         price += (product.count * product.price)
  //       }
  //     }
  //   }
  //   return price.toFixed(2)
  // })

  // productList
  // const productList = computed(() => {
  //   const productList = cartList[shopId]?.productList || []
  //   return productList
  // })
  // 点击勾选框操作
  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', { shopId, productId })
  }
  // 全选逻辑1
  // const allChecked = computed(() => {
  //   const productList = cartList[shopId]?.productList
  //   let result = true
  //   if (productList) {
  //     for (const i in productList) {
  //       const product = productList[i]
  //       // count大于0并且check为false时，result = false
  //       if (product.count > 0 && !product.check) {
  //         result = false
  //       }
  //     }
  //   }
  //   return result
  // })
  // 点击全选逻辑
  const setCartItemsChecked = (shopId) => {
    store.commit('setCartItemsChecked', { shopId })
  }
  // 清空购物车
  const cleanCartProducts = (shopId) => {
    store.commit('cleanCartProducts', { shopId })
  }

  return {
    calculations,
    changeCartItemChecked,
    cleanCartProducts,
    setCartItemsChecked,
    productList,
    changeCartItem
  }
}
export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    // 购物车展示隐藏
    const showCart = ref(false)
    const handleCartShowChange = () => {
      showCart.value = !showCart.value
    }
    const { productList, changeCartItem, calculations, changeCartItemChecked, cleanCartProducts, setCartItemsChecked } = useCartEffect(shopId)

    return {
      calculations,
      productList,
      shopId,
      changeCartItem,
      changeCartItemChecked,
      cleanCartProducts,
      setCartItemsChecked,
      showCart,
      handleCartShowChange
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viribles.scss';
@import '../../style/mixin.scss';
.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 1;
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: $bgColor;
}
.product {
  overflow-y: scroll;
  flex: 1;
  background: $bgColor;
  &__header {
    display: flex;
    line-height: .52rem;
    border-bottom: 1px solid $content-bgColor;
    font-size: .14rem;
    color: $content-fontcolor;
    &__all {
      width: .64rem;
      margin-left: .18rem;
    }
    &__icon {
      display: inline-block;
      margin-right: .1rem;
      vertical-align: top;
      color: $btn-bgColor;
      font-size: .2rem;
    }
    &__clear {
      flex: 1;
      margin-right: .16rem;
      text-align: right;
      &__btn {
        display: inline-block;
      }
    }
  }
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    &__checked {
      line-height: .5rem;
      margin-right: .2rem;
      color: $btn-bgColor;
      font-size: .2rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
    }
    &__yen {
      font-size: .12rem;
    }
    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: .26rem;
      &__minus, &__plus
       {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        line-height: .16rem;;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
      }
      &__minus {
        border: .01rem solid $medium-fontColor;
        color: $medium-fontColor;
        margin-right: .05rem;
      }
      &__plus {
        background: $btn-bgColor;
        color: $bgColor;
        margin-left: .05rem;
      }
    }
  }
}
.check {
  display: flex;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  line-height: .49rem;
  &__icon {
    position: relative;
    width: .84rem;
    &__img {
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }
    &__tag {
      position: absolute;
      left: .46rem;
      top: .04rem;
      padding: 0 .04rem;
      min-width: .2rem;
      height: .2rem;
      line-height: .2rem;
      background-color: $hightlight-fontColor;
      border-radius: .1rem;
      font-size: .12rem;
      text-align: center;
      color: #fff;
      transform: scale(.5);
      transform-origin: left center;
    }
  }
  &__info {
    flex: 1;
    color: $content-fontcolor;
    font-size: .12rem;
    &__price {
      line-height: .49rem;
      color: $hightlight-fontColor;
      font-size: .18rem;
    }
  }
  &__btn {
    width: .98rem;
    background-color: #4FB0F9;
    text-align: center;
    font-size: .14rem;
    a {
      color: $bgColor;
      text-decoration: none;
    }
  }
}
</style>
