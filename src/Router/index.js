import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/Screens/HomeLogin.vue'
import LoginCom from '@/components/LoginCom.vue'
import SignUp from '@/components/SignUp.vue'

import FoodCom from '@/components/FoodCom.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'LoginCom',
    component: LoginCom,
    meta:{
        requireAuth:false
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta:{
        requireAuth:false
    }
  },
  {
    path: '/home',
    name: 'Foods',
    component: FoodCom,
    meta:{
        requireAuth:false
    }
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.afterEach((to,from,next)=>{
//    if(to.meta.requireAuth && isLoggedin) {
//        next.to("/login");
//    }
// });
export default router