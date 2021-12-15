import React, { Component } from "react";

import { MdOutlineDeleteOutline } from "react-icons/md";

class OrdersTable extends Component {
  //function Table(props) {

  // DeleteOrders = () => {
  //   axios
  //     .delete(
  //       "http://localhost:16711/api/Student/Deletestudent?id=" +
  //         this.props.obj.id
  //     )
  //     .then((json) => {
  //       if (json.data.status === "Delete") {
  //         alert("Record deleted successfully!!");
  //       }
  //     });
  // };

  render() {
    return (
      <tr>
        <td>
          <img src={this.props.obj.pictures[1].url} />
        </td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.brand}</td>

        <td>{this.props.obj.currency + " " + this.props.obj.price}</td>
        <td>
          <MdOutlineDeleteOutline
            size={20}
            onClick={() => {
              console.log(this.props.obj.name);
              // {this.DeleteOrders}
              alert("Deleting Item:" + this.props.obj.name);
            }}
          />
        </td>
      </tr>
    );
  }
}
export default OrdersTable;
