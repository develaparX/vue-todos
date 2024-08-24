<template>
  <div class="flex justify-between items-center mt-4">
    <button 
      :disabled="currentPage === 1" 
      @click="$emit('changePage', currentPage - 1)"
      class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
      :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
    >
      Previous
    </button>
    <span class="text-gray-700">Page {{ currentPage }} of {{ totalPages }}</span>
    <button 
      :disabled="currentPage === totalPages" 
      @click="$emit('changePage', currentPage + 1)"
      class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
      :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  emits: ['changePage']
}
</script>