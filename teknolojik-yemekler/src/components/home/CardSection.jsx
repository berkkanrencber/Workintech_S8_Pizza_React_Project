import Kart1 from "../../assets/cta/kart-1.png";
import Kart2 from "../../assets/cta/kart-2.png";
import Kart3 from "../../assets/cta/kart-3.png";
import "../../styles/Home.css";

function CardSection() {
  return (
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
  );
}

export default CardSection;
