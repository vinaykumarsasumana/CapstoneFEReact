import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./AccountDetails.css";

function AccountDetails() {
  const [account, setAccount] = useState({
    Id: "",
    FirstName: "",
    LastName: "",
    EmailId: "",
    Password: "",
    CurrentPassword: "",
    NewPassword: "",
    ConfirmPassword: "",
    Address: "",
    MobileNo: "",
    State: "",
    City: "",
    Country: "",
  });

  const { email } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(email);
    axios
      .get(
        `http://localhost:34365/api/BuyerDetailsByEmail/GetBuyerDetailsByEmail?Email=` +
          email
      )
      .then((result) => {
        // console.log(result);
        let tempdetails = {
          Id: result.data.buyerRegId,
          FirstName: result.data.firstName,
          LastName: result.data.lastName,
          EmailId: result.data.emailId,
          Password: result.data.buyerPassword,
          currentPassword: "",
          NewPassword: "",
          ConfirmPassword: "",
          Address: result.data.buyerAddress,
          MobileNo: result.data.mobileNo,
          State: result.data.buyerState,
          City: result.data.city,
          Country: result.data.country,
        };
        // console.log(tempdetails);
        dispatch({ type: "addUserDetails", userDetails: tempdetails });
        setAccount(tempdetails);
      });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    e.persist();
    setAccount({ ...account, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const obj = {
      buyerRegId: account.Id,
      firstName: account.FirstName,
      lastName: account.LastName,
      emailId: account.EmailId,
      buyerPassword: account.Password,
      buyerAddress: account.Address,
      city: account.City,
      buyerState: account.State,
      pincode: account.MobileNo,
      country: account.Country,
      mobileNo: account.MobileNo,
    };
    console.log(obj);
    axios
      .put("http://localhost:34365/api/BuyerRegistrations/" + account.Id, obj)
      .then((res) => alert("Details Updated!"));
  };

  const onSubmitPass = (e) => {
    e.preventDefault();

    if (account.Password !== account.CurrentPassword) {
      alert("The Current Password does not match!");
      return;
    } else {
      if (account.NewPassword !== account.ConfirmPassword) {
        alert("The new passwords do not match!");
        return;
      } else {
        const obj = {
          buyerRegId: account.Id,
          firstName: account.FirstName,
          lastName: account.LastName,
          emailId: account.EmailId,
          buyerPassword: account.NewPassword,
          buyerAddress: account.Address,
          city: account.City,
          buyerState: account.State,
          pincode: account.MobileNo,
          country: account.Country,
          mobileNo: account.MobileNo,
        };
        axios
          .put(
            "http://localhost:34365/api/BuyerRegistrations/" + account.Id,
            obj
          )
          .then((res) => {
            alert("Password Updated!");
            const obj = {
              Id: account.Id,
              FirstName: account.FirstName,
              LastName: account.LastName,
              EmailId: account.EmailId,
              Password: account.Password,
              Address: account.Address,
              City: account.City,
              buyerState: account.State,
              country: account.Country,
              mobileNo: account.MobileNo,
              CurrentPassword: "",
              NewPassword: "",
              ConfirmPassword: "",
            };
            setAccount(obj);
          });
      }
    }
  };

  return (
    <div className="AccountDetails">
      <h4
        style={{ backgroundColor: "var(--c2d)", width: "100%", color: "white" }}
      >
        Account Details
      </h4>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              name="FirstName"
              value={account.FirstName}
              onChange={handleChange}
              required
              placeholder="First Name"
            />
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              value={account.LastName}
              name="LastName"
              onChange={handleChange}
              required
              placeholder="Last Name"
            />
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              value={account.EmailId}
              disabled={true}
              name="EmailId"
              onChange={handleChange}
              required
              placeholder="EmailId"
            />
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              value={account.MobileNo}
              name="MobileNo"
              onChange={handleChange}
              required
              placeholder="MobileNo"
            />
          </div>
          <div className="col-md-12">
            <input
              className="form-control"
              type="text"
              value={
                account.Address +
                "," +
                account.City +
                "," +
                account.State +
                "," +
                account.Country
              }
              name="Address"
              onChange={handleChange}
              disabled={true}
              placeholder="Address"
            />
          </div>

          <div className="col-md-12">
            <button className="btn__account">Update Account</button>
            <br />
            <br />
          </div>
        </div>
      </form>
      <h4
        style={{ backgroundColor: "var(--c2d)", width: "100%", color: "white" }}
      >
        Password change
      </h4>
      <form onSubmit={onSubmitPass}>
        <div className="row">
          <div className="col-md-12">
            <input
              className="form-control"
              type="password"
              value={account.CurrentPassword}
              name="CurrentPassword"
              onChange={handleChange}
              placeholder="Current Password"
            />
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="password"
              value={account.NewPassword}
              name="NewPassword"
              onChange={handleChange}
              placeholder="New Password"
            />
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              value={account.ConfirmPassword}
              type="text"
              name="ConfirmPassword"
              onChange={handleChange}
              placeholder="Confirm Password"
            />
          </div>
          <div className="col-md-12">
            <button className="btn__account">Update Password</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AccountDetails;
