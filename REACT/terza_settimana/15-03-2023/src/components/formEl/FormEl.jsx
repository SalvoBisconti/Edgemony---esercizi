import "./index.css";

const FormEl = ({ inputEl, setInputEl, setCategory, category }) => {
  const onHandleSubmit = (e) => {
    e.preventDefault();
    // setCategory(inputEl);
    {
      console.log(inputEl);
    }
  };

  return (
    <div className="FormEl">
      <form onSubmit={onHandleSubmit}>
        <div className="form">
          <input
            value={inputEl}
            onChange={(e) => setInputEl(e.target.value)}
            type="text"
            className="input-form"
            placeholder="Insert category"
            required
          />{" "}
        </div>
      </form>
    </div>
  );
};

export default FormEl;
