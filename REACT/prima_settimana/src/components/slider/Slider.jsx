import { useState } from "react";
import "./index.css";

const Slider = () => {
  const imgArray = [
    "https://images5.alphacoders.com/347/347535.jpg",
    "https://rare-gallery.com/thumbs/559945-the-simpsons.jpg",
    "https://wallpapermemory.com/uploads/638/the-simpsons-wallpaper-1080p-351702.jpg",
  ];
  const [count, setCount] = useState(0);

  const changeImg = () => {
    setCount((count - 1 + imgArray.length) % imgArray.length);
  };

  return (
    <div className="Slider">
      <img src={imgArray[count]} alt="image_slider" className="img-slider" />
      <button className="left-slider" onClick={changeImg}>
        {"< "}
      </button>
      <button className="right-slider" onClick={changeImg}>
        {"> "}
      </button>
    </div>
  );
};

export default Slider;
