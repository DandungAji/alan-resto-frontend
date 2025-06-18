<template>
  <div class="bg-gray-100 min-h-screen font-sans">
    <div class="print:hidden">
      <header class="bg-blue-500 text-white p-4 shadow-md px-32">
        <h1 class="text-2xl font-bold">
          <img src="/logo_alan.png" alt="" srcset="" class="w-4" />Alan Resto
        </h1>
      </header>
      <nav class="bg-white shadow-sm">
        <div class="container mx-32 flex">
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
    </div>

    <main class="container mx-auto p-4 md:p-6">
      <RouterView />
    </main>

    <footer class="text-center py-5 print:hidden">
      <p class="text-sm text-gray-500">
        Alan Resto &copy; 2020 | Developed by Alan Creative
      </p>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
