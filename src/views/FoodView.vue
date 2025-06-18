<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import MenuList from "../components/MenuList.vue";
import AddMenuForm from "../components/AddMenuForm.vue";

const currentView = ref("list");
const menuItems = ref([]);
const isLoading = ref(true);

async function fetchProducts() {
  try {
    isLoading.value = true;
    const response = await axios.get("http://127.0.0.1:8000/api/products");
    menuItems.value = response.data;
  } catch (error) {
    console.error("Gagal mengambil data produk:", error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(fetchProducts);

function showAddForm() {
  currentView.value = "form";
}

function handleProductAdded() {
  currentView.value = "list";
  fetchProducts();
}
</script>

<template>
  <div class="bg-white p-8 rounded-lg shadow-md w-full">
    <div v-if="isLoading" class="text-center p-8">Memuat...</div>
    <template v-else>
      <MenuList
        v-if="currentView === 'list'"
        :items="menuItems"
        @show-add-form="showAddForm"
      />
      <AddMenuForm
        v-else
        @cancel="showAddForm"
        @product-added="handleProductAdded"
      />
    </template>
  </div>
</template>
