<template>
    <div class="home">
        <headerMain></headerMain>

        <div class="container">  
            <cardPost v-for="post in posts" :key="post.id"
                        :post="post"
                        
                        :redirect="post.id">
                        <router-link :to="'/post/' + post.id + '/' + post.slug ">More...</router-link>
            </cardPost>  
        </div>          
    </div>
</template>

<script>
import headerMain from '@/components/HeaderMain.vue'
import cardPost from '@/components/CardPost.vue'
import Post from '@/providers/posts'

export default {
    name: 'home',
    data() {
        return {
            posts: {},
        }
    },
    components: {
        headerMain,
        cardPost
    },
    mounted() {
        Post.list().then(
            response => (
                this.posts = response.data.data
            )
        )
    }
}
</script>

