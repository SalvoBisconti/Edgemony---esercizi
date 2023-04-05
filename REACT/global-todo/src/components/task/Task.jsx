import { randomHSLA } from "../../utils/funcs";
import styles from "./index.module.scss";
import { useCallback, useContext } from "react";
import { Context } from "../../store";

const Task = ({ taskData }) => {
  const { state, dispatch } = useContext(Context);

  const onHandleEditState = () =>
    dispatch({ type: "EDIT_TASK", payload: taskData.id });

  const onHandleDeleteTask = () =>
    dispatch({ type: "DELETE_TASK", payload: taskData.id });

  return (
    <div
      className={styles.Task}
      style={{ background: `${randomHSLA()}` }}
      onClick={onHandleEditState}
    >
      <div className={styles.info}>
        <img src={taskData.image} alt={taskData.username} />
        {taskData.completed && <button onClick={onHandleDeleteTask}>V</button>}
      </div>
      <div className={styles.content}>
        <span>{taskData.username}</span>
        <p>{taskData.todo}</p>
      </div>
    </div>
  );
};

export default Task;
