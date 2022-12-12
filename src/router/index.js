import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import My from '../views/my/My.vue'
import Order from '../views/order/Order.vue'
import Cart from '../views/cart/Cart.vue'
import Register from '../views/register/Register.vue'
import Login from '../views/login/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => Home
  },
  {
    path: '/my',
    name: 'My',
    component: () => My
  },
  {
    path: '/register',
    name: 'Register',
    component: () => Register
  },
  {
    path: '/login',
    name: 'Login',
    component: () => Login
  },
  {
    path: '/order',
    name: 'Order',
    component: () => Order
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => Cart
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
