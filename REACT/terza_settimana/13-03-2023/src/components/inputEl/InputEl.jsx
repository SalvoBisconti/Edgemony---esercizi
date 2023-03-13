import "./index.css";

const InputEl = ({ inputSearchEl, setInputSearchEl, setArrayEl, arrayEl }) => {
  const addTodo = (e) => {
    e.preventDefault();
    setInputSearchEl(inputSearchEl);
    setArrayEl([...arrayEl, inputSearchEl]);
  };

  return (
    <div className="InputEl">
      <form onSubmit={addTodo}>
        <input
          className="input-el"
          type="text"
          placeholder="Insert todo"
          onChange={(e) => setInputSearchEl(e.target.value)}
        />

        <button type="submit" className="button">
          +
        </button>
      </form>{" "}
      {console.log(arrayEl)}
    </div>
  );
};
export default InputEl;
