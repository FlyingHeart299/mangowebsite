import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import moreitem from '@/components/more-item'
import item from '@/components/item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/moreitem',
      name: 'moreitem',
      component: moreitem
    },
    {
      path: '/item/:id',
      name: 'item',
      component: item
    },
  ]
})
