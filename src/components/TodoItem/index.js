import React, { useState } from "react";
import { deleteTodoHandle, editTodoHandle } from "../../utils";
import "./todoitem.css";

export default function TodoItem({ todo }) {
  const [editVisible, setEditVisible] = useState(false);

  const deleteTodo = (id) => {
    deleteTodoHandle(id);
  };

  const editTodo = (todo) => {
    editTodoHandle(todo);
  };

  const handleChange = (e) => {
  }

  return (
    <li className={`${todo.isCompleted ? "done" : ""}${editVisible ? "editing" : ""}`}>
      <span
        style={{ textDecoration: todo.isCompleted ? "line-through" : false }}
      >
        {!editVisible && todo.content}
        <input type={editVisible ? "text" : "hidden"} name="content" placeholder={todo.content} onChange={(e) => handleChange(e)} onBlur={(e) => {
          editTodo({...todo, content: e.target.value});
          setEditVisible(false);
        }} />
      </span>
      <div>
        <button
          className="done"
          onClick={() => editTodo({ ...todo, isCompleted: !todo.isCompleted })}
        >
          {!todo.isCompleted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke="currentColor"
              className="w-6 h-6"
              color="rgb(54, 167, 54)"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke="currentColor"
              className="w-6 h-6"
              color="coral"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        <button className={`edit ${editVisible && "editing"}`} onClick={() => setEditVisible(!editVisible)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>
        <button className="remove" onClick={() => deleteTodo(todo.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}
