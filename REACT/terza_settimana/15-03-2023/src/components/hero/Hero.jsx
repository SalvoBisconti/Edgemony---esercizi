import "./index.css";
import FormEl from "../formEl";
const Hero = ({ setInputEl, inputEl, setCategory, category }) => {
  return (
    <div className="Hero">
      <img
        src="https://t3.ftcdn.net/jpg/01/17/33/22/360_F_117332203_ekwDZkViF6M3itApEFRIH4844XjJ7zEb.jpg"
        alt="hero image"
        className="hero-img"
      />
      <FormEl
        setInputEl={setInputEl}
        inputEl={inputEl}
        setCategory={setCategory}
        category={category}
      />
    </div>
  );
};
export default Hero;
