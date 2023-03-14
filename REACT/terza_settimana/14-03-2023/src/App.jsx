import "./App.css";
import TodoList from "./components/todoList";
import Modal from "./components/modal";
import { useState } from "react";

function App() {
  const [isModal, setIsModal] = useState(false);
  return (
    <div className="App">
      <h1 className="title"> Todo list</h1>
      <TodoList setIsModal={setIsModal} />
      <Modal isModal={isModal} modalText={"Todo already exist in the list"} />
    </div>
  );
}

export default App;
