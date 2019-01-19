<template>
    <div>
        <header>
            <navBarAdmin ></navBarAdmin>
        </header>
        <section >
            <div class="container" >
            <h2>Create New tag</h2>
                
                <div class="form ">
                    <div v-if="errors && errors.length">
                        <ul class="danger" v-for="error of errors" :key="error">
                            <li class="danger" v-for="e of error" :key="e">
                                {{e[0]}}
                            </li>
                        </ul>
                    </div>
                    <form class="bg-white"  @submit.prevent="saveTag" method="POST">
                        <div class="form-group">
                            <label class="form-label">Name
                                <input class="form-input" name="name" v-model="form.name" type="text" placeholder="Title">
                            </label>
                        </div>
                        
                        <div class="form-group--check">
                            <button class="btn-success" type="submit">Save</button>
                        </div>   
                    </form>
                    <router-link to="/admin/tag">Back to list</router-link>
                    
                </div>
            </div>
    </section>
    </div>
</template>

<script>

import navBarAdmin from '@/components/NavBarAdmin.vue'
import Tag from '@/providers/tags'

export default {
    name: "createPost",
    data() {
        return {
            form: {
                name: '',
            },
            errors: [],
        }
    },
    components: {
        navBarAdmin
    },
    methods: {
        saveTag: function () {
            if (this.$route.params.id){
                Tag.update(this.$route.params.id, this.$data.form)
                    .then(() => {
                        this.$router.push({path: '/admin/tag'})
                    }).catch((e) => {
                        this.errors.push(e.response.data.errors);
                    })
            }else{
                Tag.create(this.$data.form)
                    .then(() => {
                        this.$router.push({path: '/admin/tag'})
                    }).catch((e) => {
                        this.errors.push(e.response.data.errors);
                    })
            }
        }, 
    },
    mounted(){
        if(this.$route.params.id){
            Tag.single(this.$route.params.id).then(
                response => (
                    this.form.name = response.data.data.name
                )
            )
        }
    }
}
</script>

<style lang="scss" >
    
    @import '@/sass/form.scss';

</style>  