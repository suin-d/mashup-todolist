import { v4 as randomId } from "uuid";

const ADD_TODO = "todos/ADD_TODO";
const REMOVE_TODO = "todos/REMOVE_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

const initialTodos = [
  {
    id: randomId(),
    text: "프로젝트 생성하기",
    done: true,
  },
  {
    id: randomId(),
    text: "컴포넌트 스타일링하기",
    done: true,
  },
  {
    id: randomId(),
    text: "Context 만들기",
    done: true,
  },
  {
    id: randomId(),
    text: "기능구현하기",
    done: false,
  },
];

// 리듀서 만들기
export default function todos(state = initialTodos, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: randomId(), text: action.payload }];
    case REMOVE_TODO:
      return state.filter((v) => v.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((v) =>
        v.id === action.payload ? { ...v, done: !v.done } : v
      );
    default:
      return state;
  }
}
