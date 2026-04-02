<script setup>
import { useRouter } from 'vue-router';
import api from '../api/axios';

const router = useRouter();

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
  <nav style="display:flex; gap:10px; margin-bottom:20px;">
    <RouterLink to="/dashboard" >Dashboard</RouterLink>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>