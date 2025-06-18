<script setup>
import { ref } from "vue";
import ProductCard from "../components/ProductCard.vue";
import OrderBill from "../components/OrderBill.vue";
import { useCartStore } from "../stores/cart.js";

const cart = useCartStore();

const products = ref([
  { id: 1, name: "Sate Ayam", photo: "sate_ayam.jpg", price: 30000 },
  { id: 2, name: "Bakso", photo: "bakso.webp", price: 10000 },
  { id: 3, name: "Tempe Goreng", photo: "tempe_goreng.jpg", price: 5000 },
  { id: 4, name: "Tahu Isi", photo: "tahu_isi.jpg", price: 10000 },
  { id: 5, name: "Soto Ayam", photo: "soto_ayam.webp", price: 30000 },
  { id: 6, name: "Nasi Padang", photo: "nasi_padang.webp", price: 30000 },
  { id: 7, name: "Taco", photo: "./taco.jpg", price: 30000 },
]);

function handleAddToCart(product) {
  cart.addToCart(product);
}
</script>

<template>
  <div class="flex flex-col md:flex-row gap-8">
    <div class="w-full md:w-2/3 print:hidden">
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-12 gap-y-8"
      >
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @click="handleAddToCart(product)"
        />
      </div>
    </div>

    <div class="w-full md:w-1/3">
      <OrderBill />
    </div>
  </div>
</template>
