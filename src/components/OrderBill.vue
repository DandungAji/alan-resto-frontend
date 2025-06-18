<script setup>
import { useCartStore } from "../stores/cart";
import { ref } from "vue";
import PaymentModal from "./PaymentModal.vue";
import SaveBillModal from "./SaveBillModal.vue";
import PrintableBill from "./PrintableBill.vue";
import { formatPrice } from "../utils/formatters.js";

const cart = useCartStore();

const isModalVisible = ref(false);
const isSaveModalVisible = ref(false);
const savedOrderNumber = ref(null);

function showPaymentModal() {
  if (cart.items.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }
  isModalVisible.value = true;
}

function handleSaveBill() {
  if (cart.items.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }
  const orderNumber = cart.generateOrderNumber();
  savedOrderNumber.value = orderNumber;
  isSaveModalVisible.value = true;
  cart.clearCart();
}

function handlePrintBill() {
  if (cart.items.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }
  window.print();
}
</script>

<template>
  <div>
    <div class="print:hidden">
      <div
        class="bg-white rounded-sm shadow-sm p-5 flex flex-col"
        style="height: 85vh"
      >
        <div
          class="flex items-center justify-center mb-5 flex-shrink-0 gap-4 mb-12"
        >
          <img
            src="/profile.png"
            alt=""
            srcset=""
            class="w-12 p-0.5 border-2 border-black rounded-full"
          />
          <h2 class="text-3xl font-medium text-gray-800">Pesanan</h2>
        </div>
        <div class="flex-grow overflow-y-auto pr-2">
          <div
            v-if="cart.items.length === 0"
            class="text-center text-gray-500 my-10"
          >
            Keranjang masih kosong
          </div>
          <div
            v-else
            v-for="item in cart.items"
            :key="item.id"
            class="flex items-center mb-4"
          >
            <img
              :src="item.photo"
              :alt="item.name"
              class="w-24 h-20 object-cover rounded-sm mr-4"
            />
            <div class="flex-grow">
              <p class="font-semibold text-gray-700">{{ item.name }}</p>
            </div>
            <p class="font-semibold text-gray-700 mx-4">x{{ item.quantity }}</p>
            <p class="font-semibold text-blue-600">
              {{ formatPrice(item.price * item.quantity) }}
            </p>
          </div>
        </div>
        <div class="mt-4 pt-4 flex-shrink-0">
          <button
            @click="cart.clearCart()"
            class="w-full text-red-600 font-semibold py-2 px-4 rounded-sm border-2 border-red-500 hover:bg-red-50 transition-colors mb-4"
          >
            Clear Cart
          </button>
          <div class="w-full flex justify-between space-x-2 mb-4">
            <button
              @click="handleSaveBill"
              class="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-sm hover:bg-green-600 transition-colors"
            >
              Save Bill
            </button>
            <button
              @click="handlePrintBill"
              class="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-sm hover:bg-green-600 transition-colors"
            >
              Print Bill
            </button>
          </div>
          <button
            @click="showPaymentModal"
            class="w-full bg-blue-500 text-white font-bold py-3 rounded-sm text-lg hover:bg-blue-600 transition-colors"
          >
            Charge {{ formatPrice(cart.totalPrice) }}
          </button>
        </div>
      </div>

      <PaymentModal v-if="isModalVisible" @close="isModalVisible = false" />
      <SaveBillModal
        v-if="isSaveModalVisible"
        :order-number="savedOrderNumber"
        @close="isSaveModalVisible = false"
      />
    </div>

    <div class="hidden print:block">
      <PrintableBill />
    </div>
  </div>
</template>
