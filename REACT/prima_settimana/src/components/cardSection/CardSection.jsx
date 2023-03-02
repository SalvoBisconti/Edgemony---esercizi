// import { characters } from "../../mocks/characters";
import Card from "../card";
import "./index.css";

const CardSection = ({ data, setModal }) => {
  return (
    <div className="cardSection">
      {data.map((details) => (
        <Card carData={details} setModal={setModal} />
      ))}
    </div>
  );
};
export default CardSection;
