<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "../stores/cart";
import { formatPrice } from "../utils/formatters.js";

const cart = useCartStore();

const emit = defineEmits(["close"]);

const paymentAmount = ref(null);

const totalBill = computed(() => cart.totalPrice);

const change = computed(() => {
  if (paymentAmount.value === null || paymentAmount.value < totalBill.value) {
    return 0;
  }
  return paymentAmount.value - totalBill.value;
});

async function handlePay() {
  if (paymentAmount.value === null || paymentAmount.value < totalBill.value) {
    alert("Jumlah uang pembeli tidak cukup!");
    return;
  }
  try {
    await cart.checkout(paymentAmount.value, change.value);

    emit("close");
  } catch (error) {
    alert("Gagal memproses pembayaran. Silakan coba lagi.");
  }
}
</script>

<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
  >
    <div
      class="bg-white p-6 md:p-8 rounded-sm shadow-xl w-full max-w-4xl gap-8"
    >
      <h2 class="text-2xl font-bold mb-6 text-gray-800">Detail Pesanan</h2>
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-3/5 pr-8 border-r">
          <div class="overflow-y-auto max-h-80 rounded-sm">
            <table class="w-full text-left text-sm">
              <thead class="bg-gray-100">
                <tr>
                  <th class="p-3 font-semibold text-gray-600">#</th>
                  <th class="p-3 font-semibold text-gray-600">Nama</th>
                  <th class="p-3 font-semibold text-gray-600">Foto</th>
                  <th class="p-3 font-semibold text-gray-600 text-right">
                    Harga
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in cart.items"
                  :key="item.id"
                  class="odd:bg-gray-50 even:bg-white hover:bg-sky-100 transition-colors"
                >
                  <td class="p-3 text-gray-700">{{ index + 1 }}</td>
                  <td class="p-3 text-gray-700">
                    {{ item.name }} x{{ item.quantity }}
                  </td>
                  <td class="p-3">
                    <img
                      :src="item.photo"
                      :alt="item.name"
                      class="h-10 w-12 object-cover rounded-md"
                    />
                  </td>
                  <td class="p-3 text-gray-800 font-medium text-right">
                    {{ formatPrice(item.price * item.quantity) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="ml-8 w-full md:w-2/5 flex flex-col justify-center">
          <div class="space-y-5">
            <div>
              <label
                for="payment-amount"
                class="text-center block mb-2 text-sm font-medium text-gray-700"
                >Uang Pembeli (Rp)</label
              >
              <input
                v-model.number="paymentAmount"
                type="number"
                id="payment-amount"
                class="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-lg"
                placeholder=""
              />
            </div>
            <div class="flex justify-end gap-4">
              <button
                @click="emit('close')"
                class="w-full px-6 py-2 border border-gray-300 rounded-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button
                @click="handlePay"
                class="w-full px-8 py-2 bg-sky-500 text-white font-semibold rounded-sm hover:bg-sky-600 transition-colors"
              >
                Pay!
              </button>
            </div>
            <div class="pt-4 space-y-3 text-lg">
              <div class="flex items-center justify-between">
                <span class="text-red-600">Kembalian:</span>
                <span class="text-red-600">{{ formatPrice(change) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
