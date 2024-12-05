import Header from "../components/home/Header";
import Categories from "../components/home/Categories";
import CardSection from "../components/home/CardSection";
import MenuSection from "../components/home/MenuSection";
import PopularSection from "../components/home/PopularSection";
import Footer from "../components/Footer";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Header />
      <Categories />
      <CardSection />
      <MenuSection />
      <PopularSection />
      <Footer />
    </>
  );
}

export default Home;
