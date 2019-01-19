<template>
    <div>
        <navBar></navBar>
        
        <section class="container">
        <article>
            
            <h1 class="post-title">{{this.post.title}}</h1>
            <img :src="'http://127.0.0.1:8000/api/storage/' + this.post.image" alt="">

            <p class="post-body">{{this.post.body}}</p>
            </article>

            <div class="post-footer">
                <div class="post-tag">
                    <span>Tags: </span>
                    <a v-for="tag in post.tags" :key="tag.id" href="#">{{tag.name}}</a>
                </div>
                <span class="author-post" >Author: {{this.post.author.name}}</span>
                <span class="post-date">{{this.post.created_at}}</span>
            </div>
            <router-link v-if="this.user != null" :to="'/admin/post/edit/' + post.id">Editar</router-link>
        </section>
    </div>
</template>

<script>

import navBar from '@/components/NavBar.vue'
import Post from '@/providers/posts'
import User from '@/providers/users'

export default {
    name: "SinglePost",
    props: ['id'],
    data() {
        return {
            post: {},
            user: null,
            image: null
        }
    },
    components: {navBar},
    beforeCreate() {
        User.authUser()
            .then((response) => {
                this.user = response;
            }).catch( (err) => {

            })
    },
    mounted() {
        
        Post.single(this.$route.params.id).then(
            response => (
                this.post = response.data.data
            )
        )
    },
}
</script>


<style lang="scss" >

    @import '@/sass/single_post.scss';

    .author-post {
        margin-right: 1em;
        color: $color-black-dark;
    }

    img {
        width: 100%;
        height: 100%;
    }
</style>