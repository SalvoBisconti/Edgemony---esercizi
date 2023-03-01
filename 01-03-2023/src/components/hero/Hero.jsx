import "./index.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <img
        className="hero-img"
        src="https://i.pinimg.com/originals/c3/88/fc/c388fcba9cfcc7d1045813ab0d3704e6.jpg"
        alt="hero"
      />
      <h1 className="hero-txt"> Games of thrones</h1>
    </div>
  );
};
export default Hero;
