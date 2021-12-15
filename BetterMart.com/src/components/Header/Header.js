//////////////////////////////////////////////////////////////////////
// Purpose: Header Component
// Author: Siddharth Karanchery
//////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

import {
  FaGithub,
  FaSearch,
  FaShoppingCart,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

import { GiHamburgerMenu } from "react-icons/gi";
import {
  CardBody,
  Input,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  InputGroup,
} from "reactstrap";

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import "./Header.css";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

// const loggedIn = true;

function Header() {
  const [userType, setUserType] = useState("Buyer");
  const [searchWord, setSearchWord] = useState("");
  const [filter, setFilter] = useState("");
  const [nameResults, setNameResults] = useState([]);

  const apiUrl = "http://localhost:34365/api/ProductEmpty/Searching?search=";

  const loggedIn = useSelector((state) => state.loggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  var loggedInls = null;

  useEffect(() => {
    loggedInls = localStorage.getItem("loggedIn");

    console.log("loggedInls:", loggedInls);
    if (loggedInls === null) loggedInls = false;
    else loggedInls = localStorage.getItem("loggedIn");
  }, [loggedInls]);

  const searchHandler = (e) => {
    setSearchWord(e.target.value);

    console.log("search word:", searchWord);

    axios
      .get(apiUrl + searchWord)

      .then((result) => {
        console.log(result);
        setNameResults(result.data);
      });
  };
  const selectHandler = (e) => {
    setFilter(e.target.value);
    console.log("filter:", filter);
  };

  const logoutHandler = () => {
    dispatch({ type: "clearLogin" });
    localStorage.clear("loggedIn");
    navigate("/Home");
  };

  const suggestList = (
    <div className="Header__searchlist">
      {nameResults.map((result) => {
        return (
          <p
            onClick={() => {
              setSearchWord("");
              navigate("/ProductPage/" + result.name);
            }}
          >
            {result.name}
          </p>
        );
      })}
    </div>
  );

  return (
    <div className="Header">
      <div className="Header__header">
        <>
          <Link
            to={"/Home"}
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              className="Header__header__logo"
              src="https://www.graphicsprings.com/filestorage/stencils/1cf0e62090ebd950855b702c81587979.png?width=500&height=500"
              alt=""
            />
            <p>BetterMart</p>
          </Link>
        </>

        <ul className="Header__header__nav">
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FaTwitter
              className="Header__header__nav__icons"
              size={20}
              onClick={() => {
                window.open("https://www.twitter.com", "_blank");
              }}
            />
            <FaFacebook
              className="Header__header__nav__icons"
              size={20}
              onClick={() => {
                window.open("https://www.facebook.com", "_blank");
              }}
            />
            <FaLinkedin
              className="Header__header__nav__icons"
              size={20}
              onClick={() => {
                window.open("https://www.linkedin.com", "_blank");
              }}
            />
            <FaGithub
              className="Header__header__nav__icons"
              size={20}
              onClick={() => {
                window.open("https://www.github.com", "_blank");
              }}
            />
          </li>
          <li>Contact Number: 1800-101-4242</li>

          <li id="Header__searchbar">
            <input
              type="text"
              value={searchWord}
              placeholder="Search for products"
              onChange={searchHandler}
            />
          </li>
          {searchWord.length !== 0 ? suggestList : null}
          <li id="Header__sb__button" hidden={!loggedIn}>
            {userType}
          </li>
          <li className="Header__header__nav__button">
            <Link to={"/Cart"}>
              <FaShoppingCart
                className="Header__header__nav__icons"
                size={20}
              />
            </Link>
          </li>
          <li>
            <InputGroup className="my-5 w-100">
              <DropdownButton
                variant="outline-secondary"
                title={<GiHamburgerMenu />}
                id="input-group-dropdown-1"
              >
                <Dropdown.Item name="cardType">
                  <Link to={"/Home"} className="Header__header__nav__button">
                    Home
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item name="cardType">
                  <Link to={"/News"} className="Header__header__nav__button">
                    News
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item name="cardType">
                  <Link to={"/AboutUs"} className="Header__header__nav__button">
                    About Us
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item name="cardType" hidden={!loggedIn}>
                  <Link
                    to={"/AccountDetails"}
                    className="Header__header__nav__button"
                  >
                    Account Details
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item name="cardType" hidden={!loggedIn}>
                  <Link
                    to={"/MyOrders"}
                    className="Header__header__nav__button"
                  >
                    My Orders
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item name="cardType" hidden={!loggedIn}>
                  <Link
                    to={"/Wishlist"}
                    className="Header__header__nav__button"
                  >
                    Wishlist
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item name="cardType" hidden={loggedIn}>
                  <Link
                    to={"/BuyerLogin"}
                    className="Header__header__nav__button"
                  >
                    Login
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  name="cardType"
                  className="Header__header__nav__button"
                  onClick={logoutHandler}
                  hidden={!loggedIn}
                >
                  Logout
                </Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </li>
        </ul>
      </div>

      {/*///////////////// MENU BAR //////////////////////////////////////////// */}
      {/* <div className="Header__menubar">
        <ul className="Header__header__nav">
          <li className="Header__header__nav__button">
            <Link to={"/Home"} className="Header__header__nav__button">
              Home
            </Link>
          </li>
          <li className="Header__header__nav__button">
            <Link to={"/News"} className="Header__header__nav__button">
              News
            </Link>
          </li>
          <li className="Header__header__nav__button">
            <Link to={"/AboutUs"} className="Header__header__nav__button">
              About Us
            </Link>
          </li>
          <li className="Header__header__nav__button">Login/Sign-up</li>
          <li id="header__nav__unstyled">
            Filter:
            <select value={filter} onChange={selectHandler}>
              <option selected disabled>
                Filter by
              </option>
              <option value="BS">Best Selling</option>
              <option value="L2H">Price: Low to High</option>
              <option value="H2L">Price: High to Low</option>
              <option value="A2Z">Name: A to Z</option>
              <option value="Z2A">Name: Z to A</option>
            </select>
          </li>
          <li className="Header__header__nav__button" hidden={!loggedIn}>
            <Link to={"/Cart"} className="Header__header__nav__button">
              <FaShoppingCart size={20} />
            </Link>
          </li>
        </ul>
      </div> */}
      {/*///////////////// MENU BAR //////////////////////////////////////////// */}
    </div>
  );
}

export default Header;
