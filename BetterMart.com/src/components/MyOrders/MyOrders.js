import React, { Component } from "react";
// import { Table } from "react-bootstrap";
// import {  Table } from "semantic-ui-react";
// import ordersData from "./CartDetails.json";
import ordersData from "../../Data/CartDetails";
import OrdersTable from "./OrdersTable";

class MyOrders extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  // function Wishlist(props) {
  // console.log(data);
  // componentDidMount() {
  //   this.setState({ data: JsonData });
  //   console.log(this.data);

  //   debugger;
  //   axios
  //     .get("http://localhost:16711/api/Student/Studentdetails")
  //     .then((response) => {
  //       this.setState({ business: response.data });
  //       // debugger;
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  tabRow = () => {
    return ordersData.map(function (object, i) {
      return <OrdersTable obj={object} key={i} />;
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "var(--c5l)" }}>
        <h4 style={{ backgroundColor: "var(--c2d)" }}>Orders</h4>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>pictures</th>
              <th>Product Name</th>
              <th>Product Brand</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
export default MyOrders;
