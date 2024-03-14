import { LOGO_URL } from "../utils.js/constants";

const Header = () => {
  return (
    <div className="header">

      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>

      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>

      </div>

    </div>
  )
}

export default Header;