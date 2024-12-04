import "../styles/Footer.css";
import LocationIcon from "../assets/footer/icon-1.png";
import EmailIcon from "../assets/footer/icon-2.png";
import PhoneIcon from "../assets/footer/icon-3.png";
import FooterLogo from "../assets/footer/logo-footer.svg";
import TwitterIcon from "../assets/footer/twitter.svg";

import InstagramImage1 from "../assets/pictures/food-1.png";
import InstagramImage2 from "../assets/pictures/food-2.png";
import InstagramImage3 from "../assets/pictures/food-3.png";
import InstagramImage4 from "../assets/pictures/food-1.png";
import InstagramImage5 from "../assets/pictures/food-2.png";
import InstagramImage6 from "../assets/pictures/food-3.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main-section">
        <div className="footer-content">
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
          <div className="footer-section hot-menu">
            <h3>Sıcacık Menüler</h3>
            <ul>
              <li>Terminal Pizza</li>
              <li>5 Kişilik Hackathon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Tester Geçti Mutlu Burger</li>
              <li>Position Absolute Ac Burger</li>
            </ul>
          </div>
          <div className="footer-section instagram">
            <h3>Instagram</h3>
            <div className="instagram-images">
              <img src={InstagramImage1} alt="Instagram 1" />
              <img src={InstagramImage2} alt="Instagram 2" />
              <img src={InstagramImage3} alt="Instagram 3" />
              <img src={InstagramImage4} alt="Instagram 4" />
              <img src={InstagramImage5} alt="Instagram 5" />
              <img src={InstagramImage6} alt="Instagram 6" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Teknolojik Yemekler.</p>
        <img src={TwitterIcon} alt="Twitter" />
      </div>
    </footer>
  );
}

export default Footer;
