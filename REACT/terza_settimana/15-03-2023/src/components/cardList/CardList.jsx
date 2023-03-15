import Card from "../card/Card";
import "./index.css";
import { GET } from "../../utils/http";
import { useState, useEffect } from "react";

const CardList = ({ endpoint, title }) => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    GET(endpoint).then(({ products }) => setProductsData(products));
  }, []);

  return (
    <div className="CardList">
      <h1 className="list-title"> {title}</h1>
      <div className="card-list">
        {productsData.map((product) => (
          <Card productsData={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
export default CardList;
