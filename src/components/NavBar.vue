
<template>
    <nav class="nav">
        <ul class="nav-bar">
            <li ><router-link to="/">Home</router-link></li>
            <li ><router-link to="/about">About</router-link></li>
            <li ><router-link to="/">All Posts</router-link></li>
            <li ><router-link to="/tag">Tags</router-link></li>
            <li ><router-link to="/login">Login</router-link></li>

        </ul>
    </nav>
</template>

<script>
    export default {
        name: "navBar",
        props: {
            
        }
}
</script>

<style lang="scss" >
    @import '@/sass/nav_bar.scss';
</style>