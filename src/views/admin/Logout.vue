<template>
    <div class="logout">
        <div class="logout-success" >
            <h1>Logout is success</h1>
        </div>

        <router-link class="logout-back-login" to="/login">Back login</router-link>
    </div>
</template>

<script>

    import User from '@/providers/users'

    export default {    

        name: "logout",
        
    }

</script>


<style lang="scss">
    .logout {
        text-align: center;

        .logout-success{
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 8em;
        color: green;
        font-size: 3em;
        text-transform: uppercase;
        }

        .logout-back-login {
            text-align: center;
            font-size: 2em;
            text-decoration: none;
        }
    }
    
</style>