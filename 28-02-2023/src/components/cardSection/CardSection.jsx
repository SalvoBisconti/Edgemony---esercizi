import { todoList } from "../../mocks/todoList";
import Card from "../card";
import "./index.css";

const CardSection = () => {
  return (
    <div className="cardSection">
      {todoList.map((todo) => (
        <Card todosData={todo} />
      ))}
    </div>
  );
};
export default CardSection;
