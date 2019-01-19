
<template>
    <nav class="nav">
        <ul class="nav-bar">
            <li ><router-link to="/admin">Posts</router-link></li>
            <li ><router-link to="/admin/tag">Tag</router-link></li>
            <li ><router-link to="/admin/logout">Sair</router-link></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "navBarAdmin",
        props: {
    
        }
}
</script>

<style lang="scss" >
    @import '@/sass/nav_bar.scss';
</style>