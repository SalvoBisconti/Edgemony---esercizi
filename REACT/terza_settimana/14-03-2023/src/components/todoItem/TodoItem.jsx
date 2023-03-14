import "./index.css";
import { BsTrash } from "react-icons/bs";

const TodoItem = ({ todo, setDeletedEl, setArrayEl, deletedEl }) => {
  const onHandleClick = () => {
    setDeletedEl(todo.id);
    setArrayEl((prev) => [...prev.filter((todo) => todo.id !== deletedEl)]);
  };
  return (
    <div className="TodoItem">
      <div className="content">
        <p className="todo-text"> {todo.todo}</p>
        <BsTrash className="trash-icon" onClick={onHandleClick} />
      </div>
    </div>
  );
};
export default TodoItem;
