<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">
        &#xe60c;
      </div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe600;</span>
        <input
          class="search__content__input"
          placeholder="请输入商品名称"
        />
      </div>
    </div>
    <!-- v-show="item.imgUrl"防止加载时图片抖动 -->
    <ShopInfo :item="item" v-show="item.imgUrl"/>
  </div>
</template>
<script>
import { get } from '../../utils/request'
import { useRoute, useRouter } from 'vue-router'
import ShopInfo from '../../components/ShopInfo.vue'
import { reactive, toRefs } from 'vue'
// 点击回退操作
const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}
// 获取当前商铺信息
const useShopInfoEffect = () => {
  const route = useRoute()
  // console.log(route.params.id)
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`api/shop/${route.params.id}`)
    console.log(result.data)
    if (result?.errno === 0) {
      data.item = result.data
    }
  }
  getItemData()
  const { item } = toRefs(data)
  return { item, getItemData }
}

export default {
  name: 'Shop',
  components: { ShopInfo },
  setup () {
    const { handleBackClick } = useBackRouterEffect()
    const { item, getItemData } = useShopInfoEffect()
    return { handleBackClick, item, getItemData }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viribles.scss';
.wrapper {
  padding: 0 .18rem;
}
.search {
  display: flex;
  margin: .14rem 0 .04rem 0;
  line-height: .32rem;
  &__back {
    width: .3rem;
    font-size: .24rem;
    color: #B6B6B6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: .16rem;
    &__icon {
      width: .44rem;
      text-align: center;
      color: $search-fontColor;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      height: .32rem;
      font-size: .14rem;
      color: $content-fontcolor;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
