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
});

const handleLogout = async () => {
  try {
    await api.post("/logout");
    localStorage.removeItem("token");
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white flex">
    
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-950 border-r border-gray-800 p-6 hidden md:block">
      <h2 class="text-2xl font-bold mb-8">MyApp 🚀</h2>

      <nav class="space-y-4">
        <a href="#" class="block px-4 py-2 rounded-lg bg-gray-800">Dashboard</a>
        <a href="#" class="block px-4 py-2 rounded-lg hover:bg-gray-800 transition">Profile</a>
        <a href="#" class="block px-4 py-2 rounded-lg hover:bg-gray-800 transition">Settings</a>
      </nav>
    </aside>

    <!-- Main -->
    <div class="flex-1 flex flex-col">
      
      <!-- Navbar -->
      <header class="flex items-center justify-between px-6 py-4 bg-gray-950 border-b border-gray-800">
        <h1 class="text-xl font-semibold">Dashboard</h1>

        <button 
          @click="handleLogout"
          class="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          Logout
        </button>
      </header>

      <!-- Content -->
      <main class="p-6">
        
        <!-- Welcome Card -->
        <div class="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
          <h2 class="text-2xl font-bold mb-2">
            👋 Welcome, {{ user?.name || "User" }}
          </h2>
          <p class="text-gray-400">
            Ini adalah dashboard kamu
          </p>
        </div>

        <!-- User Info -->
        <div v-if="user" class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div class="bg-gray-800 p-5 rounded-xl border border-gray-700">
            <p class="text-sm text-gray-400">Nama</p>
            <p class="text-lg font-semibold">{{ user.name }}</p>
          </div>

          <div class="bg-gray-800 p-5 rounded-xl border border-gray-700">
            <p class="text-sm text-gray-400">Email</p>
            <p class="text-lg font-semibold">{{ user.email }}</p>
          </div>

        </div>

      </main>

    </div>
  </div>
</template>