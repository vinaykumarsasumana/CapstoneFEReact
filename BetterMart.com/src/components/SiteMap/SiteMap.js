//////////////////////////////////////////////////////////////////////
// Purpose: SiteMap Component
// Author: Siddharth Karanchery
//////////////////////////////////////////////////////////////////////
import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import "./SiteMap.css";

function SiteMap() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="SiteMap">
      <h4
        style={{
          backgroundColor: "var(--c2d)",
          color: "white",
          width: "100%",
        }}
      >
        SiteMap
      </h4>
      <ul>
        <li>
          <Link to={"/Home"}>Home</Link>
        </li>
        <li>
          <Link to={"/ContactUs"}>Contact Us</Link>
        </li>
        <li>
          <Link to={"/Cart"}>Cart</Link>
        </li>
        <li>
          <Link to={"/FAQ"}>FAQ</Link>
        </li>
        <li>
          <Link to={"/News"}>News</Link>
        </li>
        <li>
          <Link to={"/AboutUs"}>About Us</Link>
        </li>
        <li>
          <Link to={"/TnC"}>Terms & Conditions</Link>
        </li>
        <li>
          <Link to={"/BuyerLogin"}>Login</Link>
        </li>
        <li>
          <Link to={"/BuyerRegister"}>Registration</Link>
        </li>
        <li>
          <Link to={"/Wishlist"}>Wishlist</Link>
        </li>
        <li>
          <Link to={"/Delivery"}>Delivery</Link>
        </li>
        <li>
          <Link to={"/ReturnsPolicy"}>Returns Policy</Link>
        </li>
        <li>
          <Link to={"/Cancellation"}>Cancellation</Link>
        </li>
        <li>
          <Link to={"/PaymentOpt"}> Payment Options</Link>
        </li>
        <li>
          <Link to={"/Privacy"}>Privacy</Link>
        </li>
      </ul>
    </div>
  );
}
export default SiteMap;
