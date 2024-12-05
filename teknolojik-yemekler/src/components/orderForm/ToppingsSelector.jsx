/* eslint-disable react/prop-types */
function ToppingsSelector({ toppings, onChange }) {
    const toppingOptions = [
      "Pepperoni",
      "Sosis",
      "Domates",
      "Mısır",
      "Sucuk",
      "Ananas",
      "Jalapeno",
      "Kabak",
      "Kanada Jambonu",
      "Tavuk Izgara",
      "Soğan",
      "Sarımsak",
    ];
  
    return (
      <div className="form-group">
        <p>Ek Malzemeler</p>
        <p id="toppings-helper-text" className="helper-text">
          En Fazla 10 Malzeme Seçebilirsiniz. 5₺
        </p>
        <div className="toppings-grid">
          {toppingOptions.map((topping) => (
            <label key={topping} className="checkbox-label">
              <input
                type="checkbox"
                name="toppings"
                value={topping}
                onChange={onChange}
                checked={toppings.includes(topping)}
              />
              <span className={`custom-checkbox ${toppings.includes(topping) ? "checked" : ""}`}></span>
              <span className="checkbox-text">{topping}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }
  
  export default ToppingsSelector;