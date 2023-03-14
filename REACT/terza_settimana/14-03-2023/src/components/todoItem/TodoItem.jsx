import "./index.css";
import { BsTrash } from "react-icons/bs";

const TodoItem = ({ todo, setArrayEl, setDeletedModal }) => {
  const onHandleClick = (element) => {
    setArrayEl((prev) => [...prev.filter((todo) => todo.id !== element)]);
    setDeletedModal(true);
    setTimeout(() => {
      setDeletedModal(false);
    }, 2000);
  };
  return (
    <div className="TodoItem">
      <div className="content">
        <p className="todo-text"> {todo.todo}</p>
        <BsTrash
          className="trash-icon"
          onClick={() => onHandleClick(todo.id)}
        />
      </div>
    </div>
  );
};
export default TodoItem;
