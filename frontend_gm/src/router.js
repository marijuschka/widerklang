import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/loginTerminal',
      name: 'loginTerminal',
      component: () => import('./views/LoginTerminal.vue')
    },
    {
      path: '/mmd',
      name: 'mmd',
      component: () => import('./views/Mmd.vue')
    },
    {
      path: '/carer',
      name: 'carer',
      component: () => import('./views/Carer.vue')
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('./views/Member.vue')
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
      path: '/mediaManagement',
      name: 'mediaManagement',
      component: () => import('./views/MediaManagement.vue')
    },
    {
      path: '/mediaManagementfT',
      name: 'mediaManagementfT',
      component: () => import('./views/MediaManagementfT.vue')
    },
    {
      path: '/mediaManagementPfleger',
      name: 'mediaManagementPfleger',
      component: () => import('./views/MediaManagementPfleger.vue')
    },
    {
      path: '/schnellzugriff',
      name: 'schnellzugriff',
      component: () => import('./views/Schnellzugriff.vue')
    }
  ]
})
