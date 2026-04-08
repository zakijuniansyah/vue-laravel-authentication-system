<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../api/axios';

const email = ref("");
const password = ref("");
const loading = ref(false);

const router = useRouter();

const handleLogin = async () => {
  try {
    loading.value = true;

    const response = await api.post("/login", {
      email: email.value,
      password: password.value,
    });

    localStorage.setItem("token", response.data.token);

    router.push("/dashboard");
  } catch (error) {
    alert("Login gagal");
    console.log(error.response?.data);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    
    <!-- Card -->
    <div class="w-full max-w-md p-8 rounded-2xl bg-gray-900/70 backdrop-blur-xl border border-gray-700 shadow-2xl">
      
      <!-- Title -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-white">Welcome Back 👋</h1>
        <p class="text-gray-400 text-sm mt-2">
          Login ke akun kamu
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="space-y-5">
        
        <!-- Email -->
        <div>
          <label class="text-sm text-gray-400">Email</label>
          <input 
            v-model="email"
            type="email"
            placeholder="you@email.com"
            class="w-full mt-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <!-- Password -->
        <div>
          <label class="text-sm text-gray-400">Password</label>
          <input 
            v-model="password"
            type="password"
            placeholder="••••••••"
            class="w-full mt-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <!-- Button -->
        <button 
          type="submit"
          :disabled="loading"
          class="w-full py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-2"
        >
          <span v-if="loading" class="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
          {{ loading ? "Loading..." : "Login" }}
        </button>

      </form>

      <!-- Divider -->
      <div class="flex items-center my-6">
        <div class="flex-1 h-px bg-gray-700"></div>
        <span class="px-3 text-gray-500 text-sm">OR</span>
        <div class="flex-1 h-px bg-gray-700"></div>
      </div>

      <!-- Register -->
      <p class="text-center text-sm text-gray-400">
        Belum punya akun?
        <RouterLink 
          to="/register"
          class="text-blue-500 hover:underline font-medium"
        >
          Register
        </RouterLink>
      </p>

    </div>
  </div>
</template>