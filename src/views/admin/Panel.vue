<template>
    <div>
        <header>
            <navBarAdmin></navBarAdmin>
        </header>

        <section>
            <div class="container">
                <h1>Post List</h1>
                <div class="table-center">
                    
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">slug</th>
                            <th scope="col">options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="!posts.length">
                                <tr>
                                    <td colspan="5" class="text-center">Not post created</td>
                                </tr>
                            </template>
                            <template v-else>
                                <tr v-for="(post, index) in posts" :key="post.id">
                                    <th scope="row">{{index}}</th>
                                    <td>{{post.title}}</td>
                                    <td>{{post.author[0].name}}</td>
                                    <td>{{post.slug}}</td>
                                    <td class="link-group">
                                        <router-link :to="'admin/post/edit/' + post.id">edit</router-link>
                                        <router-link :to="'admin/post/show/' + post.id">show</router-link>
                                        <button v-on:click="deletePost(post.id)">delete</button>
                                        
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <router-link class="new-post" to="admin/post/create">New Post</router-link>
            </div>
        </section>

    </div>
</template>

<script>
import navBarAdmin from '@/components/NavBarAdmin.vue'
import {http} from '@/providers/config'

export default {
    name: "panel",
    components: {
        navBarAdmin
    },
    mounted() {
        this.$store.dispatch('getPosts')
    },
    computed: {
        posts() {
            return this.$store.getters.posts
        }
    },
    methods: {
        deletePost: function (id) {
            http.delete('/posts/'+ id, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('user-token')
                },
            }).then(() => {
                location.reload()
            })
        }
    }
}
</script>


<style lang="scss">
    
@import '@/sass/table.scss';

</style>
