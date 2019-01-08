<template>
    <div>
        <navBar></navBar>
        
        <section class="container">
        <article>
            <h1 class="post-title">{{this.post.title}}</h1>
            
            <p class="post-body">{{this.post.body}}</p>
            </article>

            <div class="post-footer">
                <div class="post-tag">
                    <span>Tags: </span>
                    <a href="#">moveis</a>
                    <a href="#">moveis</a>
                    <a href="#">moveis</a>
                    <a href="#">moveis</a>
                </div>
                <span class="post-date">{{this.post.created_at}}</span>
            </div>
            
        </section>
    </div>
</template>

<script>

import navBar from '@/components/NavBar.vue'
import Post from '@/providers/posts'

export default {
    name: "SinglePost",
    props: ['id'],
    data() {
        return {
            post: {},
        }
    },
    components: {navBar},
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

</style>