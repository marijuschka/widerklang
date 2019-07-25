import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/User.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/tablet',
      name: 'tablet',
      component: () => import('./views/Tablet.vue')
    },
    {
      path: '/tabletMedia',
      name: 'tabletMedia',
      component: () => import('./views/TabletMedia.vue')
    },
    {
      path: '/media',
      name: 'mediaManagement',
      component: () => import('./views/MediaManagement.vue')
    }
  ]
})
