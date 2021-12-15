import React, { Component } from "react";

import { MdOutlineDeleteOutline } from "react-icons/md";

class OrdersTable extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.obj.orderId}</td>
        <td>{this.props.obj.productName}</td>
        <td>{"Rs. " + this.props.obj.productPrice}</td>
        <td>{this.props.obj.productQuantity}</td>
        <td>{this.props.obj.deliveryCharge}</td>
      </tr>
    );
  }
}
export default OrdersTable;
