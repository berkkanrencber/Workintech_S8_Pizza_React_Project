import "../styles/Success.css";
import Logo from "../assets/logo.svg";

function SuccessPage() {
  return (
    <div className="success-container">
      <header className="success-header">
        <img src={Logo} alt="Teknolojik Yemekler" className="success-logo" />
      </header>
      <main className="success-message">
        <p>TEBRIKLER!</p>
        <p>SİPARİŞİNİZ ALINDI!</p>
      </main>
    </div>
  );
}

export default SuccessPage;
