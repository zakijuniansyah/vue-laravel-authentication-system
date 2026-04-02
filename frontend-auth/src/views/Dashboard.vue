<script setup>
import { onMounted, ref } from 'vue';
import api from '../api/axios';
import { useRouter } from 'vue-router';

  const user = ref(null);
  const router = useRouter();

  onMounted(async () => {
    try {
      const response = await api.get("/user");
      user.value = response.data;
    } catch (error) {
      console.log("gagal ambil user", error);
    }
  })

  

  const handleLogout = async () => {
    try {
      await api.post("/logout");

      localStorage.removeItem("token");

      alert("logout berhasil");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }
</script>

<template>
  <div>
    <h1>Dashboard</h1>

    <div v-if="user">
      <p>welcome : {{ user.name }}</p>
      <p>email : {{ user.email }}</p>
    </div>

    <button @click="handleLogout">Logout</button>
  </div>
</template>