import "./index.css";

const ModalCard = ({
  modalContent,
  setModalContent,
  setModalCartContent,
  modalCartContent,
}) => {
  const onHandleModal = () => {
    setModalContent({ isOpen: false });
  };

  const onHandleAddCart = () => {
    setModalCartContent((prev) => [...prev, modalContent.productData]);
  };

  return (
    <div className="ModalCard">
      <div className="modal-background" onClick={onHandleModal}></div>
      <div className="modal-content">
        <div className="description-text">
          <h2> {modalContent.productData.title}</h2>
          <p>{modalContent.productData.description}</p>
        </div>
        <div className="images-section">
          {modalContent.productData.images.map((image, i) => (
            <img
              src={image}
              alt={`image ${i + 1}`}
              className="galery-img"
              key={i + 1}
            />
          ))}
        </div>
        <div className="price-section">
          <h3> {`$ ${modalContent.productData.price} `}</h3>
          <h3 className="cart-icon" onClick={onHandleAddCart}>
            🛒
          </h3>
        </div>
      </div>
    </div>
  );
};
export default ModalCard;
