//////////////////////////////////////////////////////////////////////
// Purpose: Main Component for Ecommerce Seller Application
// Author: Siddharth Karanchery
//////////////////////////////////////////////////////////////////////

import Header from "./components/Header/Header";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer/Footer";
import MainBanner from "./components/MainBanner/MainBanner";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import ContactUs from "./components/ContactUs/ContactUs";
import ProductPage from "./components/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import FAQApp from "./components/FAQ/FAQApp";
import News from "./components/News/News";
import AboutUs from "./components/AboutUs/AboutUs";
import TNC from "./components/TNC/TNC";
import BuyerLogin from "./components/BuyerLogin/BuyerLogin";
import BuyerRegister from "./components/BuyerRegister/BuyerRegister";
import AccountDetails from "./components/AccountDetails/AccountDetails";
import BuyerWishlist from "./components/BuyerWishlist/BuyerWishlist";
import MyOrders from "./components/MyOrders/MyOrders";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Delivery from "./components/CustomerSupport/Delivery";
import ReturnsPolicy from "./components/CustomerSupport/ReturnsPolicy";
import Cancellation from "./components/CustomerSupport/Cancellation";
import PaymentOpt from "./components/CustomerSupport/PaymentOpt";
import Privacy from "./components/CustomerSupport/Privacy";
import SiteMap from "./components/SiteMap/SiteMap";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/Home" element={<MainBanner />} />
          <Route path="" element={<MainBanner />} />
          <Route path="/CategoryPage/:category" element={<CategoryPage />} />
          <Route path="/ProductPage/:product" element={<ProductPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/FAQ" element={<FAQApp />} />
          <Route path="/News" element={<News />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/TnC" element={<TNC />} />
          <Route path="/BuyerLogin" element={<BuyerLogin />} />
          <Route path="/BuyerRegister" element={<BuyerRegister />} />
          <Route path="/AccountDetails/:email" element={<AccountDetails />} />
          <Route path="/Wishlist" element={<BuyerWishlist />} />
          <Route path="/MyOrders" element={<MyOrders />} />
          <Route path="/Delivery" element={<Delivery />} />
          <Route path="/ReturnsPolicy" element={<ReturnsPolicy />} />
          <Route path="/Cancellation" element={<Cancellation />} />
          <Route path="/PaymentOpt" element={<PaymentOpt />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/SiteMap" element={<SiteMap />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
