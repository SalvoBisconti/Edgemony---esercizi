import "./index.css";

const Modal = ({ details, setModal }) => {
  return (
    <div className="Modal">
      <div className="modal-overlay" onClick={() => setModal(null)}>
        {" "}
      </div>
      <img src={details.image} alt={details.character} />
      <h1> {details.quote}</h1>
    </div>
  );
};

export default Modal;
