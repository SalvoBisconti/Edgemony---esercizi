import { useState } from "react";
import "./index.css";

const Slider = () => {
  const imgArray = [
    "https://images5.alphacoders.com/347/347535.jpg",
    "https://rare-gallery.com/thumbs/559945-the-simpsons.jpg",
    "https://wallpapermemory.com/uploads/638/the-simpsons-wallpaper-1080p-351702.jpg",
  ];
  const [count, setCount] = useState(0);

  const onClickChangeRight = () => {
    setCount(count + 1);
    if (count > 1) {
      setCount(count === 0);
      console.log("stop");
    }
  };

  const onClickChangeLeft = () => {
    setCount(count - 1);

    if (count < 1) {
      setCount(count === 2);
      console.log("stop");
    }
  };
  return (
    <div className="Slider">
      <img src={imgArray[count]} alt="image_slider" className="img-slider" />
      <button className="left-slider" onClick={onClickChangeLeft}>
        {"< "}
      </button>
      <button className="right-slider" onClick={onClickChangeRight}>
        {"> "}
      </button>
    </div>
  );
};

export default Slider;
