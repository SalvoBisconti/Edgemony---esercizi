import CardSection from "./components/cardSection/CardSection";
import { characters } from "./mocks/characters";
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
      <CardSection data={characters} setModal={setModal} />
      {modal ? <Modal details={modal} setModal={setModal} /> : null}
    </div>
  );
};

export default Main;
