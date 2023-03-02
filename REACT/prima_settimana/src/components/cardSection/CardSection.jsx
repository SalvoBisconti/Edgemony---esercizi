import { characters } from "../../mocks/characters";
import Card from "../card";
import "./index.css";

const CardSection = ({ setModal }) => {
  return (
    <div className="cardSection">
      {characters.map((details) => (
        <Card carData={details} setModal={setModal} />
      ))}
    </div>
  );
};
export default CardSection;
