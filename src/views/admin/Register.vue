<template>
    <div class="form-center">
        <div class="form">
            <h2>Register</h2>
            <div v-if="authError">
                <ul class="danger" v-for="errors in authError" :key="errors.id">
                    <li class="danger" v-for="e in errors" :key="e">
                        {{e}}
                    </li>
                </ul>
            </div>
            <form @submit.prevent="register">
                <div class="form-group">
                    <label class="form-label">Name
                        <input class="form-input" name="name" v-model="form.name"  type="text" placeholder="Name">
                    </label>
                </div>
                <div class="form-group">
                    <label class="form-label">E-mail
                        <input class="form-input" name="email" v-model="form.email" type="email" placeholder="E-mail">
                    </label>
                </div>
                <div class="form-group">
                    <label class="form-label">Password
                        <input minlength="6" class="form-input" name="password" v-model="form.password" type="password" placeholder="Password">
                    </label>
                </div>
                <div class="form-group">
                    <label class="form-label">Confirmation Password
                        <input minlength="6" class="form-input" name="password_confirmation" v-model="form.password_confirmation" type="password" placeholder="Password">
                    </label>
                </div>
                <div class="form-group">
                    <button class="btn-success btn-tab" type="submit">Log-in</button>
                </div>
            </form>
            <router-link to="/login">back login</router-link>
        </div>
    </div>
</template>

<script>

import User from '@/providers/users'

export default {
    name: "register",
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
        }
    },
    methods: {
        register: function () {

            this.$store.dispatch("auth")

            User.register(this.$data.form)
                .then(response => {
                    this.$store.commit("authSuccess", response);
                    this.$router.push({path: '/admin'})
                }).catch((error) => {
                    let err = error.response.data.errors
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