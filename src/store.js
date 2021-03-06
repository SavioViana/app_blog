import Vue from 'vue'
import Vuex from 'vuex'
import User from '@/providers/users'
import Post from '@/providers/posts'
import Tag from '@/providers/tags'

Vue.use(Vuex)

const token = User.getAcessToken();

export default new Vuex.Store({
    state: {
        welcome: "Welcome",
        access_token: token,
        isLoggedIn: !!token,
        loading: false,
        auth_error: null,
        posts: [],
        tags: [],
    },
    getters: {
        isLoading(state){
            return state.loading
        },

        isLoggedIn(state){
            return state.isLoggedIn
        },
        
        authError(state){
            return state.auth_error
        },

        access_token(state){
            return state.access_token
        },

        posts(state){
            return state.posts
        },

        tags(state){
            return state.tags
        }
    },
    mutations: {
        auth(state){
            state.loading = true
            state.auth_error = null
        },

        authSuccess(state, payload){
            state.auth_error = null
            state.isLoading = false
            state.isLoggedIn = true
            state.access_token = payload.token 

            localStorage.setItem("user-token", state.access_token)
        },

        authFailed(state, payload){
            state.isLoading = false
            state.auth_error = payload.err
        },
        
        logout(state){
            state.access_token = null
            state.isLoggedIn = false
            localStorage.removeItem("user-token")
        },

        tokenExpirado(state){
            state.auth_error = 'Token Expirado'
        },

        updatePosts(state, payload){
            state.posts = payload
        },

        updateTags(state, payload) {
            state.tags = payload
        },
    },
    actions: {
        auth(context){
            context.commit("auth")
        },
        getPosts(context){
            Post.list().then(
                response => (
                    context.commit('updatePosts', response.data.data )
                )
            )
        },

        getTags(context) {
            Tag.list().then(
                response => (
                    context.commit('updateTags', response.data.data )
                )
            )
        },

    }
})
