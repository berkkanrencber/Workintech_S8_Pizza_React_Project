/* eslint-disable react/prop-types */
function OrderSummary({ toppingPrice, totalPrice }) {
    return (
      <div className="order-summary">
        <h3>Sipariş Toplamı</h3>
        <div className="summary-item">
          <span>Seçimler</span>
          <span>{toppingPrice.toFixed(2)}₺</span>
        </div>
        <div className="summary-item total">
          <span>Toplam</span>
          <span>{totalPrice.toFixed(2)}₺</span>
        </div>
      </div>
    );
  }
  
  export default OrderSummary;