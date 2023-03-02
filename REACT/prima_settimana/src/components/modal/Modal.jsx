import "./index.css";

const Modal = ({ details, setModal }) => {
  return (
    <div className="Modal">
      <div className="modal-overlay" onClick={() => setModal(null)}></div>
      <div className="modal-content">
        <img
          src={details.image}
          alt={details.character}
          className="img-modal"
        />
        <div className="texts-modal">
          <h1 className="cit-modal"> {`${details.character} always says:`}</h1>
          <h1 className="quote-modal">{details.quote}</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
