<script setup>
import { formatPrice } from "../utils/formatters.js";

defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="bg-white rounded-sm shadow-sm overflow-hidden cursor-pointer shadow-lg hover:shadow-sm transition-shadow duration-200"
  >
    <img
      :src="`http://127.0.0.1:8000/storage/${product.image}`"
      :alt="product.name"
      class="w-full h-64 object-cover"
    />
    <div class="p-3 text-center">
      <h3 class="font-semibold text-base text-gray-800">{{ product.name }}</h3>
      <p class="text-sky-500 font-bold mt-1">
        {{ formatPrice(product.price) }}
      </p>
    </div>
  </div>
</template>
