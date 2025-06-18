<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";
import OrderBill from "../components/OrderBill.vue";
import { useCartStore } from "../stores/cart";

const cart = useCartStore();

const products = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/products");
    products.value = response.data;
  } catch (error) {
    console.error("Gagal mengambil data produk di halaman transaksi:", error);
  }
});

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
