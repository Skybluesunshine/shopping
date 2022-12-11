import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import My from '../views/my/My.vue'
import Order from '../views/order/Order.vue'
import Cart from '../views/cart/Cart.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => Home
  },
  {
    path: '/my',
    name: 'my',
    component: () => My
  },
  {
    path: '/order',
    name: 'order',
    component: () => Order
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => Cart
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
