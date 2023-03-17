import "./index.css";
import CartItem from "../cartItem";

const ModalCart = ({
  isCartModal,
  cartStorageContent,
  setModalCartContent,
}) => {
  return (
    <div className={`ModalCart ${isCartModal && "modal-cart-show "}`}>
      <div className="cart-content">
        <h2 className="cart-title"> Your cart</h2>
        <div className="items-cart-list">
          {cartStorageContent.map((item) => (
            <CartItem
              product={item}
              setModalCartContent={setModalCartContent}
              cartStorageContent={cartStorageContent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ModalCart;
