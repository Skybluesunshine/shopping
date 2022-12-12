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
    component: () => import(/* webpackChunkName: "Login" */ '../views/login/Login')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "Order" */ '../views/order/Order')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/cart/Cart')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
