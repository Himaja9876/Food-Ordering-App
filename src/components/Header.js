import { useState } from "react";
import { LOGO_URL } from "../utils.js/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils.js/useOnlineStatus";

const Header = () => {

  const onlineStatus = useOnlineStatus();

  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="header">

      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>

      <div className="nav-links">
        <ul>
          <li>
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/" > Home </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button className="btn-name" onClick={() => {
            btnName === "Login" ?
              setbtnName("Logout")
              : setbtnName("Login");
          }
          }>{btnName}</button>
        </ul>
      </div>

    </div >
  )
}

export default Header;