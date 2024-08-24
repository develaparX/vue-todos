<template>
  <div class="max-w-lg mx-auto p-4">
    <TodoForm @add-todo="addTodo" :isLoading="isLoading" />
    
    <div class="mb-4">
      <label class="mr-2">Filter:</label>
      <select v-model="filter" class="border rounded p-1">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="active">Active</option>
      </select>
    </div>

    <!-- Skeleton loader -->
    <div v-if="isLoading" class="space-y-2">
      <div v-for="n in 5" :key="n" class="animate-pulse flex items-center space-x-2 p-2 bg-white shadow rounded">
        <div class="h-5 w-5 bg-gray-300 rounded"></div>
        <div class="h-4 bg-gray-300 rounded w-full"></div>
        <div class="h-8 w-16 bg-gray-300 rounded"></div>
      </div>
    </div>

    <ul v-else-if="filteredTodos.length" class="space-y-2">
      <TodoItem
        v-for="todo in paginatedTodos"
        :key="todo.id"
        :todo="todo"
        @update="updateTodo"
        @delete="deleteTodo"
        :isLoading="isLoading"
      />
    </ul>
    <p v-else class="text-gray-500">No todos found.</p>

    <Pagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @change-page="changePage"
    />
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import TodoService from '../services/TodoService'
import TodoForm from './TodoForm.vue'
import TodoItem from './TodoItem.vue'
import Pagination from './Pagination.vue'

export default {
  components: {
    TodoForm,
    TodoItem,
    Pagination
  },
  setup() {
    const todos = ref([])
    const currentPage = ref(1)
    const itemsPerPage = 5
    const filter = ref('all')
    const isLoading = ref(false)

    const fetchTodos = async () => {
      isLoading.value = true
      try {
        const response = await TodoService.getTodos()
        todos.value = response.data
      } catch (error) {
        console.error('Error fetching todos:', error)
      } finally {
        isLoading.value = false
      }
    }

    const addTodo = async (title) => {
      isLoading.value = true
      try {
        const response = await TodoService.addTodo({ title, completed: false })
        todos.value.unshift(response.data)
      } catch (error) {
        console.error('Error adding todo:', error)
      } finally {
        isLoading.value = false
      }
    }

   const updateTodo = async (updatedTodo) => {
  isLoading.value = true
  try {
    await TodoService.updateTodo(updatedTodo.id, updatedTodo)
    // Perbarui state lokal
    const index = todos.value.findIndex(t => t.id === updatedTodo.id)
    if (index !== -1) {
      todos.value[index] = { ...todos.value[index], ...updatedTodo }
    }
  } catch (error) {
    console.error('Error updating todo:', error)
  } finally {
    isLoading.value = false
  }
}

    const deleteTodo = async (id) => {
      isLoading.value = true
      try {
        await TodoService.deleteTodo(id)
        todos.value = todos.value.filter(todo => todo.id !== id)
      } catch (error) {
        console.error('Error deleting todo:', error)
      } finally {
        isLoading.value = false
      }
    }


    const filteredTodos = computed(() => {
      if (filter.value === 'completed') {
        return todos.value.filter(todo => todo.completed)
      } else if (filter.value === 'active') {
        return todos.value.filter(todo => !todo.completed)
      }
      return todos.value
    })

    const totalPages = computed(() => Math.ceil(filteredTodos.value.length / itemsPerPage))

    const paginatedTodos = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage
      const end = start + itemsPerPage
      return filteredTodos.value.slice(start, end)
    })

    const changePage = (page) => {
      currentPage.value = page
    }

    onMounted(fetchTodos)

    return {
      todos,
      currentPage,
      totalPages,
      paginatedTodos,
      filter,
      filteredTodos,
      isLoading,
      addTodo,
      updateTodo,
      deleteTodo,
      changePage
    }
  }
}
</script>