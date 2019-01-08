<template>
    <div id="app">
        <router-view></router-view>

        <footerMain></footerMain>
        
    </div>
</template>

<script>

    import footerMain from '@/components/FooterMain.vue'
export default {
    name: 'app',
    data() {
        return {
            
        }
    },
    components: {
        footerMain
    }
}
</script>

<style lang="scss">
    @import '@/sass/app.scss';
</style>
