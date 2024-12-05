import { useState, useEffect } from "react";
import "../styles/OrderForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import "../styles/OrderForm.css";
import Header from "../components/orderForm/Header";
import OrderBanner from "../components/orderForm/OrderBanner";
import SizeSelector from "../components/orderForm/SizeSelector";
import CrustSelector from "../components/orderForm/CrustSelector";
import ToppingsSelector from "../components/orderForm/ToppingsSelector";
import UserDetail from "../components/orderForm/UserDetails";
import QuantityChanger from "../components/orderForm/QuantityChanger";
import OrderSummary from "../components/orderForm/OrderSummary";

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
        <Header />
        <main>
          <OrderBanner />
        </main>
        <div className="order-container">
          <form onSubmit={handleSubmit} className="order-form">
            <div className="form-group-row">
              <SizeSelector size={formData.size} onChange={handleChange} />
              <CrustSelector crust={formData.crust} onChange={handleChange} />
            </div>

            <ToppingsSelector
              toppings={formData.toppings}
              onChange={handleChange}
            />

            <UserDetail name={formData.name} onChange={handleChange} />

            <div className="form-group name-note">
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
              <QuantityChanger
                quantity={formData.quantity}
                onQuantityChange={handleQuantityChange}
              />
              <OrderSummary
                toppingPrice={formData.topping_price}
                totalPrice={formData.total_price}
              />
            </div>

            {formError && <p className="form-error">{formError}</p>}

            <button
              type="submit"
              className="order-button"
              disabled={isSubmitting}
            >
              Sipariş Ver
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

OrderForm.propTypes = {
  setSuccessFormData: PropTypes.func,
};

export default OrderForm;
