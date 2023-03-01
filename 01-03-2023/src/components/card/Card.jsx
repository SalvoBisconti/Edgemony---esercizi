import "./index.css";

const Card = ({ carData }) => {
  return (
    <div className="card">
      <h2>{carData.fullName}</h2>{" "}
      <img className="img" src={carData.imageUrl} alt={carData.fullName} />
      <div>
        <h5> Titolo: {carData.title}</h5>
        <h5> Casata: {carData.family}</h5>
      </div>
    </div>
  );
};
export default Card;
