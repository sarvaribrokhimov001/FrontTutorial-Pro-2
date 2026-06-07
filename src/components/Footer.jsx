import '../styles/Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__logo"> FrontTutorial 2 </h2>

        <ul className="footer__links">
            <li> <Link className="navbar__link" to="/home"> Home </Link> </li>
            <li> <Link className="navbar__link" to="/html"> HTML </Link> </li>
            <li> <Link className="navbar__link" to="/css"> CSS </Link> </li>
            <li> <Link className="navbar__link" to="/links"> Links </Link> </li>
            <li> <Link className="navbar__link" to="/shorts"> Shorts </Link> </li>
            <li> <Link className="navbar__link" to="/npm"> NPM </Link> </li>
            <li> <Link className="navbar__link" to="/git"> Git </Link> </li>
            <li> <Link className="navbar__link" to="/dbjson"> dbJSON </Link> </li>
            <li> <Link className="navbar__link" to="/api"> API </Link> </li>
        </ul>
        
        <p className="footer__copy"> © 2026 FrontTutorial | Built with React </p>
      </div>
    </footer>
  )}
export default Footer;