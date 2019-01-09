<template>
    <div class="home">
        <navBar></navBar>
        <h1 class="tag-post-title">Tag: {{this.tag.name}}</h1>
        <div class="container-flur">  
            <cardPost v-for="post in posts" 
                        :title="post.title"
                        :author="post.author.name"
                        :body="post.body" 
                        :date="post.created_at"
                        :redirect="post.id">
                        <router-link :to="'/post/' + post.id">More...</router-link>
            </cardPost>  
        </div>          
    </div>
</template>

<script>
// @ is an alias to /src
import headerMain from '@/components/HeaderMain.vue'
import cardPost from '@/components/CardPost.vue'
import navBar from '@/components/NavBar.vue'
import Post from '@/providers/posts'
import Tag from '@/providers/tags'
export default {
    name: 'home',
    data() {
        return {
            posts: {},
            tag: {}
        }
    },
    components: {
        navBar,
        cardPost
    },
    mounted() {
        Tag.single(this.$route.params.id).then(
            response => (
                this.tag = response.data.data
            )
        )

        Post.postsTag(this.$route.params.id).then(
            response => (
                this.posts = response.data.data
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
