<template>
    <div>
        <div v-if="!!post.comments.length" class="comments">
            <ul class="comments-list">
                <li v-for="comment in post.comments" :key="comment.id" >{{comment.description}}</li>
            </ul>
        </div>
        
        <div >
            <input class="comment-input" v-model="newComment" type="text" placeholder="Paste your comment">
            <button class="btn-success" type="button" @click="addComment(post.id)" >Send</button>
        </div>

        <div v-if="errors && errors.length">
            <ul class="danger" v-for="(error, index) in errors" :key="index">
                <li class="danger" v-for="(e, i) of error" :key="i">
                    {{e[0]}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import Comment from '@/providers/comments'

export default {
    name: "comment",
    props: {
        post: {}
    },
    data() {
            return {
                newComment: null,
                errors: []
            }
            
        },
        methods: {
            addComment(postId) {
                const comment = {
                    post_id: postId,
                    description: this.$data.newComment,
                }
                
                Comment.create(comment)
                    .then(response => {
                        this.post.comments.push(response.data)
                        this.$data.newComment = ''
                    }).catch((error) => {
                        this.errors = [];
                        this.errors.push(error.response.data.errors);
                    })
            }
        }
}

</script>

<style lang="scss">
    @import '@/sass/_variable.scss';

    .comment-input {
        width: 80%;
        border-radius: 10px;
        height: 30px;
        margin-top: 20px;
        border: 1px solid blue;
        padding: 5px;
        margin-right: 10px;
    }

    .comments {

        .comments-list {

            li {
                list-style: none;
                background-color: $color-gray-light;
                border-radius: 10px;
                padding: 10px;
                margin-top: 5px;
            }
        }
    }
</style>