<script setup>
const emit = defineEmits(['cancel'])
</script>

<template>
  <div>
    <h2 class="text-xl font-semibold mb-6">Tambahkan Menu</h2>

    <div class="space-y-6">
      <div>
        <label for="nama-menu" class="block mb-2 text-sm font-medium text-gray-700">Nama Menu</label>
        <input type="text" id="nama-menu" class="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
      </div>

      <div>
        <label for="foto-menu" class="block mb-2 text-sm font-medium text-gray-700">Foto Menu</label>
        <div class="flex items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-md">
          <div class="text-center">
            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p class="mt-1 text-sm text-gray-600">Drag and drop atau klik untuk upload</p>
          </div>
        </div>
      </div>

      <div>
        <label for="harga-menu" class="block mb-2 text-sm font-medium text-gray-700">Harga Menu</label>
        <input type="text" id="harga-menu" class="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
      </div>
    </div>

    <div class="flex justify-end space-x-4 mt-8">
        <button @click="emit('cancel')" type="button" class="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            Batal
        </button>
        <button type="submit" class="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700">
            Simpan
        </button>
    </div>
  </div>
</template>