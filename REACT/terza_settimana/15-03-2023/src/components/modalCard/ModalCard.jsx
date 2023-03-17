import "./index.css";
import Slider from "../slider";

const ModalCard = ({
  modalContent,
  setModalContent,
  setModalCartContent,
  cartStorageContent,
}) => {
  const onHandleModal = () => {
    setModalContent({ isOpen: false });
  };

  const onHandleAddCart = () => {
    // setModalCartContent((prev) => [...prev, modalContent.productData]);
    // cartStorageContent.map((item) => {
    //   if (item.id === modalContent.productData.id) {
    //     alert("n'avutru n vo?");
    //   } else {
    //     localStorage.setItem(
    //       "cartStorage",
    //       JSON.stringify([...cartStorageContent, modalContent.productData])
    //     );
    //   }
    // });

    setModalCartContent((prev) => [...prev, modalContent.productData]);
    localStorage.setItem(
      "cartStorage",
      JSON.stringify([...cartStorageContent, modalContent.productData])
    );
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
          <Slider modalContent={modalContent} />
        </div>

        <div className="buy-section">
          <div className="price-section">
            <h4 className="sale-text">{`${modalContent.productData.discountPercentage}%`}</h4>
            <h3> {`$ ${modalContent.productData.price} `}</h3>
          </div>

          <button className="add-cart-btn" onClick={onHandleAddCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalCard;
