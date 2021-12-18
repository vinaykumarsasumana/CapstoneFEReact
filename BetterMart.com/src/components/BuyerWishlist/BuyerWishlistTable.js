import React, { Component } from "react";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

import { MdOutlineDeleteOutline } from "react-icons/md";

function Table(props) {
  const navigate = useNavigate();

  const deleteWishlistHandler = () => {
    let status = window.confirm(
      "Are you sure you want to remove the item from Wishlist?"
    );
    if (status) {
      axios
        .delete("http://localhost:34365/api/Wishlists/" + props.obj.wishlistId)
        .then((result) => {
          if (result.status === 201 || result.status === 204) {
            alert("Item removed from wishlist successfully!");
            props.forceUpdate();
          } else {
            alert("Oops!Something went wrong");
          }
          console.log(result);
        });
    }
  };
  return (
    <tr key={props.obj.wishlistId}>
      <td>
        <img src={props.obj.oneImage} style={{ width: "100px" }} />
      </td>
      <td>{props.obj.productName}</td>
      <td>{"Rs. " + props.obj.productPrice}</td>

      <td>
        <MdOutlineDeleteOutline size={20} onClick={deleteWishlistHandler} />
      </td>
      {/* <td>{this.props.obj.price}</td> */}
      {/* <td>{this.props.obj.description}</td>
        <td>{this.props.obj.shipping}</td>
        <td>{this.props.obj.quantity}</td>
        <td>{this.props.obj.shippingOptions}</td> */}

      {/* <td>{props.obj.type}</td>
      <td>{props.obj.origin}</td>
      <td>
        <Link to={"/edit/" + this.props.obj.id} className="btn btn-success">
          Edit
        </Link>
      </td> */}
      {/* <td>
          <button
            type="button"
            //   onClick={this.DeleteStudent}
            className="btn btn-danger"
          >
            Remove
          </button>
        </td> */}
    </tr>
  );
}
export default Table;
