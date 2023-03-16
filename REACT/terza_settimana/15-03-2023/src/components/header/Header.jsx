import "./index.css";

const Header = ({ setIsCartModal, isCartModal, modalCartContent }) => {
  const onHandleCart = () => {
    setIsCartModal(!isCartModal);
  };

  return (
    <div className="Header">
      <div className="logo-sec">
        <img src="" alt="logo" className="header-logo" />
      </div>
      <ul className="header-list">
        <li> Lorem </li>
        <li> Lorem </li>
        <li>
          <h3 onClick={onHandleCart}>
            {" "}
            {`🛒 ${JSON.parse(localStorage.getItem("cartStorage")).length} `}
          </h3>
        </li>
      </ul>
    </div>
  );
};
export default Header;
