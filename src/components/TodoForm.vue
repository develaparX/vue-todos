<template>
  <form @submit.prevent="handleSubmit" class="mb-4 flex justify-between">
    <input 
      v-model="title" 
      placeholder="Add new todo" 
      required
      class="border rounded p-2 mr-2 w-full"
      :disabled="isLoading"
    >
    <button 
      type="submit"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      :disabled="isLoading"
    >
      {{ isLoading ? 'loading...' : 'Add' }}
    </button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['add-todo'],
  setup(props, { emit }) {
    const title = ref('')

    const handleSubmit = () => {
      if (title.value.trim() && !props.isLoading) {
        emit('add-todo', title.value)
        title.value = ''
      }
    }

    return { title, handleSubmit }
  }
}
</script>