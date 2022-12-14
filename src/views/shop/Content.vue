<template>
  <div class="content">
    <div class="category">
      <!-- currentTab===item.tab时显示高亮 -->
      <div class="category__item"
      :class="{'category__item--active':currentTab === item.tab}"
      v-for="item in categories"
      :key="item.name"
      @click="() => handleClickTab(item.tab)"
      >{{item.name}}</div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl"/>
        <div class="product__item__detail">
          <h4 class="product__item__title">{{item.name}}</h4>
          <p class="product__item__sales">月售{{item.sales}}</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{item.price}}
            <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
          </p>
        </div>
        <div class="product__number">
          <span class="product__number__minus" @click="() => {changeCartItem(shopId,item._id,item,-1)}">-</span>
          {{cartList?.[shopId]?.[item._id]?.count || 0}}
          <!--shopId,item._id,item商铺id，商铺里产品id，产品信息  -->
          <span class="product__number__plus" @click="() => {changeCartItem(shopId,item._id,item,1)}">+</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { get } from '../../utils/request'
import { reactive, toRefs, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

// Content左侧
const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit' }
]
// Tab切换相关逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)// 左侧默认tab为第一个
  const handleClickTab = (tab) => {
    // console.log(tab)// all,seckill,fruit
    currentTab.value = tab
  }
  return { currentTab, handleClickTab }
}

// 右侧列表相关逻辑
const useContentListEffect = (currentTab, shopId) => {
  const content = reactive({
    list: []
  })
  const getContentData = async () => {
    const result = await get(`api/shop/${shopId}/products`, {
      tab: currentTab.value
    })
    // console.log(result)
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data
    }
  }
  // watchEffect 不需要指定监听的属性,会自动收集依赖，只要回调函数中引用响应式的属性，那么当这些属性变更的时候，这个回调都会执行
  watchEffect(() => { getContentData() })
  const { list } = toRefs(content)
  return { list, getContentData }
}

// 购物车
const useCartEffect = () => {
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
export default {
  name: 'Content',
  setup () {
    const route = useRoute()
    const shopId = route.params.id

    const { currentTab, handleClickTab } = useTabEffect()
    const { list } = useContentListEffect(currentTab)

    const { cartList, changeCartItem } = useCartEffect()
    return {
      categories,
      list,
      currentTab,
      handleClickTab,
      shopId,
      cartList,
      changeCartItem
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viribles.scss';
@import '../../style/mixin.scss';
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
}
.category {
  overflow-y: scroll;
  height: 100%;
  width: .76rem;
  background: $search-bgColor;
  &__item {
    line-height: .4rem;
    text-align: center;
    font-size: 14px;
    color: #333;
    &--active {
      background: $bgColor;
    }
  }
}
.product {
  overflow-y: scroll;
  flex: 1;
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: .68rem;
      height: .68rem;
      margin-right: .16rem;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__sales {
      margin: .06rem 0;
      font-size: .12rem;
      color: $content-fontcolor;
    }
    &__price {
      margin: 0;
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
      bottom: .12rem;
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
</style>
