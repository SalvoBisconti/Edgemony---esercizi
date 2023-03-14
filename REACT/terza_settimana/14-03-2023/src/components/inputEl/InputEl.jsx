import "./index.css";

const InputEl = ({
  inputSearchEl,
  setInputSearchEl,
  setArrayEl,
  setIsModal,
  setAddedModal,
}) => {
  const addTodo = (e) => {
    e.preventDefault();
    setInputSearchEl(inputSearchEl);

    setArrayEl((prev) => {
      if (
        !prev.find(
          (todo) => inputSearchEl.toUpperCase() === todo.todo.toUpperCase()
        )
      ) {
        setAddedModal(true);
        setTimeout(() => {
          setAddedModal(false);
        }, 2000);

        return [
          ...prev,
          {
            id: prev.length + 1,
            todo: inputSearchEl,
            completed: false,
          },
        ];
      } else {
        setIsModal(true);
        setTimeout(() => {
          setIsModal(false);
        }, 2000);

        return prev;
      }
    });
  };

  return (
    <div className="InputEl">
      <form onSubmit={addTodo}>
        <div className="total-input">
          <input
            value={inputSearchEl}
            className="input-el"
            type="text"
            placeholder="Insert todo"
            onChange={(e) => setInputSearchEl(e.target.value)}
            required
          />

          <button type="submit" className="button">
            +
          </button>
        </div>
      </form>
    </div>
  );
};
export default InputEl;
