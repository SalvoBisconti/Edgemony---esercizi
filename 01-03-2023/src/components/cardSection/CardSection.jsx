import { caracter } from "../../mocks/caracterList";
import Card from "../card";
import "./index.css";

const CardSection = () => {
  return (
    <div className="cardSection">
      {caracter.map((car) => (
        <Card carData={car} />
      ))}
    </div>
  );
};
export default CardSection;
