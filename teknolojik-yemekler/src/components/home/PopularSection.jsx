import TerminalPizza from "../../assets/pictures/food-1.png";
import PositionPizza from "../../assets/pictures/food-2.png";
import UseEffectBurger from "../../assets/pictures/food-3.png";
import "../../styles/Home.css";

function PopularSection() {
  const popularItems = [
    {
      image: TerminalPizza,
      name: "Terminal Pizza",
      rating: 4.9,
      reviews: 200,
      price: 60,
    },
    {
      image: PositionPizza,
      name: "Position Absolute Acı Pizza",
      rating: 4.9,
      reviews: 928,
      price: 85,
    },
    {
      image: UseEffectBurger,
      name: "useEffect Tavuklu Burger",
      rating: 4.9,
      reviews: 462,
      price: 75,
    },
  ];

  return (
    <div className="popular-section">
      <div className="popular-cards">
        {popularItems.map((item, index) => (
          <div className="popular-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <div className="popular-card-info">
              <p>{item.rating}</p>
              <p>({item.reviews})</p>
              <span>{item.price}₺</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularSection;
