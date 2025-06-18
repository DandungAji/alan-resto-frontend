<script setup>
import { ref } from "vue";
import MenuList from "../components/MenuList.vue";
import AddMenuForm from "../components/AddMenuForm.vue";

const currentView = ref("list");

function showAddForm() {
  currentView.value = "form";
}

function showListView() {
  currentView.value = "list";
}
</script>

<template>
  <p class="text-gray-500 mb-6">Tambahkan menu makanan yang ada di resto</p>
  <div class="bg-white p-8 rounded-sm shadow-md w-full">
    <MenuList v-if="currentView === 'list'" @show-add-form="showAddForm" />
    <AddMenuForm v-else @cancel="showListView" />
  </div>
</template>
