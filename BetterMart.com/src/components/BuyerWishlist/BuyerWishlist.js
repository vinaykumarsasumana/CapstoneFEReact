import React, { useEffect, useState, useReducer } from "react";
// import { Table } from "react-bootstrap";
// import {  Table } from "semantic-ui-react";
import Table from "./BuyerWishlistTable";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
// import wishlistData from "../../Data/CartDetails";

function Wishlist(props) {
  const [wishlistData, setWishlistData] = useState([]);
  const [update, forceUpdate] = useReducer((x) => x + 1, 0);

  const userDetails = useSelector((state) => state.userDetails);

  useEffect(() => {
    axios
      .get(
        "http://localhost:34365/api/Wishlists/GetWishlistDetailsByBuyerId?BuyerId=" +
          userDetails.Id
      )
      .then((result) => {
        console.log(result);
        // if (result.data.length === 1) {
        //   let arr = [];
        //   arr.push(result.data);
        //   setWishlistData(arr);
        // } else
        setWishlistData(result.data);
      });
  }, [update]);

  const tabRow =
    wishlistData !== undefined
      ? wishlistData.map((object, i) => {
          return <Table obj={object} key={i} forceUpdate={forceUpdate} />;
        })
      : null;

  return (
    <div style={{ backgroundColor: "var(--c5l)", minHeight: "90vh" }}>
      <h4 style={{ backgroundColor: "var(--c2d)", color: "white" }}>
        Wishlist
      </h4>
      {wishlistData.length !== 0 ? (
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th></th>
              <th>Product Name</th>

              <th>Price</th>
              {/* <th>Description</th> */}
              {/* <th>Shipping</th>
              <th>Quantity</th>
              <th>Shipping Option</th> */}
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>{tabRow}</tbody>
        </table>
      ) : (
        "Wishlist is empty"
      )}
    </div>
  );
}

export default Wishlist;
