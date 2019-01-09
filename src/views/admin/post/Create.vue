<template>
    <div>
        <header>
            <navBar admin="admin"></navBar>
        </header>
        <section >
            <div class="container" >
            <h2>Create New post</h2>
                
                <div class="form ">
                    <div v-if="errors && errors.length">
                        <ul class="danger" v-for="error of errors">
                            <li class="danger" v-for="e of error">
                                {{e[0]}}
                            </li>
                        </ul>
                    </div>
                    <form class="bg-white"  @submit.prevent="savePost" method="POST">
                        <div class="form-group">
                            <label class="form-label">Title
                                <input class="form-input" name="title" v-model="form.title" type="text" placeholder="Title">
                            </label>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Slug
                                <input class="form-input" name="slug" v-model="form.slug" type="slug" placeholder="Slug">
                            </label>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Image
                                <input class="form-input" name="image" v-model="form.image" type="slug" placeholder="Image">
                            </label>
                        </div>
                        <div class="form-group">
                            <select name="published" v-model="form.published" class="form-select" >
                                <option value="1">Public</option>
                                <option value="0">Rascunho</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Body
                                <textarea name="body" v-model="form.body" rows="8" class="form-textarea"></textarea>
                            </label>
                        </div>
                        <div class="group-check">
                            <span class="form-span">Tags:</span>
                            <div class="form-check" v-for="tag in tags">
                                <input type="checkbox" class="" :id="'tag-' + tag.id" :value="tag.id"  v-model="form.tags" >
                                <label :for="'tag-' + tag.id" class="" >{{tag.name}}</label>
                            </div>
                        </div>
                        
                        <div class="form-group--check">
                            <button class="btn-success" type="submit">Save</button>
                        </div>   
                    </form>
                    <router-link to="/admin">Back to list</router-link>
                    
                </div>
            </div>
    </section>
    </div>
</template>

<script>
import {http} from '@/providers/config'
import navBar from '@/components/NavBar.vue'
import Tag from '@/providers/tags'
import Post from '@/providers/posts'
import User from '@/providers/users'

export default {
    name: "login",
    data() {
        return {
            form: {
                title: '',
                slug: '',
                image: '',
                body: '',
                published: '1',
                tags: []

            },
            errors: [],
            token: {},
            tags: [],
        }
    },
    components: {
        navBar
    },
    beforeCreate() {
        User.authUser()
            .catch((error) =>{
                this.$router.push('/login')
            })
    },
    methods: {
        savePost: function () {
            if (this.$route.params.id){
                http.put('/post/'+this.$route.params.id, this.form, {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem('user-token')
                    },
                    
                }).then(response => {
                    this.$router.push('/admin')
                })
                .catch(e => {
                    this.errors.push(e.response.data.errors);
                })
            }else{
                http.post('/post', this.form, {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem('user-token')
                    },
                    
                }).then(response => {
                    this.$router.push('/admin')
                })
                .catch(e => {
                this.errors.push(e.response.data.errors);
                    console.log(this.errors)
                })
            }
        }, 
    },
    mounted() {
        Tag.list().then(
            response => (
                this.tags = response.data.data
            )
        )

        if(this.$route.params.id){
            Post.single(this.$route.params.id).then(
                response => (
                    this.form.title = response.data.data.title,
                    this.form.slug = response.data.data.slug,
                    this.form.image = response.data.data.image,
                    this.form.body = response.data.data.body
                )
            )
            /*
            let tagsList = this.form.tags;
            this.form.tags = [];
            [...tagsList].forEach(tag => {
                this.form.tags.push(tag.id)
            }) 
            */
            
        }
    },

              

}
</script>

<style lang="scss" >
    
@import '@/sass/form.scss';

</style>    