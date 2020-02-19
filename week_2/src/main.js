import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import ourRoutes from './routes/routes';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueRouter)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: ourRoutes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
