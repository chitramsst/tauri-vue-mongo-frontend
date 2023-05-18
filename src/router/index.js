import { createRouter, createWebHashHistory } from "vue-router";

const loginRouter = createRouter({
  history: createWebHashHistory(),
  routes : [
    {
        path : '/',
        name : 'login',
        component : () => import('../components/Login.vue')
    },
  ], 
})

export default loginRouter