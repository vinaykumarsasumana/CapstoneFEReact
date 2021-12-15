//////////////////////////////////////////////////////////////////////
// Purpose: Cart Card Component
// Author: Siddharth Karanchery
//////////////////////////////////////////////////////////////////////

import React, { useReducer } from "react";

import axios from "axios";

import { MdOutlineDelete } from "react-icons/md";

import { Row, Col, Image } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import "./Cart.css";

function CartCard(props) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  ///////////////////// HANDLERS ///////////////////////////
  const deleteFromCartHandler = () => {
    let status = window.confirm(
      "Are you sure you want to delete the item from cart?"
    );

    if (status) {
      axios
        .delete(
          "http://localhost:34365/api/Cart/DeleteFromCartByProductId?ProductId=" +
            props.item.productId
        )
        .then((result) => {
          if (result.status === 204) {
            props.forceUpdate();
          }
        });
    }
    forceUpdate();
  };

  return (
    <Row className="border-bottom my-2 w-100 mx-3 d-flex align-items-center justify-content-around">
      <Col>
        <Image className="w-50 h-70" src={props.item.productImage} alt="" />
      </Col>
      <Col className="Cart__card__name">{props.item.productName}</Col>
      <Col>
        <input
          type="text"
          className="Cart__card__input"
          value={props.item.productQuantity}
        />
      </Col>
      <Col>{"Price: Rs. " + props.item.productPrice}</Col>
      <Col>{"Shipping: Rs. " + props.item.deliveryCharge}</Col>
      <Col>{props.item.deliveryTime}</Col>
      <Col>
        <MdOutlineDelete size={25} onClick={deleteFromCartHandler} />
      </Col>
    </Row>
  );
}

export default CartCard;
