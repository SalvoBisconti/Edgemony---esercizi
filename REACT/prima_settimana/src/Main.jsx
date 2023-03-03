import { useState } from "react";

import CardSection from "./components/cardSection/CardSection";
import Footer from "./components/footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Modal from "./components/modal/Modal";
import ReturnButton from "./components/returnButton";
import Slider from "./components/slider";
import Title from "./components/title/Title";

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
      <Title name={"Gallery"} />
      <Slider />
      <Title name={"Characters"} />
      <CardSection setModal={setModal} />
      <ReturnButton />
      <Footer />
      {modal ? <Modal details={modal} setModal={setModal} /> : null}
    </div>
  );
};

export default Main;
