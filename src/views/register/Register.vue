<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input">
      <input type="text" class="wrapper__input__content"
      placeholder="请输入用户名"
      v-model="username"
      >
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content"
      placeholder="请输入密码"
      v-model="password"
      >
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content"
      placeholder="确认密码"
      v-model="checkpassword"
      >
    </div>
    <div class="wrapper__register-button" @click="handleRegister">注册</div>
    <div class="wrapper__register-link" @click="handleLoginClick">已有账号去登陆</div>
    <Toast v-if="show" :msg="toastMessage"/>
  </div>
</template>
<script>
import { post } from '../../utils/request'
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import Toast, { useToastEffect } from '../../components/Toast.vue'

// 处理注册相关逻辑
const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    checkpassword: ''
  })
  const handleRegister = async () => {
    try {
      const result = await post('/api/user/register', {
        username: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        router.push('/Login')
      } else {
        showToast('注册失败')
      }
    } catch (error) {
      showToast('请求失败')
    }
  }
  const { username, password, checkpassword } = toRefs(data)
  return { username, password, checkpassword, handleRegister }
}
// 已有账号去登录逻辑处理
const useLoginEffect = () => {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push({ name: 'Login' })
  }
  return { handleLoginClick }
}

export default {
  name: 'Register',
  components: { Toast },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()

    const { username, password, checkpassword, handleRegister } = useRegisterEffect(showToast)
    const { handleLoginClick } = useLoginEffect()
    return { username, password, checkpassword, handleRegister, handleLoginClick, show, toastMessage, showToast }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viribles.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
  }
  &__input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    background: #F9F9F9;
    border: .01rem solid rgba(0,0,0,0.10);
    border-radius: .06rem;
    border-radius: .06rem;
    &__content {
      line-height: .48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__register-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    border-radius: .04rem;
    color: #fff;
    font-size: .16rem;
    text-align: center;
  }
  &__register-link {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
