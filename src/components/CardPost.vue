
<template>
    <div class="card">
        <header class="card-header">
            <img v-if="this.post.image" :src="'http://127.0.0.1:8000/api/storage/' + this.post.image" alt="imgae-post">
            <h2>{{this.post.title}}</h2>
        </header>
        <hr>
        <article class="cart-content">
            <p>{{this.post.body}}</p>
        </article>
        <footer class="card-footer">
            
            <slot></slot>
            <span class="author-post-card">Author: {{post.author[0].name}}</span>
            <span>{{this.post.created_at}}</span>
        </footer>
        <hr>
        <comment :post="post"></comment>
    </div>
</template>

<script>
    import comment from '@/components/Comment.vue'
    
    export default {
        name: "cardPost",
        props: {
            post: {},
            redirect: null,
        },
        data() {
            return {
                newComment: null,
                errors: []
            }
            
        },components: {
            comment
        },
        
    }
</script>

<style lang="scss" >

    @import '@/sass/card_post.scss';
    
</style>