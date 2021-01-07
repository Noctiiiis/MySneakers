import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// Components
import App from './App.vue'
import Home from './components/Home.vue'
import Products from './components/Products.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home }, 
    { path: '/products', component: Products }, 
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
