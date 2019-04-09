import Vue from 'vue'
import Router from 'vue-router'
import KHE18 from './views/KHE18.vue'
import hacksu_escape from './views/hacksu_escape.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'hacksu-escape',
      component: hacksu_escape
    },
    {
      path: '/KHE18',
      name: 'KHE18',
      component: KHE18
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
