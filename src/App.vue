<template>
  <div class="bg-gray-100 min-h-screen font-sans">
    <header class="bg-blue-500 text-white p-4 shadow-md">
      <h1 class="text-2xl mx-64 font-bold">Alan Resto</h1>
    </header>
    <nav class="bg-white shadow-sm">
      <div class="container mx-64 flex">
        <RouterLink 
          to="/food" 
          class="px-4 py-3 text-gray-700 hover:text-blue-500"
          active-class="border-b-2 border-blue-500 text-blue-500"
        >
          Food
        </RouterLink>
        <RouterLink 
          to="/" 
          class="px-4 py-3 text-gray-700 hover:text-blue-500" 
          active-class="border-b-2 border-blue-500 text-blue-500"
        >
          Transaksi
        </RouterLink>
      </div>
    </nav>

    <main class="container mx-auto p-4 md:p-6">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>