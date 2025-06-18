import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const totalItems = computed(() => items.value.length)

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0)
  })

  function addToCart(product) {
    const existingItem = items.value.find(item => item.id === product.id)

    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  function clearCart() {
    items.value = []
  }

  function generateOrderNumber() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yy = today.getFullYear().toString().slice(-2);
    
    const dateKey = `${today.getFullYear()}${mm}${dd}`;
    const lastOrderDate = localStorage.getItem('lastOrderDate');
    
    let counter = 1;
    
    if (lastOrderDate === dateKey) {
      counter = Number(localStorage.getItem('orderCounter')) + 1;
    }
    
    localStorage.setItem('lastOrderDate', dateKey);
    localStorage.setItem('orderCounter', counter);

    return `#${counter}-${dd}${mm}${yy}`;
  }

  return { items, totalItems, totalPrice, addToCart, clearCart, generateOrderNumber } 
})