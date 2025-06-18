<script setup>
import { useCartStore } from '../stores/cart'
import { ref } from 'vue';
import PaymentModal from './PaymentModal.vue';

const cart = useCartStore()
const isModalVisible = ref(false); 

function formatPrice(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(value);
}

function showPaymentModal() {
  if (cart.items.length === 0) {
    alert('Keranjang masih kosong!');
    return;
  }
  isModalVisible.value = true;
}

</script>

<template>
  <div class="bg-white rounded-sm shadow-sm p-5 flex flex-col" style="height: 85vh;">
    <div class="flex items-center mb-5 flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
      </svg>
      <h2 class="text-xl font-bold text-gray-800">Pesanan</h2>
    </div>

    <div class="flex-grow overflow-y-auto pr-2">
      <div v-if="cart.items.length === 0" class="text-center text-gray-500 my-10">
        Keranjang masih kosong
      </div>
      <div v-else v-for="item in cart.items" :key="item.id" class="flex items-center mb-4">
        <img :src="item.photo" :alt="item.name" class="w-24 h-16 object-cover rounded-sm mr-4">
        <div class="flex-grow">
          <p class="font-semibold text-gray-700">{{ item.name }}</p>
        </div>
        <p class="font-semibold text-gray-700 mx-4">x{{ item.quantity }}</p>
        <p class="font-semibold text-blue-600">{{ formatPrice(item.price * item.quantity) }}</p>
      </div>
    </div>

    <div class="mt-4 pt-4 flex-shrink-0">
        <button @click="cart.clearCart()" class="w-full text-red-600 font-semibold py-2 px-4 rounded-sm border-2 border-red-500 hover:bg-red-50 transition-colors mb-4">
          Clear Cart
        </button>
        <div class="w-full flex justify-between space-x-2 mb-4">
          <button class="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-sm hover:bg-green-600 transition-colors">Save Bill</button>
          <button class="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-sm hover:bg-green-600 transition-colors">Print Bill</button>
        </div>
      <button @click="showPaymentModal" class="w-full bg-blue-500 text-white font-bold py-3 rounded-sm text-lg hover:bg-blue-600 transition-colors">
        Charge {{ formatPrice(cart.totalPrice) }}
      </button>
    </div>
  </div>
  
  <PaymentModal v-if="isModalVisible" @close="isModalVisible = false" />
</template>