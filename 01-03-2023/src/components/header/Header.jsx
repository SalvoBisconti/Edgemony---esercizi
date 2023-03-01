import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <ul className="list">
        <li>
          {
            <a href="https://it.wikipedia.org/wiki/Il_Trono_di_Spade_(serie_televisiva)">
              {" "}
              Info
            </a>
          }
        </li>
        <li>
          {""}
          <a href="https://www.hbo.com/game-of-thrones"> Guarda adesso </a>
        </li>
        <li>
          {" "}
          <a href="https://www.libripiuvenduti.it/libri-il-trono-di-spade/">
            Libri
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
