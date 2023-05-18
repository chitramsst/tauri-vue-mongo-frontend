import { createRouter, createWebHashHistory } from "vue-router";
import { useAuthStore } from "../store/authStore";

const loginRouter = createRouter({
  history: createWebHashHistory(),
  routes : [
    {
        path : '/',
        name : 'login',
        component : () => import('../views/Login.vue')
    },
    {
      path : '/dashboard',
      name : 'dashboard',
      component : () => import('../views/Dashboard.vue'),
      meta: {
        requiresAuth: true
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