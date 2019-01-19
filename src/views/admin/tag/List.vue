<template>
    <div>
        <header>
            <navBarAdmin></navBarAdmin>
        </header>

                <section>
            <div class="container">
                <h1>Tags List</h1>
                <div class="table-center">
                    
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="!tags.length">
                                <tr>
                                    <td colspan="3" class="text-center">Not tag created</td>
                                </tr>
                            </template>
                            <template v-else>
                                <tr v-for="(tag, index) in tags" :key="tag.id">
                                    <th scope="row">{{index}}</th>
                                    <td>{{tag.name}}</td>
                                    <td class="link-group">
                                        <router-link :to="'tag/edit/' + tag.id">edit</router-link>
                                        <button v-on:click="deleteTag(tag.id)">delete</button>
                                        
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <router-link class="new-post" to="tag/create">New Tag</router-link>
            </div>
        </section>
    </div>
</template>

<script>

import {http} from '@/providers/config'
import navBarAdmin from '@/components/NavBarAdmin.vue'
import Tag from '@/providers/tags'
import User from '@/providers/users'

export default {
    name: "listTag",
    components: {
        navBarAdmin
    },
    mounted() {
        this.$store.dispatch('getTags')
    },
    computed: {
        tags() {
            return this.$store.getters.tags
        }
    },
    methods: {
        
        deleteTag: function (id) {
            http.delete('/tags/'+ id, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('user-token')
                },
            }).then(response => {
                location.reload()
            })
        }
    }
}
</script>