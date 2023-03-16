import "./index.css";

const CartItem = ({ product }) => {
  return (
    <div className="CartItem">
      <p>{product.title}</p>
      <h5> {`$ ${product.price}`}</h5>
    </div>
  );
};
export default CartItem;
