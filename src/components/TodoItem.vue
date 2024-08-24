<template>
  <li class="flex items-center space-x-2 p-2 bg-white shadow rounded">
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="$emit('update', { ...todo, completed: !todo.completed })"
      class="form-checkbox h-5 w-5 text-blue-600"
      :disabled="isUpdating"
    >
    <span :class="{ 'line-through text-gray-500': todo.completed }" class="flex-grow">
      {{ isUpdating ? 'Updating...' : todo.title }}
    </span>
    <button 
      @click="$emit('delete', todo.id)"
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
      :disabled="isUpdating"
    >
      Delete
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    isUpdating: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update', 'delete']
}
</script>