import React, { useEffect } from "react";
import TodoItem from "../TodoItem";
import { useSelector } from "react-redux/es/exports";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import "./todolist.css";
import { getTodosHandle } from "../../utils";

export default function TodoList() {
  const [animationParent] = useAutoAnimate();
  const todos = useSelector((state) => state.todo.todos);
  console.log({todos})
  useEffect(() => {
    getTodosHandle();
  }, [])

  return (
    <ul
      ref={animationParent}
      style={{ display: todos.length <= 0 ? "none" : "" }}
    >
      {todos.length > 0 && todos.map((todo) => {return <TodoItem key={todo.id} todo={todo} />})}
    </ul>
  );
}
