import "./index.css";
import { todos } from "../../mock/todolist";
import TodoItem from "../todoItem";
import InputEl from "../inputEl";
import { useState } from "react";

const TodoList = ({ setIsModal }) => {
  const [inputSearchEl, setInputSearchEl] = useState("");
  const [arrayEl, setArrayEl] = useState(todos);

  return (
    <div className="TodoList">
      <InputEl
        inputSearchEl={inputSearchEl}
        setInputSearchEl={setInputSearchEl}
        arrayEl={arrayEl}
        setArrayEl={setArrayEl}
        setIsModal={setIsModal}
      />

      {arrayEl
        .sort((a, b) => (a.id >= b.id ? -1 : 0))
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} setArrayEl={setArrayEl} />
        ))}
    </div>
  );
};
export default TodoList;
