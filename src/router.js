import Vue from 'vue'
import Router from 'vue-router'
import Photo from '@/components/Photo'
import Aboutme from '@/components/Aboutme'
import Bokepage from '@/components/Bokepage'
import Body from '@/components/Body'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Body
    },
    {
      path: '/aboutme',
      component: Aboutme
    },
    {
      path: '/photo',
      component: Photo
    },
    {
      path: '/bokepage',
      component: Bokepage
    }
  ],
  mode: 'history'
})