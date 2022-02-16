function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Hekto</div>
      <div className="navItems">
        <div className="home">Home</div>
        <div>Pages</div>
        <div>Products</div>
        <div>Blog</div>
        <div>Shop</div>
        <div>Contact</div>
      </div>
      <div className="searchContainer">
        <input className="searchInput" />
        <div className="searchBtn">
          <img
            width="10px"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Antu_document-edit-verify.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
