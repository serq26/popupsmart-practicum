import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTodos, postTodo, putTodo, removeTodo } from "../api";

const initialState = {
  todos: [],
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await getTodos();
  return response;
});

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
      postTodo(action.payload);
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (action.payload.id === todo.id) {
          todo = action.payload;
          putTodo(action.payload);
        }
        return todo;
      });
    },
    deleteTodo: (state, action) => {
      console.log(action.payload)
      removeTodo(action.payload);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

export const { addTodo, editTodo, deleteTodo } = todos.actions;
export default todos.reducer;
