import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <h1 className="navbar__logo"> FrontTutorial </h1>
        <li> <Link className="navbar__link" to="/home"> Home </Link> </li>
        <li> <Link className="navbar__link" to="/html"> HTML </Link> </li>
        <li> <Link className="navbar__link" to="/css"> CSS </Link> </li>
        <li> <Link className="navbar__link" to="/links"> Links </Link> </li>
        <li> <Link className="navbar__link" to="/shorts"> Shorts </Link> </li>
        <li> <Link className="navbar__link" to="/npm"> NPM </Link> </li>
        <li> <Link className="navbar__link" to="/git"> Git </Link> </li>
        <li> <Link className="navbar__link" to="/dbjson"> dbJSON </Link> </li>
      </ul>
    </div>
  );
};
export default Navbar;