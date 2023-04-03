import "./App.css";
import Counter from "./components/counter";
import { GlobalContext, initGlobalContext } from "./store/states";
import { useReducer } from "react";
import { reduce } from "./store/reduce";

function App() {
  const [state, dispatch] = useReducer(reduce, initGlobalContext);
  return (
    <div className="App">
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Counter />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
