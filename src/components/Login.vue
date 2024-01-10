<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input v-model="username" type="text" placeholder="Username" />
            <input v-model="password" type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
        <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginComponent', // Renamed the component to "LoginComponent"
    data() {
        return {
            username: '',
            password: '',
            errorMessage: ''
        };
    },
    methods: {
        async login() {
            try {
                await axios.post('http://localhost:8080/api/token', {
                    username: this.username,
                    password: this.password
                });
                this.$router.push({ name: 'HomePage' });
            }catch (error) {
                this.errorMessage = 'Credenciales incorrectas';
            }
        }
    }
};
</script>

<style>
.login-container {
    max-width: 300px;
    margin: auto;
    text-align: center;
}

input {
    margin: 10px 0;
    width: 100%;
}
</style>

