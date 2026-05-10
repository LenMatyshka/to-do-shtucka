import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Добавление задачи
    addTodos: (state, action) => {
      state.push(action.payload);
    },
    // Удаление задачи
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    // Обновление задачи (редактирование)
    updateTodos: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, item: action.payload.item }
          : todo
      );
    },
    // Отметка о выполнении
    completeTodos: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: true }
          : todo
      );
    },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} = todoSlice.actions;

export const reducer = todoSlice.reducer;