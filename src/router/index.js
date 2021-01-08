import Vue from 'vue'
import Router from 'vue-router'
import UpLoad from '@/client/upload'
import Home from '@/client/home'
import List from '@/client/list'
import Vedio from '@/client/vedio'
import User from '@/client/user'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/vedio',
      component: Vedio
    },
    {
      path: '/user',
      component: User
    }
  ]
})
