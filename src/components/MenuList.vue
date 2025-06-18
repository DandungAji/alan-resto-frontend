<script setup>
import { formatPrice } from "../utils/formatters.js";

defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["showAddForm"]);
</script>

<template>
  <div>
    <button
      @click="emit('showAddForm')"
      class="bg-sky-500 text-white font-bold py-2 px-4 rounded-sm hover:bg-sky-700 mb-6"
    >
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
        <tr
          v-for="(item, index) in items"
          :key="item.id"
          class="odd:bg-gray-50 even:bg-white hover:bg-sky-100 transition-colors"
        >
          <td class="p-4">{{ index + 1 }}</td>
          <td class="p-4">{{ item.name }}</td>
          <td class="p-4">
            <img
              :src="`http://127.0.0.1:8000/storage/${item.image}`"
              :alt="item.name"
              class="h-12 w-16 object-cover rounded-sm"
            />
          </td>
          <td class="p-4">{{ formatPrice(item.price) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
