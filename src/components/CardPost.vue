
<template>
    <div class="card">
        <header class="card-header">
            <h2>{{this.title}}</h2>
        </header>
        <hr>
        <article class="cart-content">
            <p>{{this.body}}</p>
        </article>
        <footer class="card-footer">
            
            <slot></slot>
            
            <span>{{this.date}}</span>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "cardPost",
        props: {
            title: null,
            body: null,
            date: null,
            redirect: null,
        }
    }
</script>

<style lang="scss" >

    @import '@/sass/card_post.scss';
    
</style>