import store from "./stores";
import { addTodo, deleteTodo, editTodo, fetchTodos } from "./stores/todo";
import { login, logout } from "./stores/auth";
import { changeTheme } from "./stores/theme";

export const addTodoHandle = (todo) => {
  store.dispatch(addTodo(todo));
};

export const loginHandle = (user) => {
  store.dispatch(login(user));
};

export const logoutHandle = () => {
  store.dispatch(logout());
};

export const deleteTodoHandle = (id) => {
  store.dispatch(deleteTodo(id));
};

export const changeThemeHandle = (theme) => {
  store.dispatch(changeTheme(theme));
};

export const getTodosHandle = () => {
  store.dispatch(fetchTodos());
};

export const editTodoHandle = (todo) => {
  store.dispatch(editTodo(todo))
}