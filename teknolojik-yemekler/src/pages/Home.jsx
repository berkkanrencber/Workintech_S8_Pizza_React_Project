import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import KoreIcon from "../assets/icons/1.svg";
import PizzaIcon from "../assets/icons/2.svg";
import BurgerIcon from "../assets/icons/3.svg";
import KizartmaIcon from "../assets/icons/4.svg";
import FastFoodIcon from "../assets/icons/5.svg";
import IcecekIcon from "../assets/icons/6.svg";
import Kart1 from "../assets/cta/kart-1.png";
import Kart2 from "../assets/cta/kart-2.png";
import Kart3 from "../assets/cta/kart-3.png";
import TerminalPizza from "../assets/pictures/food-1.png";
import PositionPizza from "../assets/pictures/food-2.png";
import UseEffectBurger from "../assets/pictures/food-3.png";
import "../styles/Home.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="container">
        <img src={Logo} alt="Teknolojik Yemekler Logo" className="logo" />
        <p className="heading-tagline">fırsatı kaçırma</p>
        <h1 className="heading">KOD ACIKTIRIR</h1>
        <h2 className="heading">PİZZA, DOYURUR</h2>
        <Link to="/order">
          <button className="button">Acıktım</button>
        </Link>
      </div>

      <div className="categories">
        <div className="category-item">
          <img src={KoreIcon} alt="Kore" />
          <span>YENİ! Kore</span>
        </div>
        <div className="category-item">
          <img src={PizzaIcon} alt="Pizza" />
          <span>Pizza</span>
        </div>
        <div className="category-item">
          <img src={BurgerIcon} alt="Burger" />
          <span>Burger</span>
        </div>
        <div className="category-item">
          <img src={KizartmaIcon} alt="Kızartmalar" />
          <span>Kızartmalar</span>
        </div>
        <div className="category-item">
          <img src={FastFoodIcon} alt="Fast Food" />
          <span>Fast food</span>
        </div>
        <div className="category-item">
          <img src={IcecekIcon} alt="Gazlı İçecek" />
          <span>Gazlı İçecek</span>
        </div>
      </div>

      <div className="card-section">
        <div className="cards-container">
          <div
            className="card large-card"
            style={{ backgroundImage: `url(${Kart1})` }}
          >
            <div className="card-content">
              <h2 className="large-card-heading">Özel Lezzetus</h2>
              <p>Position: Absolute Acı Burger</p>
              <button>SİPARİŞ VER</button>
            </div>
          </div>
          <div
            className="card small-card"
            style={{ backgroundImage: `url(${Kart2})` }}
          >
            <div className="card-content">
              <h2>Hackathon Burger Menü</h2>
              <button>SİPARİŞ VER</button>
            </div>
          </div>
          <div
            className="card small-card"
            style={{ backgroundImage: `url(${Kart3})` }}
          >
            <div className="card-content">
              <h2>
                <span>Çoooook</span> Hızlı npm gibi Kurye
              </h2>
              <button>SİPARİŞ VER</button>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-section">
        <div className="menu">
          <h3 className="menu-title">en çok paketlenen menüler</h3>
          <h2 className="menu-subtitle">Acıktıran Kodlara Doyuran Lezzetler</h2>
          <div className="menu-categories">
            <div className="menu-category">
              <img src={KoreIcon} alt="Ramen" />
              <span>Ramen</span>
            </div>
            <div className="menu-category active">
              <img src={PizzaIcon} alt="Pizza" />
              <span>Pizza</span>
            </div>
            <div className="menu-category">
              <img src={BurgerIcon} alt="Burger" />
              <span>Burger</span>
            </div>
            <div className="menu-category">
              <img src={KizartmaIcon} alt="French Fries" />
              <span>French fries</span>
            </div>
            <div className="menu-category">
              <img src={FastFoodIcon} alt="Fast Food" />
              <span>Fast food</span>
            </div>
            <div className="menu-category">
              <img src={IcecekIcon} alt="Soft Drinks" />
              <span>Soft drinks</span>
            </div>
          </div>
        </div>
      </div>

      <div className="popular-section">
        <div className="popular-cards">
          <div className="popular-card">
            <img src={TerminalPizza} alt="Terminal Pizza" />
            <h4>Terminal Pizza</h4>
            <div className="popular-card-info">
              <p>4.9</p>
              <p>(200)</p>
              <span>60₺</span>
            </div>
          </div>
          <div className="popular-card">
            <img src={PositionPizza} alt="Position Absolute Acı Pizza" />
            <h4>Position Absolute Acı Pizza</h4>
            <div className="popular-card-info">
              <p>4.9</p>
              <p>(928)</p>
              <span>85₺</span>
            </div>
          </div>
          <div className="popular-card">
            <img src={UseEffectBurger} alt="useEffect Tavuklu Burger" />
            <h4>useEffect Tavuklu Burger</h4>
            <div className="popular-card-info">
              <p>4.9</p>
              <p>(462)</p>
              <span>75₺</span>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Home;
