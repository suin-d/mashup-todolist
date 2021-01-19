import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1; // 자신이 차지할 수 있는 모든 영역 차지
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default function TodoList() {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
}
