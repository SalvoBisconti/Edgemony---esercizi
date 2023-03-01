import "./index.css";

const Gallery = () => {
  const imgArray = [
    "https://images.hdqwalls.com/download/dragons-mother-game-of-thrones-6y-2880x1800.jpg",
    "https://images3.alphacoders.com/869/869197.jpg",
    "https://wallpapers.com/images/featured/92acb30ilmkjbmu9.jpg",
  ];

  //   let sliderState = 0;
  //   const rightButton = () => {

  //     sliderState++;
  //     if (sliderState > 2) {
  //       sliderState = 0;
  //     }
  //   };

  return (
    <div className="Gallery">
      <img className="gallery-img" src={imgArray[0]} alt="gallery img" />
      <img className="gallery-img" src={imgArray[1]} alt="gallery img" />
      <img className="gallery-img" src={imgArray[2]} alt="gallery img" />

      {/* <div className="slider">
        <button onClick={rightButton}> D </button>
        <button onClick={leftButton}> S </button>
      </div> */}
    </div>
  );
};

export default Gallery;
