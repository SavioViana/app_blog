<template>
    <footer class="footer">
        <span>Powered by Sávio Viana</span>
    </footer>
</template>

<script>
    export default {
        name: "footerMain",
    }
</script>

<style lang="scss" >

    @import '@/sass/_variable.scss';

    .footer {
        min-height: 1em;
        text-align: center;
        padding: 2em;
        margin-top: 2em;
        background: $color-white;
    }
</style>