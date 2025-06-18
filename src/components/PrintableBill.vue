<script setup>
import { useCartStore } from '../stores/cart';

const cart = useCartStore();
const printDate = new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short'});

const orderNumber = `#${localStorage.getItem('orderCounter') || 'N/A'}-${new Date().toLocaleDateString('id-ID', {day:'2-digit', month:'2-digit', year:'2-digit'}).replace(/\//g, '')}`;

function formatPrice(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);
}
</script>

<template>
  <div class="bg-white text-black p-4 font-mono" style="width: 300px;">
    <h1 class="text-xl font-bold text-center">Alan Resto</h1>
    <p class="text-xs text-center">Jl. Alan Membangun No. 404, Bandung</p>
    <hr class="my-3 border-dashed border-black">
    <div class="text-xs">
      <p>No Struk: {{ orderNumber }}</p>
      <p>Tanggal: {{ printDate }}</p>
    </div>
    <hr class="my-3 border-dashed border-black">
    <div>
      <div v-for="item in cart.items" :key="item.id" class="my-1 text-xs">
        <p class="font-semibold">{{ item.name }}</p>
        <div class="flex justify-between">
          <span>{{ item.quantity }} x {{ formatPrice(item.price) }}</span>
          <span class="font-medium">{{ formatPrice(item.quantity * item.price) }}</span>
        </div>
      </div>
    </div>
    <hr class="my-3 border-dashed border-black">
    <div class="text-sm mt-2">
      <div class="flex justify-between font-bold">
        <p>TOTAL</p>
        <p>{{ formatPrice(cart.totalPrice) }}</p>
      </div>
    </div>
    <hr class="my-3 border-dashed border-black">
    <p class="text-xs text-center mt-4">** Terima Kasih Atas Kunjungan Anda **</p>
  </div>
</template>