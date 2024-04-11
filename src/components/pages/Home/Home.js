import "./Home.css";

import ContactUs from "../../common/ContactUs";
import FAQs from "../../common/FAQs";
import Footer from "../../common/Footer";
import GetQuote from "../../common/GetQuote";
import Header from "../../common/Header";
import Hero from "../../common/Hero";
import OurServices from "../../common/OurServices";
import PortfolioProjects from "../../common/PortfolioProjects";
import TechnologiesWeUse from "../../common/TechnologiesWeUse";

function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      <OurServices />
      <PortfolioProjects />
      <TechnologiesWeUse />
      <ContactUs />
      <FAQs />
      <GetQuote />
      <Footer />
    </div>
  );
}

export default Home;
