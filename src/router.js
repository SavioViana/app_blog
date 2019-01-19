import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SinglePost from './views/SinglePost.vue'
import TagsPost from './views/TagsPost.vue'
import ListPostTag from './views/ListPostTag.vue'
import About from './views/About.vue'

/*admin*/
import Login from './views/admin/Login.vue'
import Logout from './views/admin/Logout.vue'
import Register from './views/admin/Register.vue'
import PostCreate from './views/admin/post/Create.vue'
import Panel from './views/admin/Panel.vue'
import ListTag from './views/admin/tag/List.vue'
import CreateTag from './views/admin/tag/Create.vue'

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
            path: '/about',
            name: 'about',
            component: About
        },
        {
        path: '/post/:id/:slug',
        name: 'single_post',
        component:  SinglePost
        },
        {
        path: '/tag',
        name: 'tag',
        component:  TagsPost
        },
        {
        path: '/tag/:id',
        name: 'posts_tag',
        component:  ListPostTag
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
            path: 'logout', 
            name: 'logout',
            component: Logout
        },
        {
            path: '/admin', 
            name: 'admin',
            component: {
                render (c) { return c('router-view') }
            },
            meta: {
                requiresAuth: true,
            },
            children: [
                {
                    path: '/', 
                    name: 'panel',
                    component: Panel
                },
                {
                    path: 'post', 
                    name: 'post',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: 'create', 
                            name: 'postCreate',
                            component: PostCreate
                        },
                        {
                            path: 'show/:id', 
                            name: 'postShow',
                            component: SinglePost
                        },
                        {
                            path: 'edit/:id', 
                            name: 'postEdit',
                            component: PostCreate
                        },
                    ]
                },
                {
                    path: 'tag', 
                    name: 'tag',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/', 
                            name: 'tagList',
                            component: ListTag
                        },
                        {
                        path: 'create', 
                        name: 'createTag',
                        component: CreateTag
                        },
                        {
                            path: 'edit/:id', 
                            name: 'ediTag',
                            component: CreateTag
                        },
                    ]
                },
            ]
        }
    ]
})
