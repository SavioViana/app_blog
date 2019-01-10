
<template>
    <div class="card">
        <header class="card-header">
            <img v-if="this.image" :src="'http://127.0.0.1:8000/api/storage/' + this.image" alt="imgae-post">
            <h2>{{this.title}}</h2>
        </header>
        <hr>
        <article class="cart-content">
            <p>{{this.body}}</p>
        </article>
        <footer class="card-footer">
            
            <slot></slot>
            <span class="author-post-card">Author: {{this.author}}</span>
            <span>{{this.date}}</span>
            
        </footer>
    </div>
</template>

<script>
    export default {
        name: "cardPost",
        props: {
            title: null,
            author: null,
            image: null,
            body: null,
            date: null,
            redirect: null,
        }
    }
</script>

<style lang="scss" >

    @import '@/sass/card_post.scss';
    
</style>