<template>
    <div class="form-center">
        <div class="form">
            <h2>Log-In</h2>

            <span class="danger" v-if="authError">{{ authError }}</span>

            <form @submit.prevent="autentication" method="POST">
                <div class="form-group">
                    <label class="form-label">E-mail
                        <input class="form-input" name="email" v-model="form.email" type="email" placeholder="E-mail">
                    </label>
                </div>
                <div class="form-group">
                    <label class="form-label">Password
                        <input class="form-input" name="password" v-model="form.password" type="password" placeholder="Password">
                    </label>
                </div>
                
                <div class="form-group">
                    <button class="btn-success btn-tab" type="submit">Log-in</button>
                </div>
            
            </form>
            <router-link to="/register">Create new account</router-link>
        </div>
    </div>
</template>

<script>

import User from '@/providers/users'

export default {
    name: "login",
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
        }
    },
    methods: {
        autentication: function () {

            this.$store.dispatch("auth")

            User.login(this.$data.form)
                .then(response => {
                    this.$store.commit("authSuccess", response);
                    this.$router.push({path: '/admin'})
                }).catch((error) => {
                    let err = error.response.data.error
                    this.$store.commit("authFailed", { err })
                })
        }
    },
    computed: {
        authError(){
            return this.$store.getters.authError
        }
    }
}
</script>

<style lang="scss" >
    
    @import '@/sass/form.scss';
    
</style>