import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { addTodoHandle } from '../../utils';
import "./addtodo.css";

export default function AddTodo() {
  const [todo, setTodo] = useState('');

  const submitHandle = (e) => {
    e.preventDefault()

    addTodoHandle({
      content: todo,
      isCompleted: false
    })

    setTodo('')
  }

  return (
    <form onSubmit={submitHandle}>
      <input type='text' placeholder="Add Todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button disabled={todo.length < 3}>Add</button>
    </form>
  )
}
