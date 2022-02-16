function Latest({ image }) {
  let whiteBgImg;
  if (image === "https://2cour.csb.app/images/latest2.png") whiteBgImg = true;
  return (
    <div className="latestCard">
      <div
        className="latestCardImgWrapper"
        style={
          whiteBgImg && {
            backgroundColor: "white"
          }
        }
      >
        <img src={image} width="200px" />
      </div>
      <div className="latestCardInfo">
        <div>Comfort Handy Craft</div>
        <div className="latestCardPrice">
          <div>$42.00</div>
          <div className="oldPrice">$65.00</div>
        </div>
      </div>
    </div>
  );
}

export default Latest;
