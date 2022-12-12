<template>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="icon iconfont">&#xe64f;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="icon iconfont">&#xe73d;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="icon iconfont">&#xe645;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="icon iconfont">&#xe66e;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Docker'
}
</script>
<style lang="scss" scoped>
@import '../../style/viribles.scss';
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
    /* a {
      color: $content-fontcolor;
      text-decoration: none;
    } */
    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }
    &--active {
      /* a { */
        color: #1FA4FC;
      /* } */
    }
  }
  &__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
