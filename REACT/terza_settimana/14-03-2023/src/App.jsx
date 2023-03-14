import "./App.css";
import TodoList from "./components/todoList";
import Modal from "./components/modal";
import { useState } from "react";

function App() {
  const [isModal, setIsModal] = useState(false);
  const [addedModal, setAddedModal] = useState(false);
  const [deletedModal, setDeletedModal] = useState(false);

  return (
    <div className="App">
      <h1 className="title"> Todo list</h1>
      <TodoList
        setIsModal={setIsModal}
        setAddedModal={setAddedModal}
        setDeletedModal={setDeletedModal}
      />
      <Modal isModal={isModal} modalText={"Already exist in the list"} />
      <Modal addedModal={addedModal} modalText={"Todo added"} />
      <Modal deletedModal={deletedModal} modalText={"Todo deleted"} />
    </div>
  );
}

export default App;
