import ContainerCard from "./components/cardSection/CardSection";
import Slider from "./components/slider";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Modal from "./components/modal/Modal";
import Title from "./components/title/Title";
import { useState } from "react";

import "./main.css";

const Main = () => {
  const [count, setCount] = useState(false);
  const [modal, setModal] = useState(null);

  return (
    <div className={`Main ${count && "darkMode"}`}>
      <Header />
      <button className="btn-mode" onClick={() => setCount((prev) => !prev)}>
        {" "}
        {count ? "☀️" : "🌙"}{" "}
      </button>
      <Hero />
      <Title name={"Galleria"} />
      <Slider />
      <Title name={"Personaggi"} />
      <ContainerCard />
      <Modal details={modal} setModal={setModal} />
    </div>
  );
};

export default Main;
