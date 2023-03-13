import "./index.css";

const TodoItem = ({ todo }) => {
  return (
    <div className="TodoItem">
      <div className="content">
        <p className="todo-text"> {todo}</p>
        <input type="checkbox" name="checked" className="checkbox" />
      </div>
    </div>
  );
};
export default TodoItem;
