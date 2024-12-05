/* eslint-disable react/prop-types */
function OrderSummary({ successFormData }) {
    return (
      <div className="success-summary">
        <h1>Position Absolute Acı Pizza</h1>
        <div className="success-summary-group">
          <p>
            Isim: <strong>{successFormData?.name || "Belirtilmedi"}</strong>
          </p>
          <p>
            Boyut: <strong>{successFormData?.size || "Belirtilmedi"}</strong>
          </p>
          <p>
            Hamur: <strong>{successFormData?.crust || "Belirtilmedi"}</strong>
          </p>
          <p>
            Ek Malzemeler:
            <strong>
              {" "}
              {successFormData?.toppings?.length > 0
                ? successFormData.toppings.join(", ")
                : "Hiçbiri"}
            </strong>
          </p>
          <p>
            Not: <strong>{successFormData?.note || "Yok"}</strong>
          </p>
        </div>
      </div>
    );
  }
  
  export default OrderSummary;