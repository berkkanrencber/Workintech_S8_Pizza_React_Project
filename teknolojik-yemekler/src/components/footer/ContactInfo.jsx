import FooterLogo from "../../assets/footer/logo-footer.svg";
import LocationIcon from "../../assets/footer/icon-1.png";
import EmailIcon from "../../assets/footer/icon-2.png";
import PhoneIcon from "../../assets/footer/icon-3.png";

function ContactInfo() {
  return (
    <div className="footer-section contact-info">
      <img src={FooterLogo} alt="FooterLogo" />
      <div className="contact-item">
        <img src={LocationIcon} alt="Location" />
        <span>341 Londonderry Road, İstanbul Türkiye</span>
      </div>
      <div className="contact-item">
        <img src={EmailIcon} alt="Email" />
        <span>aciktim@teknolojikyemekler.com</span>
      </div>
      <div className="contact-item">
        <img src={PhoneIcon} alt="Phone" />
        <span>+90 218 123 45 67</span>
      </div>
    </div>
  );
}

export default ContactInfo;
