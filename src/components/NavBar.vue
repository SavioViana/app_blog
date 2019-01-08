
<template>
    <nav class="nav">
        <ul class="nav-bar">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/">Posts</router-link></li>
            <li><router-link to="/tag">Tag</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "navBar"
}
</script>

<style lang="scss" >
    @import '@/sass/nav_bar.scss';
</style>