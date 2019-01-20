<template>
    <div class="home">

        <navBar></navBar>

        <h1 class="tag-post-title">Tag: {{this.tag.name}}</h1>

        <div class="container-flur">  
            
            <cardPost v-for="post in tag.posts" :key="post.id"
                        :post="post"
                        
                        :redirect="post.id">
                        <router-link :to="'/post/' + post.id">More...</router-link>
            </cardPost>
        </div>        
    </div>
</template>

<script>
import navBar from '@/components/NavBar.vue'
import cardPost from '@/components/CardPost.vue'
import Post from '@/providers/posts'

export default {
    name: 'home',
    data() {
        return {
            tag: {}
        }
    },
    components: {
        navBar,
        cardPost
    },
    mounted() {
        Post.postsTag(this.$route.params.id).then(
            response => (
                this.tag = response.data.data
            )
        )   
    }
}
</script>

<style lang="scss">
    @import '@/sass/_variable.scss';
    .tag-post-title {
        text-align: center;
        font-size: 3em;
        color: $color-black-dark;
    }
</style>
