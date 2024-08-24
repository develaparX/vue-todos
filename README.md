# Todo App With Vue + Tailwind CSS

## Table of Contents

1. Introduction
2. Project Setup
3. Project Structure
4. Components
5. Services
6. Styling
7. Running the Application
8. Testing

## 1. Introduction

This Todo App is a Vue 3 application built with Vite, using Axios for API calls, Tailwind CSS for styling, and Jest for unit testing. It features CRUD operations for todos, pagination, and filtering capabilities.

## 2. Project Setup

To set up the project, follow these steps:

1. Clone the repository:

   ```
   git clone <repository-url>
   cd todo-app
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up Tailwind CSS:
   ```
   npx tailwindcss init -p
   ```

## 3. Project Structure

```
todo-app/
├── public/
├── src/
│   ├── assets/
│   │   └── main.css
│   ├── components/
│   │   ├── TodoList.vue
│   │   ├── TodoForm.vue
│   │   ├── TodoItem.vue
│   │   └── Pagination.vue
│   ├── services/
│   │   └── TodoService.js
│   ├── App.vue
│   └── main.js
├── tests/
│   └── unit/
│       ├── TodoList.spec.js
│       ├── TodoForm.spec.js
│       ├── TodoItem.spec.js
│       └── Pagination.spec.js
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── jest.config.js
└── README.md
```

## 4. Components

### TodoList.vue

The main component that manages the list of todos, filtering, and pagination.

Key features:

- Fetches todos from the API
- Adds, updates, and deletes todos
- Implements filtering (All, Active, Completed)
- Implements pagination

### TodoForm.vue

A form component for adding new todos.

### TodoItem.vue

Represents a single todo item, allowing for completion toggle and deletion.

### Pagination.vue

Handles pagination controls for the todo list.

## 5. Services

### TodoService.js

Manages API calls using Axios. It includes methods for:

- Fetching todos
- Adding a new todo
- Updating a todo
- Deleting a todo

## 6. Styling

The application uses Tailwind CSS for styling. The main Tailwind configuration is in `tailwind.config.js`, and custom styles are in `src/assets/main.css`.

## 7. Running the Application

To run the application in development mode:

```
npm run dev
```

To build for production:

```
npm run build
```

## 8. Testing

The project uses Jest for unit testing. Test files are located in the `tests/unit/` directory.

To run tests:

```
npm run test
```

Key test files:

- `TodoList.spec.js`: Tests for the main TodoList component
- `TodoForm.spec.js`: Tests for the TodoForm component
- `TodoItem.spec.js`: Tests for the TodoItem component
- `Pagination.spec.js`: Tests for the Pagination component

These tests cover the core functionality of each component, including rendering, event emissions, and state management.

---

This documentation provides an overview of the Todo App project. For more detailed information about each component or feature, refer to the inline comments in the respective files.
