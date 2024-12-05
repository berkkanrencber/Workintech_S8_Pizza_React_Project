import InstagramImage1 from "../../assets/instagram/1.png";
import InstagramImage2 from "../../assets/instagram/2.png";
import InstagramImage3 from "../../assets/instagram/3.png";
import InstagramImage4 from "../../assets/instagram/4.png";
import InstagramImage5 from "../../assets/instagram/5.png";
import InstagramImage6 from "../../assets/instagram/6.png";

function InstagramSection() {
  return (
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
  );
}

export default InstagramSection;
