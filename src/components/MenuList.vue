<script setup>
import { ref } from 'vue'

const emit = defineEmits(['showAddForm'])

const menuItems = ref([
  { id: 1, name: 'Sate Ayam', photo: 'sate_ayam.jpg', price: 30000 },
  { id: 2, name: 'Bakso', photo: 'bakso.webp', price: 10000 },
  { id: 3, name: 'Tempe Goreng', photo: 'tempe_goreng.jpg', price: 5000 },
  { id: 4, name: 'Tahu Isi', photo: 'tahu_isi.jpg', price: 10000 },
  { id: 5, name: 'Soto Ayam', photo: 'soto_ayam.webp', price: 30000 },
  { id: 6, name: 'Nasi Padang', photo: 'nasi_padang.webp', price: 30000 },
  { id: 7, name: 'Taco', photo: './taco.jpg', price: 30000 }
])

function formatPrice(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(value);
}
</script>

<template>
  <div>
    <button @click="emit('showAddForm')" class="bg-sky-500 text-white font-bold py-2 px-4 rounded hover:bg-sky-700 mb-6">
      + Tambah Menu
    </button>

    <table class="w-full text-left">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-4 font-semibold">#</th>
          <th class="p-4 font-semibold">Nama</th>
          <th class="p-4 font-semibold">Foto</th>
          <th class="p-4 font-semibold">Harga</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in menuItems" :key="item.id" class="border-b">
          <td class="p-4">{{ index + 1 }}</td>
          <td class="p-4">{{ item.name }}</td>
          <td class="p-4">
            <img :src="item.photo" :alt="item.name" class="h-12 w-16 object-cover rounded-sm">
          </td>
          <td class="p-4">{{ formatPrice(item.price) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>