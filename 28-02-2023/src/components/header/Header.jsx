import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <ul className="list">
        <li>{<a href="http://google.com"> Google</a>}</li>
        <li>
          {""}
          <a href="https://www.amazon.it/"> Amazon </a>
        </li>
        <li>
          {" "}
          <a href="https://www.netflix.com/it/">Netflix</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
