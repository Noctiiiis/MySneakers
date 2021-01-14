import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// Components
import App from './App'
import Home from './components/Home'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import NotFound from './components/NotFound'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/products/men', component: Products, props: { filter: 'men' } },
    { path: '/products/women', component: Products, props: { filter: 'women' } },
    { path: '/products/:id', component: ProductDetails, props: true },
    { path: '/error', component: NotFound },
    { path: '*', component: NotFound }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
