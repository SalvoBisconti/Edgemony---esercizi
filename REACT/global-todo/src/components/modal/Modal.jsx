import styles from "./index.module.scss";
import { Context } from "../../store";
import { useContext } from "react";

const Modal = () => {
  const { state, dispatch } = useContext(Context);

  const onHandleCloseModal = () => dispatch({ type: "SHOW_MODAL" });
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_NEW_TASK",
      payload: state.newTodoObj,
    });
    dispatch({ type: "SHOW_MODAL" });
  };

  const onHandleSetUsername = (e) =>
    dispatch({ type: "SET_USERNAME", payload: e.target.value });

  const onHandleSetImage = (e) =>
    dispatch({ type: "SET_IMAGE", payload: e.target.value });

  const onHandleSetTodo = (e) =>
    dispatch({ type: "SET_TODO", payload: e.target.value });

  return (
    <div className={styles.Modal}>
      <div className={styles.overlay} onClick={onHandleCloseModal}></div>
      <div className={styles.content}>
        <h1>ADD A TODO</h1>
        <form onSubmit={onHandleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={state.newTodoObj.username}
            onChange={onHandleSetUsername}
            required
          />
          <input
            type="text"
            placeholder="Image"
            value={state.newTodoObj.image}
            onChange={onHandleSetImage}
            required
          />
          <textarea
            className={styles.input}
            type="text"
            placeholder="Insert new todo"
            value={state.newTodoObj.todo}
            onChange={onHandleSetTodo}
            required
          />
          <input type="submit" value="ADD" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
