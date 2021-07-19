import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Product from '../views/Product.vue';
import CartView from '../views/CartView.vue';
import Orders from '../views/Orders.vue';
import AllProduct from '../views/AllProduct.vue';
import SaveProduct from '../views/SaveProduct.vue';
import ViewProduct from '../views/ViewProduct.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/product/:name/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/allproduct',
    name: 'AllProduct',
    component: AllProduct
  },
  {
    path: '/saveproduct',
    name: 'SaveProduct',
    component: SaveProduct
  },
  {
    path: '/product/:id',
    name: 'ViewProduct',
    component: ViewProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
