<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

function formatPrice(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(value);
}
</script>

<template>
  <div class="bg-white rounded-sm shadow-sm overflow-hidden cursor-pointer shadow-lg hover:shadow-sm transition-shadow duration-200">
    <img :src="product.photo" :alt="product.name" class="w-full h-64 object-cover">
    <div class="p-3 text-center">
      <h3 class="font-semibold text-base text-gray-800">{{ product.name }}</h3>
      <p class="text-blue-600 font-bold mt-1">{{ formatPrice(product.price) }}</p>
    </div>
  </div>
</template>