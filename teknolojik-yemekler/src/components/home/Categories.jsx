import KoreIcon from "../../assets/icons/1.svg";
import PizzaIcon from "../../assets/icons/2.svg";
import BurgerIcon from "../../assets/icons/3.svg";
import KizartmaIcon from "../../assets/icons/4.svg";
import FastFoodIcon from "../../assets/icons/5.svg";
import IcecekIcon from "../../assets/icons/6.svg";
import "../../styles/Home.css";

function Categories() {
  const categories = [
    { icon: KoreIcon, label: "YENİ! Kore" },
    { icon: PizzaIcon, label: "Pizza" },
    { icon: BurgerIcon, label: "Burger" },
    { icon: KizartmaIcon, label: "Kızartmalar" },
    { icon: FastFoodIcon, label: "Fast food" },
    { icon: IcecekIcon, label: "Gazlı İçecek" },
  ];

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div className="category-item" key={index}>
          <img src={category.icon} alt={category.label} />
          <span>{category.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Categories;
