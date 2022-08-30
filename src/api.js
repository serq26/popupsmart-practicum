import axios from "axios";

const BASE_API_URL = "https://630e5922109c16b9abf9cf9b.mockapi.io/";

export const getTodos = async () => {
  const todos = await axios
    .get(`${BASE_API_URL}/todos`)
    .then((res) => res.data);
  return todos;
};

export const postTodo = async (todo) => {
  await axios.post(`${BASE_API_URL}/todos`, todo);
};

export const putTodo = async (todo) => {
  await axios.put(`${BASE_API_URL}/todos/${todo.id}`, todo);
};

export const removeTodo = async (id) => {
  await axios.delete(`${BASE_API_URL}/todos/${id}`);
};