<template>
  <div class="docker">
    <div
    class="docker__item"
    :class="{'docker__item':true,'docker__item--active':index === currentIndex}"
    v-for="(item,index) in dockerList" :key="item.icon"
    >
    <router-link :to="item.to">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{item.text}}</div>
    </router-link>
    </div>
  </div>
</template>
<!-- :class="{'docker__item':true,'docker__item--active':index === 0}"高亮判断 -->
<script>
export default {
  name: 'Docker',
  props: ['currentIndex'],
  setup () {
    const dockerList = [
      { icon: '&#xe64f;', text: '首页', to: { name: 'Home' } },
      { icon: '&#xe73d;', text: '购物车', to: { name: 'Cart' } },
      { icon: '&#xe645;', text: '订单', to: { name: 'OrderList' } },
      { icon: '&#xe66e;', text: '我的', to: { name: 'Home' } }
    ]
    return { dockerList }
  }
}
</script>
<style lang="scss" scoped>
@import '../style/viribles.scss';
.docker {
  display: flex;
  box-sizing: border-box;
  position: fixed;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  &__item {
    flex: 1;
    text-align: center;
    a {
      color: $content-fontcolor;
      text-decoration: none;
    }
    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }
    &--active {
      a {
        color: #1FA4FC;
      }
    }
  }
  &__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
