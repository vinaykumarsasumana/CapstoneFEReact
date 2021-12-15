//////////////////////////////////////////////////////////////////////
// Purpose: Cart Component
// Author: Siddharth Karanchery
//////////////////////////////////////////////////////////////////////

import React, { useEffect, useState, useReducer } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import axios from "axios";

import "./Cart.css";
import CartCard from "./CartCard";

function Cart(props) {
  const [cartDetails, setCartDetails] = useState([]);
  const [update, forceUpdate] = useReducer((x) => x + 1, 0);
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.userDetails);

  ///////////////////// USE EFFECT ///////////////////////////
  useEffect(() => {
    if (userDetails.Id !== undefined) {
      axios
        .get(
          "http://localhost:34365/api/Cart/GetCartDetailsByBuyerId?BuyerId=" +
            userDetails.Id.toString()
        )
        .then((results) => {
          console.log(results);
          setCartDetails(results.data);
        });
    } else {
      alert("Please Login to view cart.");
      navigate("/BuyerLogin");
    }
  }, [update]);
  let subtotal = 0;
  let deliveryCharges = 0;

  cartDetails.forEach((item) => {
    subtotal += item.productQuantity * item.productPrice;
    deliveryCharges += item.deliveryCharge;
  });

  return (
    <div className="Cart">
      <div className="Cart__left">
        {cartDetails.length === 0 ? (
          "Cart is Empty"
        ) : (
          <>
            <h4>Cart</h4>
            <Container className="d-flex flex-column align-items-center ">
              {cartDetails.map((item) => {
                return <CartCard item={item} forceUpdate={forceUpdate} />;
              })}
            </Container>
          </>
        )}
      </div>
      <div className="Cart__right" hidden={cartDetails.length === 0}>
        <h4>Total</h4>
        <Container className="d-flex flex-column ">
          <Row>
            <Col>Items: </Col>
            <Col>{cartDetails.length}</Col>
          </Row>
          <Row>
            <Col>SubTotal: </Col>
            <Col>{subtotal}</Col>
          </Row>
          <Row>
            <Col>Delivery Charges: </Col>
            <Col>{deliveryCharges}</Col>
          </Row>
          <Row className="Cart__right__total align-self-center mt-2">
            <Col>Total: </Col>
            <Col>{subtotal + deliveryCharges}</Col>
          </Row>
          <Row className="w-50 align-self-center my-3">
            <Button
              variant="warning"
              onClick={() => {
                navigate("/Checkout");
              }}
            >
              Checkout
            </Button>
          </Row>
          <Row className="w-75 align-self-center ">
            <Button
              variant="light"
              onClick={() => {
                navigate("/home");
              }}
            >
              Continue Shopping
            </Button>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Cart;
