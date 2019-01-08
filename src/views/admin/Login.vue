<template>
    <div class="form-login">
        <div class="form">
            <h2>Log-In</h2>
            <form action="">
                <div class="form-group">
                    <label class="form-label">Name
                        <input class="form-input" type="text" placeholder="Name">
                    </label>
                </div>
                <div class="form-group">
                    <label class="form-label">E-mail
                        <input class="form-input" type="email" placeholder="E-mail">
                    </label>
                </div>
                <div class="form-group">
                    <label class="form-label">Password
                        <input class="form-input" type="password" placeholder="Password">
                    </label>
                </div>
                
                <div class="form-group">
                    <button class="btn-success btn-tab" type="submit">Log-in</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "login"
}
</script>

<style >
    
    .form-login{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40em;
    }
    form {
        background:rgb(230, 235, 255);
    }
    .form-group {
        padding: 1em;
    }
    .form-label {
        font-size: 1.2em;
    }
    .form-input {
        height: 2em;
        width: auto;
        display: block;
        margin-top: 0.5em;
        font-size: 1.2em;
        padding-left: 0.5em;
        padding-right: 0.5em;
    }
    .btn-success {
        padding: 0.5em;
        background: rgba(0, 153, 51, 0.9);
        color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
        border-radius: 0.5em;
        font-size: 1.2em;
        font-weight: 800;
    }
    .btn-tab {
        width: 100%;
    }
    .btn-success:hover {
        background: rgba(0, 153, 51, 2);
    }
</style>