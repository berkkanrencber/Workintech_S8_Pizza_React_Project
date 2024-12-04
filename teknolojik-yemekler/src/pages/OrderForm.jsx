import { useState, useEffect } from "react";
import "../styles/OrderForm.css";
import Logo from "../assets/logo.svg";
import FormBanner from "../assets/pictures/form-banner.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

function OrderForm({ setSuccessFormData }) {
  const navigate = useNavigate();

  const BASE_PRICE = 85.5;
  const TOPPING_PRICE = 5.0;

  const [formData, setFormData] = useState({
    name: "",
    size: "",
    crust: "",
    toppings: [],
    note: "",
    quantity: 1,
    topping_price: 0,
    total_price: 0,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const toppingPrice = formData.toppings.length * TOPPING_PRICE;
    const totalPrice = (BASE_PRICE + toppingPrice) * formData.quantity;

    setFormData((prev) => ({
      ...prev,
      topping_price: toppingPrice,
      total_price: totalPrice,
    }));
  }, [formData.toppings, formData.quantity]);

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
      topping_price: formData.topping_price,
      total_price: formData.total_price,
    };

    try {
      const response = await axios.post("https://reqres.in/api/pizza", payload);
      console.log("Sipariş Özeti:", response.data);
      setSuccessFormData(formData);
      setFormData({
        name: "",
        size: "",
        crust: "",
        toppings: [],
        note: "",
        quantity: 1,
        topping_price: 0,
        total_price: 0,
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
    <>
      <div>
        <header className="order-header">
          <img src={Logo} alt="Teknolojik Yemekler" className="order-logo" />
        </header>

        <main>
          <div className="order-banner">
            <img
              src={FormBanner}
              alt="Teknolojik Yemekler"
              className="order-logo"
            />
            <p className="order-header-nav">
              Anasayfa - Seçenekler -{" "}
              <span className="current-page">Sipariş Oluştur</span>
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
              Frontend Dev olarak hala position: absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak düzleştirilmiş mayalı buğday bazlı hamurdan yapılan
              İtalyan kökenli bir yemektir.
            </p>
          </div>
        </main>

        <div className="order-container">
          <form onSubmit={handleSubmit} className="order-form">
            <div className="form-group-row">
              <div className="form-group size-selector">
                <p>
                  Boyut Seç <span className="required">*</span>
                </p>
                <div className="radio-group">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="size"
                      value="S"
                      onChange={handleChange}
                      checked={formData.size === "S"}
                    />
                    <span className="radio-label">S</span>
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="size"
                      value="M"
                      onChange={handleChange}
                      checked={formData.size === "M"}
                    />
                    <span className="radio-label">M</span>
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="size"
                      value="L"
                      onChange={handleChange}
                      checked={formData.size === "L"}
                    />
                    <span className="radio-label">L</span>
                  </label>
                </div>
              </div>

              <div className="form-group crust-selector">
                <p>
                  Hamur Seç <span className="required">*</span>
                </p>
                <div className="select-wrapper">
                  <select
                    id="crust"
                    name="crust"
                    value={formData.crust}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      --Hamur Kalınlığı Seç--
                    </option>
                    <option value="İnce">İnce</option>
                    <option value="Kalın">Kalın</option>
                  </select>
                </div>
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
                    <span
                      className={`custom-checkbox ${
                        formData.toppings.includes(topping) ? "checked" : ""
                      }`}
                    ></span>
                    <span className="checkbox-text">{topping}</span>
                  </label>
                ))}
              </div>
            </div>

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
                  <span>{formData.topping_price.toFixed(2)}₺</span>
                </div>
                <div className="summary-item total">
                  <span>Toplam</span>
                  <span>{formData.total_price.toFixed(2)}₺</span>
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

      <Footer></Footer>
    </>
  );
}

OrderForm.propTypes = {
  setSuccessFormData: PropTypes.func,
};

export default OrderForm;
