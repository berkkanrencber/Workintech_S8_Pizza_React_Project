import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "../../styles/Home.css";

function Header() {
  return (
    <div className="container">
      <img src={Logo} alt="Teknolojik Yemekler Logo" className="logo" />
      <p className="heading-tagline">fırsatı kaçırma</p>
      <h1 className="heading">KOD ACIKTIRIR</h1>
      <h2 className="heading">PİZZA, DOYURUR</h2>
      <Link to="/order">
        <button className="button">Acıktım</button>
      </Link>
    </div>
  );
}

export default Header;
