import "./index.css";
import { shortingDescription } from "../../utils/functions";
const Card = ({ productsData, setModalContent }) => {
  const onHandleClickDetails = () => {
    setModalContent({
      productData: productsData,
      isOpen: true,
    });
  };
  return (
    <div className="Card" onClick={onHandleClickDetails}>
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
