import React, { Component, useState, useEffect } from "react";
// import { Table } from "react-bootstrap";
// import {  Table } from "semantic-ui-react";
// import ordersData from "./CartDetails.json";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import ordersData from "../../Data/CartDetails";
import OrdersTable from "./OrdersTable";

function MyOrders(props) {
  const [ordersData, setOrdersData] = useState([]);

  const userDetails = useSelector((state) => state.userDetails);

  const navigate = useNavigate();

  useEffect(() => {
    if (userDetails.Id === undefined) {
      navigate("/BuyerLogin");
    }
    axios
      .get(
        "http://localhost:34365/api/Order/GetOrderDetailsByBuyerId?BuyerId=" +
          userDetails.Id.toString()
      )
      .then((results) => {
        console.log("Order Details:", results);
        setOrdersData(results.data.$values);
      });
  }, []);
  const tabRow = ordersData.map(function (object, i) {
    return <OrdersTable obj={object} key={i} />;
  });

  return (
    <div style={{ backgroundColor: "var(--c5l)", minHeight: "90vh" }}>
      <h4 style={{ backgroundColor: "var(--c2d)", color: "white" }}>Orders</h4>
      {ordersData.length != 0 ? (
        <table className="table table-bordered">
          <thead className="thead-dark">
            {/* <td>{this.props.obj.orderId}</td>
        <td>{this.props.obj.productName}</td>
        <td>{"Rs. " + this.props.obj.productPrice}</td>
        <td>{this.props.obj.productQuantity}</td>
        <td>{this.props.obj.deliverCharge}</td> */}
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delivery Charges</th>
            </tr>
          </thead>
          <tbody>{tabRow}</tbody>
        </table>
      ) : (
        "No Orders."
      )}
    </div>
  );
}

export default MyOrders;
