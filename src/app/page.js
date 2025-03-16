"use client";

import { useState, useEffect } from "react";
import TodoForm from "@/app/commponents/TodoForm";
import TodoList from "@/app/commponents/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    /* fetch("/api")
      .then((res) => {
        console.log("res", res);
        return res.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);
        setTodos(data.todos);
      })
      .catch((error) => console.error("Error fetching todos:", error)) */;
      async function fetchTodos() {
        const res = await fetch('http://localhost:3000/api')
        const data = await res.json()
        console.log('first', data)
      }
      fetchTodos()
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 shadow-lg rounded bg-white">
      <h1 className="text-xl font-bold text-center">To-Do List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
