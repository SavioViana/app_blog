<template>
    <div>
        <header>
            <navBarAdmin ></navBarAdmin>
        </header>
        <section >
            <div class="container" >
            <h2>Create New post</h2>
                
                <div class="form ">
                    <div v-if="errors && errors.length">
                        <ul class="danger" v-for="error of errors" :key="error.id">
                            <li class="danger" v-for="e of error" :key="e">
                                {{e[0]}}
                            </li>
                        </ul>
                    </div>
                    <form class="bg-white"  @submit.prevent="savePost" method="POST">
                        <div class="form-group">
                            <label class="form-label">Title
                                <input class="form-input" name="title" v-model="form.title" type="text"  placeholder="Title">
                            </label>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Slug
                                <input class="form-input" name="slug" v-model="form.slug" type="slug" placeholder="Slug">
                            </label>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Image
                                <input class="form-input" type="file" id="file" ref="file" v-on:change="handleFileUpload()">
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
                            <div class="form-check" v-for="tag in tags" :key="tag.id">
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
import navBarAdmin from '@/components/NavBarAdmin.vue'
import Tag from '@/providers/tags'
import Post from '@/providers/posts'

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
            tags: [],
        }
    },
    components: {
        navBarAdmin
    },
    methods: {
        savePost: function () {
            if (this.$route.params.id){
                
                Post.update(this.$route.params.id, this.$data.form)
                    .then(() => {
                        this.$router.push({path: '/admin'})
                    }).catch((e) => {
                        this.errors = [];
                        this.errors.push(e.response.data.errors);
                    })

            }else{
                
                Post.create(this.$data.form)
                    .then(() => {
                        this.$router.push({path: '/admin'})
                    }).catch((e) => {
                        this.errors = [];
                        this.errors.push(e.response.data.errors);
                    })
            }
        }, 
        handleFileUpload(){
            this.form.image = this.$refs.file.files[0];
        }
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
        }
    },
}
</script>

<style lang="scss" >
    
@import '@/sass/form.scss';

</style>    