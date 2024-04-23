import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { requireAuth } from "../router-guards";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // beforeEnter: requireAuth,
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('../components/BooksList.vue'),
      beforeEnter: requireAuth,
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../components/info.vue'),
      beforeEnter: requireAuth,
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
      ,beforeEnter: requireAuth,
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/Orders.vue'),
      beforeEnter: requireAuth,
    },
    {
      path: '/customers',
      name: 'customers',
      component: () => import('../views/Customers.vue'),
      beforeEnter: requireAuth,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/signup.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../components/SearchBook.vue'),
    },
    {
      path: '/order/:id',
      name: 'order',
      component: () => import('../components/BookOrder.vue'),
    },
    {
      path: '/Orderlist',
      name: 'orders',
      component: () => import('../components/Orderlist.vue'),
    }
  ]
})



export default router