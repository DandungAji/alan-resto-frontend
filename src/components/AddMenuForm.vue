<script setup>
const emit = defineEmits(["cancel"]);
</script>

<template>
  <div>
    <h2 class="text-2xl font-medium mb-8 text-blue-500">Tambahkan Menu</h2>

    <div class="space-y-6">
      <div>
        <label
          for="nama-menu"
          class="block mb-2 text-sm font-medium text-gray-700"
          >Nama Menu</label
        >
        <input
          type="text"
          id="nama-menu"
          class="w-full p-3 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label
          for="foto-menu"
          class="block mb-2 text-sm font-medium text-gray-700"
          >Nama Menu</label
        >
        <label
          for="foto-menu"
          class="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 bg-gray-100 rounded-sm cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div class="text-center">
            <img
              src="/upload.png"
              alt="upload"
              srcset=""
              class="w-12 h-12 opacity-30 mx-auto"
            />
            <p class="mt-2 text-sm text-gray-600">
              drag and drop a file here or click
            </p>
          </div>
          <input id="foto-menu" type="file" class="hidden" />
        </label>
      </div>

      <div>
        <label
          for="harga-menu"
          class="block mb-2 text-sm font-medium text-gray-700"
          >Nama Menu</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center px-4 pointer-events-none bg-blue-500 rounded-l-md"
          >
            <span class="text-white font-semibold">Rp.</span>
          </div>
          <input
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
  </div>
</template>
