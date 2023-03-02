import "./index.css";

const Card = ({ carData, setModal }) => {
  const quoteGen = () => {
    setModal(() => carData);
  };
  return (
    <div className="card">
      <div className="img-sec">
        <img className="img" src={carData.image} alt={carData.character} />
      </div>
      <div className="bottom-area">
        <h2 className="name">{carData.character}</h2>
        <button className="quote-btn" onClick={quoteGen}>
          {" "}
          Quote
        </button>
      </div>
    </div>
  );
};
export default Card;
