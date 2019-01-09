
<template>
    <nav class="nav">
        <ul class="nav-bar">
            <li v-if="admin == null"><router-link to="/">Home</router-link></li>
            <li v-if="admin == null"><router-link to="/">Posts</router-link></li>
            <li v-if="admin == null"><router-link to="/tag">Tag</router-link></li>
            <li v-if="admin == null"><router-link to="/login">Login</router-link></li>
            
            <li v-if="admin"><router-link to="/admin">Posts</router-link></li>
            <li v-if="admin"><router-link to="/admin/tag">Tag</router-link></li>
            <li v-if="admin"><router-link to="/admin/logout">Sair</router-link></li>

        </ul>
    </nav>
</template>

<script>
    export default {
        name: "navBar",
        props: {
            admin: null
        }
}
</script>

<style lang="scss" >
    @import '@/sass/nav_bar.scss';
</style>