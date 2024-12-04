/* eslint-disable react/prop-types */
import "../styles/Success.css";
import Logo from "../assets/logo.svg";
import Footer from "../components/Footer";

function SuccessPage({ successFormData }) {
  return (
    <>
      <div className="success-container">
        <header className="success-header">
          <img src={Logo} alt="Teknolojik Yemekler" className="success-logo" />
        </header>
        <main className="success-message">
          <div className="success-body">
            <p className="success-tagline">lezzetin yolda</p>
            <h1 className="success-heading">SİPARİŞ ALINDI</h1>
            <div className="divider"></div>
          </div>

          <div className="success-summary">
            <h1>Position Absolute Acı Pizza</h1>
            <div className="success-summary-group">
              <p>
                Isim: <strong>{successFormData?.name || "Belirtilmedi"}</strong>
              </p>
              <p>
                Boyut:{" "}
                <strong>{successFormData?.size || "Belirtilmedi"}</strong>
              </p>
              <p>
                Hamur:{" "}
                <strong>{successFormData?.crust || "Belirtilmedi"}</strong>
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
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}

export default SuccessPage;
