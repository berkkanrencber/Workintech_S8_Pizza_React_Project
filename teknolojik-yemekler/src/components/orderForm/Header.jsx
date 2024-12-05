import Logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="order-header">
      <img src={Logo} alt="Teknolojik Yemekler" className="order-logo" />
    </header>
  );
}

export default Header;