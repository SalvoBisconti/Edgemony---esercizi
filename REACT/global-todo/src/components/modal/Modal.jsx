import styles from "./index.module.scss";
import { useReducer } from "react";
import { Context } from "../../store";
import { useContext } from "react";
import { useState } from "react";

const Modal = () => {
  const { state, dispatch } = useContext(Context);
  const [inputValue, setInputValue] = useState("");

  const onHandleCloseModal = () => dispatch({ type: "SHOW_MODAL" });
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_NEW_TASK",
      payload: {
        id: state.tasksListData.lenght + 1,
        todo: inputValue,
        completed: true,
        userId: 26,
      },
    });
    dispatch({ type: "SHOW_MODAL" });
  };

  const onHandleInput = (e) => {
    setInputValue(() => e.target.value);
  };
  return (
    <div className={styles.Modal}>
      <div className={styles.overlay} onClick={onHandleCloseModal}></div>
      <div className={styles.content}>
        <h1>ADD A TODO</h1>
        <form onSubmit={onHandleSubmit}>
          <textarea
            className={styles.input}
            type="text"
            placeholder="Insert new todo"
            value={inputValue}
            onChange={onHandleInput}
            required
          />
          <button> Add</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
