/* eslint-disable react/prop-types */
import "../styles/Success.css";
import Footer from "../components/Footer";
import Header from "../components/success/Header";
import SuccessBody from "../components/success/SuccessBody";
import OrderSummary from "../components/success/OrderSummary";
import PriceSummary from "../components/success/PriceSummary";

function SuccessPage({ successFormData }) {
  return (
    <>
      <div className="success-container">
        <Header />
        <main className="success-message">
          <SuccessBody />
          <OrderSummary successFormData={successFormData} />
          <PriceSummary successFormData={successFormData} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default SuccessPage;
