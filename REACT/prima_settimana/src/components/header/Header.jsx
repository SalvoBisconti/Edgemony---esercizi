import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href name="top">
          {" "}
        </a>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg"
          alt="logo"
          className="logo"
        />
      </div>
      <ul className="list">
        <li>{<a href="https://it.wikipedia.org/wiki/I_Simpson"> Info</a>}</li>
        <li>
          {""}
          <a href="https://www.disneyplus.com/it-it/series/i-simpson/3ZoBZ52QHb4x">
            {" "}
            Watch now{" "}
          </a>
        </li>
        <li>
          {" "}
          <a href="https://play.google.com/store/apps/details?id=com.ea.game.simpsons4_row&hl=it&gl=US">
            Game
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
