
<template>
    <div class="card">
        <header class="card-header">
            <img v-if="this.image" :src="'http://127.0.0.1:8000/api/storage/' + this.image" alt="imgae-post">
            <h2>{{this.title}}</h2>
        </header>
        <hr>
        <article class="cart-content">
            <p>{{this.body}}</p>
        </article>
        <footer class="card-footer">
            
            <slot></slot>
            <span class="author-post-card">Author: {{this.author}}</span>
            <span>{{this.date}}</span>
        </footer>
        <hr>
        <div class="comments">
            <ul class="comments-list">
                <li>sdfghjklçsadjasdhkah dkadhaksdhsakjxncn,cmns,hdjashdkjashd asdasdg</li>
                <li>sdfghjklçsadjasdhkah dkadhaksdhsakjxncn,cmns,hdjashdkjashd asdasdg</li>
            </ul>
        </div>

        <div >
            <input class="comment-input" type="text" placeholder="Paste your comment">
            <button class="btn-success" >Send</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cardPost",
        props: {
            title: null,
            author: null,
            image: null,
            body: null,
            date: null,
            redirect: null,
        }
    }
</script>

<style lang="scss" >

    @import '@/sass/card_post.scss';
    
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