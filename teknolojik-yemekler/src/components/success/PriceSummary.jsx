/* eslint-disable react/prop-types */
function PriceSummary({ successFormData }) {
    return (
      <div className="price-summary">
        <h2>Sipariş Toplamı</h2>
        <div className="success-summary-item">
          <span>Seçimler</span>
          <span>{successFormData?.topping_price.toFixed(2)}₺</span>
        </div>
        <div className="success-summary-item total">
          <span>Toplam</span>
          <span>{successFormData?.total_price.toFixed(2)}₺</span>
        </div>
      </div>
    );
  }
  
  export default PriceSummary;