import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Particles from '@/components/vueParticles.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta: {title: '个人简介'},
      component: HelloWorld
    },
    {
      path: '/particles',
      name: 'Particles',
      meta: {title: 'Particles'},
      component: Particles
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
