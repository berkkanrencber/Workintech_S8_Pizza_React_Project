import ContactInfo from "./ContactInfo";
import HotMenu from "./HotMenu";
import InstagramSection from "./InstagramSection";

function FooterMainSection() {
  return (
    <div className="footer-main-section">
      <div className="footer-content">
        <ContactInfo />
        <HotMenu />
        <InstagramSection />
      </div>
    </div>
  );
}

export default FooterMainSection;