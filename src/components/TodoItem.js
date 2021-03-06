import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../modules/todos/todos";

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      // done값이 있으면 corlor와 테두리 색 변경
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const Remove = styled.div`
  opacity: 0; // 처음엔 안보임, TodoItemBlock에 커서 올렸을 때
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee236;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

function TodoItem({ id, done, text }) {
  const dispatch = useDispatch();

  const onToggle = () => dispatch(toggleTodo(id));

  const onRemove = () => dispatch(removeTodo(id));

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
