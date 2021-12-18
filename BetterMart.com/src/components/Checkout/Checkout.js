//////////////////////////////////////////////////////////////////////
// Purpose: Checkout Page Component
// Author: Siddharth Karanchery
//////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { CardBody, Input, InputGroup } from "reactstrap";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import "./Checkout.css";

function Checkout(props) {
  const [chName, setChname] = useState("");
  const [cardNum, setCardnum] = useState("");
  const [cardType, setCardtype] = useState("");
  const [bank, setBank] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCVV] = useState("");
  const [cartDetails, setCartDetails] = useState([]);

  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.userDetails);

  ///////////////////// USE EFFECT ///////////////////////////
  useEffect(() => {
    if (userDetails.Id === undefined) {
      navigate("/BuyerLogin");
    }
    axios
      .get(
        "http://localhost:34365/api/Cart/GetCartDetailsByBuyerId?BuyerId=" +
          userDetails.Id.toString()
      )
      .then((results) => {
        console.log("cart Details:", results);
        setCartDetails(results.data.$values);
      });
  }, []);

  ///////////////////// HANDLERS ///////////////////////////
  const changeHandler = (e) => {
    switch (e.target.name) {
      case "chName":
        setChname(e.target.value);
        break;
      case "cardNum":
        setCardnum(e.target.value);
        break;
      case "cardType":
        setCardtype(e.target.innerText);
        break;
      case "bank":
        setBank(e.target.innerText);
        break;
      case "expiry":
        setExpiry(e.target.value);
        break;
      case "cvv":
        setCVV(e.target.value);
        break;
      default:
        break;
    }
  };

  const submitHandler = (e) => {
    if (
      chName.length === 0 ||
      cardNum.length === 0 ||
      cardType.length === 0 ||
      bank.length === 0 ||
      expiry.length === 0 ||
      cvv.length === 0
    ) {
      alert("Please Enter all card Details before placing order!");
    } else {
      const [mm, yy] = expiry.split("/");

      if (chName.length < 3) {
        alert("Please enter a valid name!");
        return;
      } else if (cardNum.length < 16) {
        alert("Please enter a valid card number!");
        return;
      } else if (mm <= 0 || mm > 12) {
        alert("Please enter a expiry Month!");
        return;
      } else if (
        yy < parseInt(new Date().getFullYear().toString().substr(-2))
      ) {
        alert("Please enter a expiry Year!");
        return;
      } else {
        console.log("userDetails:", userDetails);
        let temparr = [];
        cartDetails.forEach((product) => {
          let tempProd = {
            // "productId": 0,
            // "buyerId": 0,
            // "productName": "string",
            // "productPrice": 0,
            // "productQuantity": 0,
            // "productImage": "string",
            // "deliveryCharge": 0,
            // "deliveryTime": "string",
            buyerId: product.buyerId,
            productId: product.productId,
            productName: product.productName,
            productPrice: product.productPrice,
            productQuantity: product.productQuantity,
            productImage: product.productImage,
            deliveryTime: product.deliveryTime,
            deliveryCharge: product.deliveryCharge,
          };
          temparr.push(tempProd);
          // console.log("cartDetails.buyerId:", product.buyerId);
          // console.log("cartDetails.productId:", product.productId);
          // console.log("cartDetails.productPrice:", product.productPrice);
          // console.log("cartDetails.productQuantity:", product.productQuantity);
          // console.log("cartDetails.productImage:", product.productImage);
          // console.log("cartDetails.deliveryTime:", product.deliveryTime);
          // console.log("cartDetails.deliveryCharge:", product.deliveryCharge);
        });
        console.log("temparr:", temparr);

        axios
          .post("http://localhost:34365/api/Order/OrderTheProduct", temparr)
          .then((result) => {
            console.log(result);
            if (result.data.status === "Success") {
              alert("Your order has been placed successfully!");
              axios.delete(
                "http://localhost:34365/api/Cart/DeleteFromCartByBuyerId?BuyerId=" +
                  userDetails.Id
              );
              navigate("/Home");
            }
          });
      }
    }
  };

  let subtotal = 0;
  let deliveryCharges = 0;

  cartDetails.forEach((item) => {
    subtotal += item.productQuantity * item.productPrice;
    deliveryCharges += item.deliveryCharge;
  });
  return (
    <div className="Checkout">
      <div className="Checkout__left">
        <h4>Card Details</h4>
        <Container className="w-75 h-100">
          <Card className="p-3">
            <CardBody>
              <Row className="my-2">
                <Input
                  placeholder="Cardholder Name"
                  value={chName}
                  name="chName"
                  onChange={changeHandler}
                />
              </Row>
              <Row className="my-2">
                <Input
                  placeholder="Card Number"
                  value={cardNum}
                  name="cardNum"
                  onChange={changeHandler}
                />
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mb-3 w-100">
                    <DropdownButton
                      variant="outline-secondary"
                      title="Card Type"
                      value={cardType}
                      id="input-group-dropdown-1"
                    >
                      <Dropdown.Item name="cardType" onClick={changeHandler}>
                        Visa
                      </Dropdown.Item>
                      <Dropdown.Item name="cardType" onClick={changeHandler}>
                        MasterCard
                      </Dropdown.Item>
                      <Dropdown.Item name="cardType" onClick={changeHandler}>
                        Maestro
                      </Dropdown.Item>
                      <Dropdown.Item name="cardType" onClick={changeHandler}>
                        RuPay
                      </Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </Col>
                <Col className="w-50">
                  <DropdownButton
                    className="w-50 justify-content-center"
                    variant="outline-secondary"
                    title="Bank"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item name="bank" onClick={changeHandler}>
                      ICICI Bank
                    </Dropdown.Item>
                    <Dropdown.Item name="bank" onClick={changeHandler}>
                      Axis Bank
                    </Dropdown.Item>
                    <Dropdown.Item name="bank" onClick={changeHandler}>
                      State Bank of India
                    </Dropdown.Item>
                    <Dropdown.Item name="bank" onClick={changeHandler}>
                      HDFC Bank
                    </Dropdown.Item>
                    <Dropdown.Item name="bank" onClick={changeHandler}>
                      Standard Chartered Bank
                    </Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
              <Row className="my-2 align-items-center">
                <Col>Expiry</Col>
                <Col>
                  <Input
                    placeholder="MM/YY"
                    name="expiry"
                    onChange={changeHandler}
                    maxLength="5"
                  />
                </Col>
                <Col>CVV</Col>
                <Col>
                  <Input
                    placeholder="***"
                    name="cvv"
                    onChange={changeHandler}
                    maxLength="3"
                    type="password"
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
      <div className="Checkout__right">
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
            <Button variant="warning" onClick={submitHandler}>
              Buy
            </Button>
          </Row>
          <Row className="w-75 align-self-center ">
            <Button
              variant="light"
              onClick={() => {
                navigate("/Cart");
              }}
            >
              Go back to Cart
            </Button>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Checkout;
