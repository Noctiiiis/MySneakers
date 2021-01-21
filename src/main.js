import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

// Components
import App from './App'
import Home from './components/Home'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/products/men', component: Products, props: { filter: 'men' } },
    { path: '/products/women', component: Products, props: { filter: 'women' } },
    { path: '/products/:id', component: ProductDetails, props: true },
    { path: '/login', component: Login },
    { path: '/logout', component: Home, props: { logout: true} },
    { path: '/register', component: Register },
    { path: '/cart', component: Cart },
    { path: '/error', component: NotFound },
    { path: '*', component: NotFound }
  ]
})

const store = new Vuex.Store({
  state: {
    token: '',
    userEmail: ''
  },
  mutations: {
    addToken(state, token) {
      state.token = token
    },
    addUserEmail(state, userEmail) {
      state.userEmail = userEmail
    }
  },
  getters: {
    token: state => {
      return state.token
    },
    userEmail: state => {
      return state.userEmail
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
