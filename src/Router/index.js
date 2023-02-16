import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/Screens/HomeLogin.vue'
import LoginCom from '@/components/LoginCom.vue'
import SignUp from '@/components/SignUp.vue'

import FoodCom from '@/components/FoodCom.vue'
import EditProfile from '@/components/EditProfile.vue'

import AddFood from '@/components/AddFood.vue'
import AddRestaurant from '@/components/AddRestaurant.vue'
import RestaurantDetails from '@/components/RestaurantDetails.vue'
import FoodDetails from '@/components/FoodDetails.vue'

import AddOrder from '@/components/AddOrder.vue'
import OrderDetails from '@/components/OrderDetails.vue'

import AddressCom from '@/components/AddressCom.vue'
import OrderHistroy from '@/components/OrderHistroy.vue'
import AddAddress from '@/components/AddAddress.vue'
import updateRestaurant from '@/components/updateRestaurant.vue'
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
  },
  {
    path: '/address',
    name: 'AddressCom',
    component: AddressCom,
    meta:{
        requireAuth:false
    }
  },
  {
    path: '/addaddress',
    name: 'AddAddress',
    component: AddAddress,
    meta:{
        requireAuth:false
    }
  },
  {
    path: '/EditProfile',
    name: 'EditProfile',
    component: EditProfile,
    meta:{
        requireAuth:false
    }
  },
  {
    path: '/AddFood',
    name: 'AddFood',
    component: AddFood,
    meta:{
        requireAuth:false
    }
  },
  {
    path: '/AddRestaurant',
    name: 'AddRestaurant',
    component: AddRestaurant,
    meta:{
        requireAuth:false
    }
  },
  {
    path: '/UpdateRestaurant/:id',
    name: 'UpdateRestaurant',
    component: updateRestaurant,
    meta:{
        requireAuth:false
    }
  },
  {
    path: '/RestaurantDetails',
    name: 'RestaurantDetails',
    component: RestaurantDetails,
    meta:{
        requireAuth:false
    }
  },
  {
    path: '/FoodDetails',
    name: 'FoodDetails',
    component: FoodDetails,
    meta:{
        requireAuth:false
    }
  },
  {
    path: '/AddOrder/:id',
    name: 'AddOrder',
    component: AddOrder,
    meta:{
        requireAuth:false
    },
    props:true
  },
  {
    path: '/OrderDetails',
    name: 'OrderDetails',
    component: OrderDetails,
    meta:{
        requireAuth:false
    }
  },
  {
    path: '/OrderHistroy',
    name: 'OrderHistroy',
    component: OrderHistroy,
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