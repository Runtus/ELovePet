import Vue from 'vue'
import VueRouter from 'vue-router'

import pet_community from "../views/pet_community";
import pet_business from "../views/pet_business";
import pet_market from "../views/pet_market";
import index from "../views/index";
import login from "../views/login";
import pet_consult from "../views/pet_community/pet_consult";
import pet_movie from "../views/pet_community/pet_movie";
import pet_star from "../views/pet_community/pet_star";

Vue.use(VueRouter)

  const routes = [
    {
      path: '/pet_community',
      name: 'pet_community',
      redirect:'/pet_community/pet_consult',
      component: pet_community,
      children: [
        {
          path: '/pet_community/pet_movie',
          name: 'pet_movie',
          component: pet_movie
        },
        {
          path: '/pet_community/pet_consult',
          name: 'pet_consult',
          component: pet_consult
        },
        {
          path: '/pet_community/pet_star',
          name: 'pet_star',
          component: pet_star
        }
      ]
    },
    {
      path: '/pet_business',
      name: 'pet_business',
      component: pet_business
    },
    {
      path: '/pet_market',
      name: 'pet_market',
      component: pet_market
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
