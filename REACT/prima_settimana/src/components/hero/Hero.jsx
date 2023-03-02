import "./index.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <img
        className="hero-img"
        src="https://www.teahub.io/photos/full/3-32747_1920x1080-the-simpsons-wallpapers-los-simpson-wallpaper-4k.jpg"
        alt="hero"
      />
      <h1 className="hero-txt">The Simpson</h1>
    </div>
  );
};
export default Hero;
