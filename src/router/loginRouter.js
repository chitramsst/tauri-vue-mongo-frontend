import { createRouter, createWebHashHistory } from "vue-router";
import { useAuthStore } from "../store/authStore";

const loginRouter = createRouter({
  history: createWebHashHistory(),
  routes : [
    {
        path : '/login',
        name : 'login',
        component : () => import('../views/Login.vue'),
        meta: {
          template: 'LoginTemplate'
        }
    },
    {
      path : '/',
      name : 'home',
      component : () => import('../views/Home.vue'),
      meta: {
        requiresAuth: true,
        template: 'LoginTemplate'
      }
  },
  {
    path : '/dashboard',
    name : 'dashboard',
    component : () => import('../views/Dashboard.vue'),
    meta: {
      requiresAuth: true,
      template: 'AdminTemplate'
    }
},

  {
    path : '/brand',
    name : 'brand',
    component : () => import('../views/Brand.vue'),
    meta: {
      requiresAuth: true,
      template: 'AdminTemplate'
    }
},


{
  path : '/product',
  name : 'product',
  component : () => import('../views/Product.vue'),
  meta: {
    requiresAuth: true,
    template: 'AdminTemplate'
  }
},

  ], 
})


loginRouter.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!useAuthStore().isLoggedIn()) {
      next({ name: 'Login' })
    } else {
      next() 
    }
  } else {
    next() 
  }
})

export default loginRouter