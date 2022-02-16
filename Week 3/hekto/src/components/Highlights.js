import Featured from "./Featured.js";
import Latest from "./Latest.js";
import OfferCards from "./OfferCards";

function Hero() {
  return (
    <div className="highlightsContainer">
      <div className="featuredContainer">
        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
          Featured Products
        </h2>
        <div className="featured">
          <Featured image="https://2cour.csb.app/images/featured1.png" />
          <Featured
            image="https://2cour.csb.app/images/featured2.png"
            selected={true}
          />
          <Featured image="https://2cour.csb.app/images/featured3.png" />
          <Featured image="https://2cour.csb.app/images/featured4.png" />
        </div>
      </div>

      <div className="latestContainer">
        <h2>Latest Products</h2>
        <div className="latestTypes">
          <div style={{ color: "#FB2D86", textDecoration: "underline" }}>
            New Arrival
          </div>
          <div>Best Seller</div>
          <div>Featured</div>
          <div>Special Offer</div>
        </div>
        <div className="latestGrid">
          <Latest image="https://2cour.csb.app/images/latest1.png" />
          <Latest image="https://2cour.csb.app/images/latest2.png" />
          <Latest image="https://2cour.csb.app/images/latest3.png" />
          <Latest image="https://2cour.csb.app/images/latest4.png" />
          <Latest image="https://2cour.csb.app/images/latest5.png" />
          <Latest image="https://2cour.csb.app/images/latest6.png" />
        </div>
      </div>
      <div className="offerContainer">
        <h2>What Shopex Offers!</h2>
        <div className="offerCards">
          <OfferCards src="https://2cour.csb.app/images/free-delivery.png" />
          <OfferCards src="https://2cour.csb.app/images/cashback.png" />
          <OfferCards src="https://2cour.csb.app/images/premium-quality.png" />
          <OfferCards src="https://2cour.csb.app/images/24-hours-support.png" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
