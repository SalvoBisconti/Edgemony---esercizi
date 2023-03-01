import "./index.css";

const Gallery = () => {
  const imgArray = [
    "https://images.hdqwalls.com/download/dragons-mother-game-of-thrones-6y-2880x1800.jpg",
    "https://images3.alphacoders.com/869/869197.jpg",
    "https://wallpapers.com/images/featured/92acb30ilmkjbmu9.jpg",
  ];

  return (
    <div className="Gallery">
      <div className="gallery">
        {imgArray.map((img) => (
          <img className="gallery-img" src={img} alt="gallery img" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
