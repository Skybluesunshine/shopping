import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/home/Home.vue'
// import My from '../views/my/My.vue'
// import Order from '../views/order/Order.vue'
// import Cart from '../views/cart/Cart.vue'
// import Register from '../views/register/Register.vue'
// import Login from '../views/login/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/home/Home')
    // component: () => Home
  },
  {
    path: '/my',
    name: 'My',
    component: () => import(/* webpackChunkName: "My" */ '../views/my/My')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/register/Register')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/login/Login'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/order/:id',
    name: 'Order',
    component: () => import(/* webpackChunkName: "Order" */ '../views/order/Order')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/cart/Cart')
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "Shop" */ '../views/shop/Shop')
  },
  {
    path: '/orderList',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "OrderList" */ '../views/orderList/OrderList')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin
  if (isLogin || to.name === 'Login') {
    next()
  } else {
    next(to.name === 'Login')
  }
  // if (isLogin) { // 如果存在则往下执行
  //   next()
  // } else {//如果不存在则跳转到Login页面
  //   if (to.path === '/Login') {
  //     next()
  //   } else {
  //     next('/Login')
  //   }
  // }
})
export default router
