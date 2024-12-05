import FormBanner from "../../assets/pictures/form-banner.png";

function OrderBanner() {
  return (
    <div className="order-banner">
      <img
        src={FormBanner}
        alt="Teknolojik Yemekler"
        className="order-logo"
      />
      <p className="order-header-nav">
        Anasayfa - Seçenekler - <span className="current-page">Sipariş Oluştur</span>
      </p>
      <h1 className="order-title">Position Absolute Acı Pizza</h1>
      <div className="order-price-and-rating">
        <p className="order-price">85.50₺</p>
        <div className="order-rating">
          <span className="rating-value">4.9</span>
          <span className="rating-count">(200)</span>
        </div>
      </div>
      <p className="order-description">
        Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam
        sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle
        kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek
        sıcaklıkta pişirilen, genellikle yuvarlak düzleştirilmiş mayalı buğday bazlı
        hamurdan yapılan İtalyan kökenli bir yemektir.
      </p>
    </div>
  );
}

export default OrderBanner;