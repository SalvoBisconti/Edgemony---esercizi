import ContainerCard from "./components/cardSection/CardSection";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Title from "./components/title/Title";

import "./main.css";

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Hero />
      <Title name={"Galleria"} />
      <Gallery />
      <Title name={"Personaggi"} />
      <ContainerCard />
    </div>
  );
};

export default Main;
