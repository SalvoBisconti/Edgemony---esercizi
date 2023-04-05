import { useContext } from "react";
import { Context } from "../../store";
import Task from "../task/Task";
import styles from "./index.module.scss";

const TasksList = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div className={styles.TasksList}>
      {state.tasksListData.map((task) => (
        <Task taskData={task} key={task.id} />
      ))}
    </div>
  );
};

export default TasksList;
