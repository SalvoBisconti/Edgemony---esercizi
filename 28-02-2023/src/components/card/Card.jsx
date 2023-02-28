import "./index.css";

const Card = ({ todosData }) => {
  return (
    <div className="card">
      <p>{todosData.todo}</p>
      <h5>{todosData.id}</h5>
    </div>
  );
};
export default Card;
