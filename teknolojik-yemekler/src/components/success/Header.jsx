import Logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="success-header">
      <img src={Logo} alt="Teknolojik Yemekler" className="success-logo" />
    </header>
  );
}

export default Header;
