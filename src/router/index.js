import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  
  {
    path: '/forgot',
    name: 'Forgot',
    component: () => import(/* webpackChunkName: "about" */ '../views/Forgot.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
