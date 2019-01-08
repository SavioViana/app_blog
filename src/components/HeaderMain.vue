<template>
    <header class="header-main">
        <div class="header-content">
            <h1>My Blog</h1>
        </div>

        <navBar></navBar>
        
    </header>
</template>

<script>

    import navBar from '@/components/NavBar.vue'
    
    export default {
        name: "headerMain",
        components: {
            navBar
        }
    }
</script>

<style lang="scss">
    @import '@/sass/header.scss';
</style>