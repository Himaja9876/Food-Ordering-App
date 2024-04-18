import { useState } from "react";
import { LOGO_URL } from "../utils.js/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils.js/useOnlineStatus";

const Header = () => {

  const onlineStatus = useOnlineStatus();

  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="flex justify-between m-1 shadow-xl" style={{ backgroundColor: 'rgb(224, 216, 120)' }}>

      <div className="logo-container">
        <img className="m-5 mt-7" src={LOGO_URL} style={{ width: "140px", height: "90px" }}></img>
      </div>

      <div className="nav-links">
        <ul className="flex p-12 gap-10">
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