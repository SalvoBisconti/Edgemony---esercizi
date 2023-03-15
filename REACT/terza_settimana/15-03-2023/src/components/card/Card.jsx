import "./index.css";
import { shortingDescription } from "../../utils/functions";
const Card = ({ productsData }) => {
  return (
    <div className="Card">
      <img
        src={productsData.thumbnail}
        alt="product image"
        className="card-img"
      />
      <div className="card-text">
        <h4>{productsData.title}</h4>
        <p>{shortingDescription(productsData.description)}</p>
        <p>{productsData.price}</p>
      </div>
    </div>
  );
};
export default Card;
