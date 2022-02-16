import "./styles.css";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Highlights from "./components/Highlights.js";
import SpecialOffer from "./components/SpecialOffer.js";
import OfferCards from "./components/OfferCards.js";

export default function App() {
  return (
    <div className="bigContainer">
      <Navbar />
      <Hero />
      <Highlights />
      <SpecialOffer />
    </div>
  );
}
