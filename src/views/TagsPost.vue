<template>
    <div>
        <navBar></navBar>
        <section class="container">
        <h1 class="tag-header">All Tags My Blog</h1>
        <div class="list-tag">
            <ul>
                <li v-for="tag in tags"><router-link :to="'/tag/' + tag.id">{{tag.name}}</router-link></li>
            </ul>
        </div>
        </section>
    </div>
</template>

<script>
import navBar from '@/components/NavBar.vue'
import Tag from '@/providers/tags'
export default {
    name: "tagsPost",
    data() {
        return {
            tags: {}
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
}
</script>

<style lang="scss" >
    @import '@/sass/tags_post.scss';
</style>