/* eslint-disable react/prop-types */
function QuantityChanger({ quantity, onQuantityChange }) {
    return (
      <div className="quantity-group">
        <button
          type="button"
          onClick={() => onQuantityChange("decrement")}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          type="button"
          onClick={() => onQuantityChange("increment")}
        >
          +
        </button>
      </div>
    );
  }
  
  export default QuantityChanger;