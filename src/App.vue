<template>
  <div class="bg-gray-100 min-h-screen font-sans">
    <div class="sticky top-0 z-50">
      <header class="bg-sky-500 text-white p-4 shadow-md">
        <h1 class="text-2xl mx-64 font-bold">Alan Resto</h1>
      </header>
      <nav class="bg-white shadow-sm">
        <div class="container mx-64 flex">
          <RouterLink 
            to="/food" 
            class="px-4 py-3 text-gray-700 hover:text-sky-500"
            active-class="border-b-2 border-sky-500 text-sky-500"
          >
            Food
          </RouterLink>
          <RouterLink 
            to="/" 
            class="px-4 py-3 text-gray-700 hover:text-sky-500" 
            active-class="border-b-2 border-sky-500 text-sky-500"
          >
            Transaksi
          </RouterLink>
        </div>
      </nav>
    </div>
    <main class="container mx-auto p-4 md:p-6 pt-8">
    <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>