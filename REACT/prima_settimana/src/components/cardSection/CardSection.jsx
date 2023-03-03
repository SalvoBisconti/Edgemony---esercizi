import { useState, useEffect } from "react";
import Card from "../card";
import "./index.css";

const CardSection = ({ setModal }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=30")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="cardSection">
      {data.map((details) => (
        <Card carData={details} setModal={setModal} />
      ))}
    </div>
  );
};
export default CardSection;
