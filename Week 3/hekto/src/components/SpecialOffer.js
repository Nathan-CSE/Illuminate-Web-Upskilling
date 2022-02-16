function SpecialOffer() {
  return (
    <div className="specialOffer">
      <img src="https://2cour.csb.app/images/blue-couch.png" width="500px" />
      <div className="specialOfferInfo">
        <div className="specialOfferTitle">
          Unique Features of latest & Trending Products
        </div>
        <ul className="specialOfferList">
          <li className="specialOfferListItem redItem">
            All frames constructed with hardwood solids and laminates
          </li>
          <li className="specialOfferListItem blueItem">
            Reinforced with double wood dowels, glue, screw - nails corner
            blocks and machine nails
          </li>
          <li className="specialOfferListItem greenItem">
            Arms, backs and seats are structurally reinforceds
          </li>
        </ul>
        <div class="specialOfferActionContainer">
          <button class="addToCartBtn">Add to Cart</button>
          <div class="specialInfoItemInfo">
            <div>B&B Italian Sofa</div>
            <div style={{ fontWeight: "lighter" }}>$32.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;
