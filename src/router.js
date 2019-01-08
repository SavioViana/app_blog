import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SinglePost from './views/SinglePost.vue'
import TagsPost from './views/TagsPost.vue'
import Login from './views/admin/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post/:id',
      name: 'single_post',
      component:  SinglePost
    },
    {
      path: '/tag',
      name: 'tag',
      component:  TagsPost
    },
    {
      path: '/login', 
      name: 'login',
      component: Login},
  ]
})
