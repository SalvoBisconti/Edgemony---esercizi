import "./index.css";
import CartItem from "../cartItem";
const ModalCart = ({ isCartModal, modalCartContent }) => {
  return (
    <div className={`ModalCart ${isCartModal && "modal-cart-show "}`}>
      <div className="cart-content">
        <h2> Cart</h2>
        {modalCartContent.map((item) => (
          <CartItem product={item} />
        ))}
      </div>
    </div>
  );
};
export default ModalCart;
