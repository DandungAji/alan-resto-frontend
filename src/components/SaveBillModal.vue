<script setup>
defineProps({
  orderNumber: {
    type: [String, Number],
    required: true
  }
});

const emit = defineEmits(['close']);
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    
    <div class="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm text-center transform transition-all">
      
      <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
        <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      
      <h3 class="text-xl leading-6 font-medium text-gray-900">
        Saved!
      </h3>
      <div class="mt-2 px-4 py-3">
        <p class="text-base text-gray-600">
          Pesanan berhasil disimpan dengan nomor pesanan:
        </p>
        <p class="text-lg font-bold text-gray-800 mt-1">
          {{ orderNumber }}
        </p>
      </div>
      
      <div class="mt-5">
        <button 
          @click="emit('close')"
          type="button" 
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          OK
        </button>
      </div>
    </div>
  </div>
</template>