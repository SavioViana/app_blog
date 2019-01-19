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
            
                            <tr v-for="(post, index) in posts">
                                <th scope="row">{{index}}</th>
                                <td>{{post.title}}</td>
                                <td>{{post.author.name}}</td>
                                <td>{{post.slug}}</td>
                                <td class="link-group">
                                    <router-link :to="'admin/post/edit/' + post.id">edit</router-link>
                                    <router-link :to="'admin/post/show/' + post.id">show</router-link>
                                    <button v-on:click="deletePost(post.id)">delete</button>
                                    
                                </td>
                            </tr>
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
import Post from '@/providers/posts'
import User from '@/providers/users'

export default {
    name: "panel",
    data() {
        return {
            posts: {},
            errors: []
        }
    },
    components: {navBarAdmin},
    beforeCreate() {
        User.authUser()
            .catch((error) =>{
                this.$router.push('/login')
            })
    },
    mounted() {
        Post.list().then(
            response => (
                this.posts = response.data.data
            )
        )
    },
    methods: {
        deletePost: function (id) {
            http.delete('/posts/'+ id, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('user-token')
                },
                
            }).then(response => {
                location.reload()
            })
            .catch(e => {
                //this.errors.push(e.response.data.errors);
            })
        }
    }
}
</script>


<style lang="scss">
    
@import '@/sass/table.scss';

</style>
