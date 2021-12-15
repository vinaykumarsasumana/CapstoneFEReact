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

  //   <Route exact path="/Home" element={<MainBanner />} />
  //           <Route path="" element={<MainBanner />} />
  //           <Route path="/CategoryPage/:category" element={<CategoryPage />} />
  //           <Route path="/ProductPage/:product" element={<ProductPage />} />
  //           <Route path="/ContactUs" element={<ContactUs />} />
  //           <Route path="/Cart" element={<Cart />} />
  //           <Route path="/Checkout" element={<Checkout />} />
  //           <Route path="/FAQ" element={<FAQApp />} />
  //           <Route path="/News" element={<News />} />
  //           <Route path="/AboutUs" element={<AboutUs />} />
  //           <Route path="/TnC" element={<TNC />} />
  //           <Route path="/BuyerLogin" element={<BuyerLogin />} />
  //           <Route path="/BuyerRegister" element={<BuyerRegister />} />
  //           <Route path="/AccountDetails/:email" element={<AccountDetails />} />
  //           <Route path="/Wishlist" element={<BuyerWishlist />} />
  //           <Route path="/MyOrders" element={<MyOrders />} />
  //           <Route path="/Delivery" element={<Delivery />} />
  //           <Route path="/ReturnsPolicy" element={<ReturnsPolicy />} />
  //           <Route path="/Cancellation" element={<Cancellation />} />
  //           <Route path="/PaymentOpt" element={<PaymentOpt />} />
  //           <Route path="/Privacy" element={<Privacy />} />
  //           <Route path="/SiteMap" element={<SiteMap />} />
  //           <Route path="*" element={<PageNotFound />} />

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
