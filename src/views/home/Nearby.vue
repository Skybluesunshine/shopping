<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="shop">
      <img class="shop__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="">
      <div class="shop__content">
        <div class="shop__content__title">name</div>
        <div class="shop__content__tags">
          <span class="shop__content__tag">月售:</span>
          <span class="shop__content__tag">起送:</span>
          <span class="shop__content__tag">基础运费:</span>
        </div>
        <p class="shop__content__highlight">slogan</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Nearby',
  setup () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viribles.scss';
.nearby {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__item {
    display: flex;
    padding-top: .12rem;
    &__img {
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: .12rem;
    border-bottom: 1px solid $content-bgColor;
    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: .16rem;
    }
    &__highlight {
      margin: .08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: #E93B3B;
    }
  }
  a {
    text-decoration: none;
  }
}

.shop {
  display: flex;
  padding-top: .12rem;
  &__img {
    margin-right: .16rem;
    width: .56rem;
    height: .56rem;
  }
  &__content {
    flex: 1;
    padding-bottom: .12rem;
    &--bordered {
      border-bottom: 1px solid $content-bgColor;
    }
    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: .16rem;
    }
    &__highlight {
      margin: .08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: #E93B3B;
    }
  }
}
</style>
