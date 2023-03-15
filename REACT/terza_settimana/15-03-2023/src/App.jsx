import CardList from "./components/cardList";
import Header from "./components/header";
import Hero from "./components/hero";
import MiniCardList from "./components/miniCardList";
import Footer from "./components/footer";
import { useState } from "react";

import "./App.css";

function App() {
  const [inputEl, setInputEl] = useState("");
  const [category, setCategory] = useState("smartphones");
  return (
    <div className="App">
      <Header />
      <Hero
        setInputEl={setInputEl}
        inputEl={inputEl}
        setCategory={setCategory}
        category={category}
      />
      <MiniCardList
        endpoint={"/products"}
        inputEl={inputEl}
        category={category}
      />
      <CardList endpoint={"/products"} title={"Products:"} />
    </div>
  );
}

export default App;
