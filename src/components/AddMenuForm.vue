<script setup>
import { ref } from "vue";
import axios from "axios";

const emit = defineEmits(["cancel", "product-added"]);

const productName = ref("");
const productPrice = ref("");
const productImage = ref(null);
const imagePreview = ref(null);

function handleFileUpload(event) {
  const file = event.target.files[0];
  productImage.value = file;
  if (file) {
    imagePreview.value = URL.createObjectURL(file);
  } else {
    imagePreview.value = null;
  }
}

async function submitForm() {
  const formData = new FormData();
  formData.append("name", productName.value);
  formData.append("price", productPrice.value);
  formData.append("image", productImage.value);

  try {
    await axios.post("http://127.0.0.1:8000/api/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    emit("product-added");
  } catch (error) {
    console.error("Gagal menambahkan produk:", error);
    if (error.response) {
      alert("Error: " + JSON.stringify(error.response.data.errors));
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <h2 class="text-2xl font-medium mb-8 text-blue-500">Tambahkan Menu</h2>

    <div class="space-y-6">
      <div>
        <label
          for="nama-menu"
          class="block mb-2 text-sm font-medium text-gray-700"
          >Nama Menu</label
        >
        <input
          v-model="productName"
          type="text"
          id="nama-menu"
          class="w-full p-3 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label
          for="foto-menu"
          class="block mb-2 text-sm font-medium text-gray-700"
          >Foto Menu</label
        >
        <label
          for="foto-menu"
          class="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 rounded-sm cursor-pointer transition-colors"
          :class="
            imagePreview
              ? 'bg-green-50 border-green-400'
              : 'bg-gray-100 hover:bg-gray-50'
          "
        >
          <div v-if="!imagePreview" class="text-center">
            <img
              src="/upload.png"
              alt="upload"
              class="w-12 h-12 opacity-30 mx-auto"
            />
            <p class="mt-2 text-sm text-gray-600">
              drag and drop a file here or click
            </p>
          </div>
          <div v-else class="text-center">
            <img
              :src="imagePreview"
              alt="preview"
              class="max-h-40 max-w-full object-contain mx-auto"
            />
            <p class="mt-2 text-sm text-green-600 font-semibold">
              Gambar telah dipilih
            </p>
          </div>
          <input
            @change="handleFileUpload"
            id="foto-menu"
            type="file"
            accept="image/*"
            class="hidden"
            required
          />
        </label>
      </div>

      <div>
        <label
          for="harga-menu"
          class="block mb-2 text-sm font-medium text-gray-700"
          >Harga Menu</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center px-4 pointer-events-none bg-blue-500 rounded-l-md"
          >
            <span class="text-white font-semibold">Rp.</span>
          </div>
          <input
            v-model="productPrice"
            type="number"
            id="harga-menu"
            class="w-full p-3 pl-16 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder=""
          />
        </div>
      </div>
    </div>

    <div class="flex justify-end mt-10">
      <button
        type="submit"
        class="px-10 py-3 bg-green-500 text-white font-semibold rounded-sm hover:bg-green-600 transition-colors"
      >
        Simpan
      </button>
    </div>
  </form>
</template>
