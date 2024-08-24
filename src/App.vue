<template>
  <div class="min-h-screen bg-gradient-to-r from-cyan-500 via-violet-600 to-blue-500 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <h1 class="text-3xl font-bold mb-6 text-center">Todo App With Vue</h1>
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>