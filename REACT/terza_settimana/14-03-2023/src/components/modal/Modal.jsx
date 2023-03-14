import "./index.css";

const Modal = ({ isModal, modalText }) => {
  return (
    <div className={`Modal ${isModal && "modal-show"}`}>
      <h3> {modalText}</h3>
    </div>
  );
};

export default Modal;
