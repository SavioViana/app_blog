import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SinglePost from './views/SinglePost.vue'
import TagsPost from './views/TagsPost.vue'
import Login from './views/admin/Login.vue'
import Register from './views/admin/Register.vue'
import PostCreate from './views/admin/post/Create.vue'

/*admin*/
import Panel from './views/admin/Panel.vue'

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
      component: Login
    },
    {
      path: '/register', 
      name: 'register',
      component: Register
    },
    {
      path: '/admin', 
      name: 'panel',
      component: Panel,
    },
    {
      path: '/admin/post/create', 
      name: 'postCreate',
      component: PostCreate
    },
    {
      path: '/admin/post/show/:id', 
      name: 'postShow',
      component: SinglePost
    },
    {
      path: '/admin/post/edit/:id', 
      name: 'postEdit',
      component: PostCreate
    },
    
  ]
})
