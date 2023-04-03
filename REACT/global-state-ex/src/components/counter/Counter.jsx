import "./index.css";
import { GlobalContext } from "../../store/states";
import { useContext } from "react";

const Counter = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const onHandleClick = (e) => dispatch({ type: e.target.className });

  return (
    <div className="Counter">
      <button className="decrement" onClick={onHandleClick}>
        -
      </button>
      <h1> {state.value} </h1>
      <button className="increment" onClick={onHandleClick}>
        +
      </button>
    </div>
  );
};

export default Counter;
