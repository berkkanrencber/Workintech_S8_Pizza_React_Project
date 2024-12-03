import { useState } from "react";
import "../styles/OrderForm.css";
import Logo from "../assets/logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function OrderForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    size: "",
    crust: "",
    toppings: [],
    note: "",
    quantity: 1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        toppings: checked
          ? [...prev.toppings, value]
          : prev.toppings.filter((topping) => topping !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleQuantityChange = (operation) => {
    setFormData((prev) => ({
      ...prev,
      quantity:
        operation === "increment"
          ? prev.quantity + 1
          : Math.max(1, prev.quantity - 1),
    }));
  };

  const validateForm = () => {
    if (formData.name.length < 3) {
      setFormError("İsim en az 3 karakter olmalı.");
      return false;
    }
    if (!formData.size) {
      setFormError("Lütfen pizza boyutunu seçiniz.");
      return false;
    }
    if (formData.toppings.length < 4 || formData.toppings.length > 10) {
      setFormError("Lütfen en az 4, en fazla 10 malzeme seçiniz.");
      return false;
    }
    setFormError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = {
      isim: formData.name,
      boyut: formData.size,
      malzemeler: formData.toppings,
      özel: formData.note,
      adet: formData.quantity,
    };

    try {
      const response = await axios.post("https://reqres.in/api/pizza", payload);
      console.log("Sipariş Özeti:", response.data);
      setFormData({
        name: "",
        size: "",
        crust: "",
        toppings: [],
        note: "",
        quantity: 1,
      });
      navigate("/success");
    } catch (error) {
      console.error("Sipariş gönderilirken bir hata oluştu:", error);
      alert("Sipariş gönderilemedi. Lütfen tekrar deneyiniz.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Başlık Bölümü */}
      <div className="order-header">
        <img src={Logo} alt="Teknolojik Yemekler" className="order-logo" />
        <p className="order-header-nav">
          Anasayfa - Seçenekler -{" "}
          <span className="current-page">Sipariş Oluştur</span>
        </p>
      </div>

      {/* Sipariş Formu */}
      <div className="order-container">
        <h1 className="order-title">Position Absolute Acı Pizza</h1>
        <div className="order-price-and-rating">
          <p className="order-price">85.50₺</p>
          <div className="order-rating">
            <span className="rating-value">4.9</span>
            <span className="rating-count">(200)</span>
          </div>
        </div>
        <p className="order-description">
          Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak
          düzleştirilmiş mayalı buğday bazlı hamurdan yapılan İtalyan kökenli
          bir yemektir.
        </p>

        <form onSubmit={handleSubmit} className="order-form">
          <div className="form-group-row">
            <div className="form-group">
              <p>
                Boyut Seç <span className="required">*</span>
              </p>
              <label className="radio-option">
                <input
                  type="radio"
                  name="size"
                  value="Küçük"
                  onChange={handleChange}
                  checked={formData.size === "Küçük"}
                />
                <span className="radio-label">Küçük</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="size"
                  value="Orta"
                  onChange={handleChange}
                  checked={formData.size === "Orta"}
                />
                <span className="radio-label">Orta</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="size"
                  value="Büyük"
                  onChange={handleChange}
                  checked={formData.size === "Büyük"}
                />
                <span className="radio-label">Büyük</span>
              </label>
            </div>

            <div className="form-group">
              <p>
                Hamur Seç <span className="required">*</span>
              </p>
              <select
                id="crust"
                name="crust"
                value={formData.crust}
                onChange={handleChange}
                required
              >
                <option value="">Hamur Kalınlığı</option>
                <option value="İnce">İnce</option>
                <option value="Kalın">Kalın</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <p>Ek Malzemeler</p>
            <p id="toppings-helper-text" className="helper-text">
              En Fazla 10 Malzeme Seçebilirsiniz. 5₺
            </p>
            <div className="toppings-grid">
              {[
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
              ].map((topping) => (
                <label key={topping} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="toppings"
                    value={topping}
                    onChange={handleChange}
                    checked={formData.toppings.includes(topping)}
                  />
                  <span className="checkbox-text">{topping}</span>
                </label>
              ))}
            </div>
          </div>

          {/* İsim Alanı */}
          <div className="form-group">
            <label htmlFor="name">
              İsim <span className="required">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Adınızı giriniz"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="note">Sipariş Notu</label>
            <textarea
              id="note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Siparişe eklemek istediğiniz bir not var mı?"
            />
          </div>
          <hr className="hr"></hr>
          <div className="quantity-and-summary">
            <div className="quantity-group">
              <button
                type="button"
                onClick={() => handleQuantityChange("decrement")}
              >
                -
              </button>
              <span>{formData.quantity}</span>
              <button
                type="button"
                onClick={() => handleQuantityChange("increment")}
              >
                +
              </button>
            </div>

            <div className="order-summary">
              <h3>Sipariş Toplamı</h3>
              <div className="summary-item">
                <span>Seçimler</span>
                <span>{(formData.toppings.length * 5.0).toFixed(2)}₺</span>
              </div>
              <div className="summary-item total">
                <span>Toplam</span>
                <span>
                  {(
                    formData.toppings.length * 5.0 +
                    85.5 * formData.quantity
                  ).toFixed(2)}
                  ₺
                </span>
              </div>
            </div>

            {formError && <p className="form-error">{formError}</p>}

            <button
              type="submit"
              className="order-button"
              disabled={isSubmitting}
            >
              Sipariş Ver
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
