import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false



router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some( record => record.meta.requiresAuth)
    const access_token = store.state.access_token
    //console.log("to: " + store.state.isLoggedIn)
    if(requiresAuth && !access_token){
        next('/login')
    }else if ((to.path == '/login') && access_token){
        next('/admin')
    }else{
        next()
    }
})

Axios.interceptors.response.use(null, (error) => {
    if(error.response.status = 401){
        state.commit('logout')
        state.commit('tokenExpirado')
        router.push('/login')
    }
    console.log('error')
    return Promise.reject(error)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
