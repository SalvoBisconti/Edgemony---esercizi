import MiniCard from "../miniCard/MiniCard";
import "./index.css";
import { GET } from "../../utils/http";
import { useState, useEffect } from "react";

const MiniCardList = (endpoint, inputEl, category) => {
  const [miniProductsData, setMiniProductsData] = useState([]);

  //FIXME: L'avanzato non sono riuscito a finirlo perchè l'api mi dava continui
  //      problemi di status 503. E credi sia dovuto anche dalla mia connessione,
  //      data che è da stamattina che sono collegato via hotspot cellulare

  useEffect(() => {
    GET(`/products/category/smartphones`).then(({ products }) =>
      setMiniProductsData(products)
    );
  }, []);

  return (
    <div className="MiniCardList">
      <div className="miniCardList-product">
        {miniProductsData.map((product) => (
          <MiniCard productsData={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
export default MiniCardList;
