
<template>
    <nav class="nav">
        <ul class="nav-bar">
            <li ><router-link to="/admin">Posts</router-link></li>
            <li ><router-link to="/admin/tag">Tag</router-link></li>
            <li ><a @click="logout">Logout</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "navBarAdmin",
        computed: {

        },
        methods: {
            logout() {
                this.$store.commit("logout")
                this.$router.push({path: '/login'})
            }
        }
}
</script>

<style lang="scss" >
    @import '@/sass/nav_bar.scss';
</style>