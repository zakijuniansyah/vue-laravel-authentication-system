<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../api/axios';

const email = ref("");
const password = ref("");

const router = useRouter();

const handleLogin = async () => {
  try {
    const response =  await api.post("/login", {
      email: email.value,
      password: password.value,
    });

    // token
    localStorage.setItem("token", response.data.token);

    alert("login berhasil");
    router.push("/dashboard");
  } catch (error) {
    alert("login gagal");
    console.log(error.response.data);   
  }
}
</script>

<template>
  <div>
    <h1>Login</h1>

    <input v-model="email" placeholder="masukan email..."><br>
    <input v-model="password" type="password" placeholder="masukan password..."><br>

    <button @click="handleLogin">Login</button>

    <p>
      Belum punya akun?
      <RouterLink to="/register">Register</RouterLink>
    </p>
  </div>
</template>