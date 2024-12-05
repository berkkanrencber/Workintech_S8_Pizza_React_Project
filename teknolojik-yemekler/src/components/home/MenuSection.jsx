import KoreIcon from "../../assets/icons/1.svg";
import PizzaIcon from "../../assets/icons/2.svg";
import BurgerIcon from "../../assets/icons/3.svg";
import KizartmaIcon from "../../assets/icons/4.svg";
import FastFoodIcon from "../../assets/icons/5.svg";
import IcecekIcon from "../../assets/icons/6.svg";
import "../../styles/Home.css";

function MenuSection() {
  const categories = [
    { icon: KoreIcon, label: "Ramen" },
    { icon: PizzaIcon, label: "Pizza" },
    { icon: BurgerIcon, label: "Burger" },
    { icon: KizartmaIcon, label: "French Fries" },
    { icon: FastFoodIcon, label: "Fast food" },
    { icon: IcecekIcon, label: "Soft Drinks" },
  ];

  return (
    <div className="menu-section">
      <div className="menu">
        <h3 className="menu-title">en çok paketlenen menüler</h3>
        <h2 className="menu-subtitle">Acıktıran Kodlara Doyuran Lezzetler</h2>
        <div className="menu-categories">
          {categories.map((category, index) => (
            <div
              className={`menu-category ${index === 1 ? "active" : ""}`}
              key={index}
            >
              <img src={category.icon} alt={category.label} />
              <span>{category.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
