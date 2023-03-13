import "./index.css";
import { todos } from "../../mock/todolist";
import TodoItem from "../todoItem";
import InputEl from "../inputEl";
import { useState } from "react";

const TodoList = () => {
  const [inputSearchEl, setInputSearchEl] = useState("");
  const [arrayEl, setArrayEl] = useState([]);

  return (
    <div className="TodoList">
      <h1 className="title"> TODOLIST</h1>
      <InputEl
        inputSearchEl={inputSearchEl}
        setInputSearchEl={setInputSearchEl}
        arrayEl={arrayEl}
        setArrayEl={setArrayEl}
      />

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo.todo} />
      ))}
      {arrayEl.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
export default TodoList;
