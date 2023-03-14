import "./index.css";

const Modal = ({ isModal, modalText, addedModal, deletedModal }) => {
  return (
    <div
      className={`Modal ${isModal && "modal-show"} ${
        addedModal && "modal-show"
      } ${deletedModal && "modal-show"}`}
    >
      <h3> {modalText}</h3>
    </div>
  );
};

export default Modal;
