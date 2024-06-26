import { useContext, useState } from "react";
import { LOGO_URL } from "../utils.js/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils.js/useOnlineStatus";
import UserContext from "../utils.js/UserContext";
import { useSelector } from "react-redux";


const Header = () => {

  const onlineStatus = useOnlineStatus();

  const [btnName, setbtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

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
          <li>
            <Link to="/cart">Cart - {cartItems.length} items</Link>
          </li>
          <button className="btn-name" onClick={() => {
            btnName === "Login" ?
              setbtnName("Logout")
              : setbtnName("Login");
          }
          }>{btnName}</button>
          <li>{loggedInUser}</li>
        </ul>
      </div>

    </div >
  )
}

export default Header;