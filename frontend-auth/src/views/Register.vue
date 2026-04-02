<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import api from '../api/axios';

const name = ref("");
const email = ref("");
const password = ref("");

const router = useRouter();

const handleRegister = async () => {
  try {
    await api.post("/register", {
      name: name.value,
      email: email.value,
      password: password.value,
    });

    alert("registrasi berhasil");
    router.push("/");
  } catch (error) {
    alert("registrasi gagal");
    console.log(error.response.data);
  }
}
</script>

<template>
  <div>
    <h1>Register</h1>

    <input v-model="name" placeholder="Masukan nama..." ><br>
    <input v-model="email" placeholder="Masukan email..."><br>
    <input v-model="password" type="password" placeholder="Masukan password..."><br>

    <button @click="handleRegister">Register</button>

    <p>
      Sudah punya akun?
      <RouterLink to="/">Login</RouterLink>
    </p>
  </div>
</template>