<template>
    <div class="form-login">
        <div class="form">
            <h2>Register</h2>
            
            <ul v-if="errors && errors.length">
                <li v-for="error of errors">
                    {{error}}
                </li>
            </ul>
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

import {http} from '@/providers/config'

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
            errors: [],
            user: {},
        }
    },
    methods: {
        register: function () {

            http.post('/register', this.form).then(response => {
                this.user = response.data
                localStorage.setItem('user-token', this.user.token)
                this.$router.push('/admin')
            })
            .catch(e => {
                this.errors.push(e.response.data.errors)
            })

        }
    },
}
</script>

<style >
    
    .form-login{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40em;
    }
    form {
        background:rgb(230, 235, 255);
    }
    .form-group {
        padding: 1em;
    }
    .form-label {
        font-size: 1.2em;
    }
    .form-input {
        height: 2em;
        width: auto;
        display: block;
        margin-top: 0.5em;
        font-size: 1.2em;
        padding-left: 0.5em;
        padding-right: 0.5em;
    }
    .btn-success {
        padding: 0.5em;
        background: rgba(0, 153, 51, 0.9);
        color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
        border-radius: 0.5em;
        font-size: 1.2em;
        font-weight: 800;
    }
    .btn-tab {
        width: 100%;
    }
    .btn-success:hover {
        background: rgba(0, 153, 51, 2);
    }
</style>