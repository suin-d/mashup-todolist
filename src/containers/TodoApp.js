import React from "react";
import TodoCreate from "../components/TodoCreate";
import TodoHead from "../components/TodoHead";
import TodoList from "../components/TodoList";
import TodoTemplate from "../components/TodoTemplate";

export default function TodoApp() {
  return (
    <TodoTemplate>
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </TodoTemplate>
  );
}
