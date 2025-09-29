import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom"

import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      {/* LOGO */}
      <div class="logo">
        <b><a href="/"><span>Good</span>Eats</a></b>
      </div>

      {/* SEARCHBOX */}
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search for products"
        />
      </div>

      {/* PROFILE CONTAINER */}
      <div className="profile-container">
        <Link to="/favourites">
          <FiHeart className="nav-icons"></FiHeart>
        </Link>
        <Link to="/cart">
          <FiShoppingCart className="nav-icons"></FiShoppingCart>
        </Link>
        <Link to="/profile">
          <FiUser className="nav-icons"></FiUser>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
