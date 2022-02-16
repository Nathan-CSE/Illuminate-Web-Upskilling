function Featured({ image, selected }) {
  return (
    <div className="bigFeatured">
      <div className="featuredImage">
        <img height="150px" src={image} />
      </div>
      <div
        className="chairDetails"
        style={selected && { backgroundColor: "blue", color: "white" }}
      >
        <div className="chairName" style={selected && { color: "white" }}>
          Cantilever chair
        </div>
        <div className="chairCode"> Code - AKJHE1J </div>
        <div className="chairPrice">$42.00</div>
      </div>
    </div>
  );
}

export default Featured;
