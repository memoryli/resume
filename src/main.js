// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import 'animate.css'
import 'vue-fullpage/vue-fullpage.css'
import VueParticles from 'vue-particles'
import VueFullpage from 'vue-fullpage/index'
import 'lib-flexible'
Vue.use(VueParticles)
Vue.use(VueFullpage)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
