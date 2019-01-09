<template>
    <div>
        <header>
            <navBar admin="admin"></navBar>
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
            
                            <tr v-for="(tag, index) in tags">
                                <th scope="row">{{index}}</th>
                                <td>{{tag.name}}</td>
                                <td class="link-group">
                                    <router-link :to="'tag/edit/' + tag.id">edit</router-link>
                                    <button v-on:click="deleteTag(tag.id)">delete</button>
                                    
                                </td>
                            </tr>
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
import navBar from '@/components/NavBar.vue'
import Tag from '@/providers/tags'

export default {
    name: "listTag",
    data() {
        return {
            tags: {},
            errors: []
        }
    },
    components: {navBar},
    mounted() {
        Tag.list().then(
            response => (
                this.tags = response.data.data
            )
        )
    },
    methods: {
        
        deleteTag: function (id) {
            http.delete('/tag/'+ id, {
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