import { useReducer } from "react";
import { Context } from "./store";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Hero from "./components/hero";
import TasksList from "./components/tasksList";
import styles from "./App.module.scss";
import Modal from "./components/modal";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const onHandleModal = () => dispatch({ type: "SHOW_MODAL" });

  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <Hero />
        <TasksList />
        <button className={styles.addTodo} onClick={onHandleModal}>
          {"+"}
        </button>
        {state.isModalVisibile && <Modal />}
      </Context.Provider>
    </div>
  );
}

export default App;
