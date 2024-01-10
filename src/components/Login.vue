<template>
    <div class="login-container">
        <h1>JWT LOGIN</h1>
        <form @submit.prevent="login" class="login-form">
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

<style scoped>
.login-container {
    max-width: 400px;
    margin: 100px auto;
    padding: 20px;
    background: rgba(255, 255, 255, 0.2);
    /* Transparencia */
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    text-align: center;
}

.login-form input {
    margin: 10px 0;
    width: 90%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.login-form button {
    width: 50%;
    padding: 10px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50;
    /* Color del botón */
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
}

.login-form button:hover {
    background-color: #45a049;
}

@media (max-width: 600px) {
    .login-container {
        margin: 20px;
        width: 90%;
    }
}
</style>

