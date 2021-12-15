import React, { useState } from "react";
// import { Image } from "react-bootstrap";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Lin, useNavigate } from "react-router-dom";
import axios from "axios";
import "./BuyerRegister.css";
import { Label } from "reactstrap";

function BuyerRegister(props) {
  const [regBuyer, setRegBuyer] = useState({
    FirstName: "",
    LastName: "",
    emailId: "",
    Password: "",
    ConfirmPassword: "",
    Address: "",
    City: "",
    State: "",
    Pincode: "",
    Country: "",
    MobileNo: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [matchPassword, setMatchPassword] = useState(false);

  const apiUrl = "http://localhost:34365/api/BuyerRegistrations";

  const navigate = useNavigate;

  const handleChange = (e) => {
    e.preventDefault();
    e.persist();

    setRegBuyer({ ...regBuyer, [e.target.name]: e.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (
      regBuyer.FirstName.length === 0 ||
      regBuyer.LastName.length === 0 ||
      regBuyer.EmailId.length === 0 ||
      regBuyer.Password.length === 0 ||
      regBuyer.ConfirmPassword.length === 0 ||
      regBuyer.Address.length === 0 ||
      regBuyer.City.length === 0 ||
      regBuyer.State.length === 0 ||
      regBuyer.Pincode.length === 0 ||
      regBuyer.Country.length === 0 ||
      regBuyer.MobileNo.length === 0
    ) {
      alert("Please enter all inputs before submitting");
      return;
    } else if (regBuyer.Password !== regBuyer.ConfirmPassword) {
      alert("The passwords do not match");
      return;
    }

    const newBuyer = {
      firstName: regBuyer.FirstName,
      lastName: regBuyer.LastName,
      emailId: regBuyer.EmailId,
      buyerPassword: regBuyer.Password,
      buyerAddress: regBuyer.Address,
      city: regBuyer.City,
      buyerState: regBuyer.State,
      pincode: regBuyer.Pincode,
      country: regBuyer.Country,
      mobileNo: regBuyer.MobileNo,
    };

    axios.post(apiUrl, newBuyer).then((result) => {
      console.log(result);
      if (result.statusText === "Created") {
        alert("You have been successfully registered at BetterMart.com");
        // navigate("/BuyerLogin");
      } else {
        alert("Something went wrong. Please try again.");
      }

      // if (result.regBuyer.status == "Invalid") alert("Invalid User");
      // else props.history.push("/AccountDetails");
    });
  };

  return (
    <div className="BuyerRegister">
      <div className="BuyerRegister__ele1">
        <img
          src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg"
          className="BuyerRegister__ele1__img"
          alt=""
        />
      </div>
      <div className="BuyerRegister__ele2">
        <h4>Register</h4>
        <form className="BuyerRegister__ele2__form" onSubmit={onSubmit}>
          <input
            className="BuyerRegister__ele2__form__input"
            type="text"
            name="FirstName"
            value={regBuyer.FirstName}
            placeholder="Enter your First Name "
            required
            onChange={handleChange}
          />

          <input
            className="BuyerRegister__ele2__form__input"
            type="text"
            name="LastName"
            value={regBuyer.LastName}
            placeholder="Enter your last Name"
            required
            onChange={handleChange}
          />

          <input
            className="BuyerRegister__ele2__form__input"
            type="email"
            name="EmailId"
            value={regBuyer.EmailId}
            placeholder="Enter your Email Id "
            required
            onChange={handleChange}
          />

          <input
            className="BuyerRegister__ele2__form__input"
            type="password"
            name="Password"
            value={regBuyer.Password}
            placeholder="Password "
            required
            onChange={handleChange}
          />

          <input
            className="BuyerRegister__ele2__form__input"
            type="text"
            name="ConfirmPassword"
            value={regBuyer.ConfirmPassword}
            placeholder="Confirm Password "
            required
            onChange={handleChange}
          />
          {
            <Label
              style={{ color: "red" }}
              hidden={regBuyer.Password === regBuyer.ConfirmPassword}
            >
              Passwords do not match
            </Label>
          }
          <input
            className="BuyerRegister__ele2__form__input"
            type="text"
            name="Address"
            value={regBuyer.Address}
            placeholder="Enter your Address"
            required
            onChange={handleChange}
          />
          <input
            className="BuyerRegister__ele2__form__input"
            type="text"
            name="City"
            value={regBuyer.City}
            placeholder="Enter your City"
            required
            onChange={handleChange}
          />
          <input
            className="BuyerRegister__ele2__form__input"
            type="text"
            name="State"
            value={regBuyer.State}
            placeholder="Enter your State"
            required
            onChange={handleChange}
          />
          <input
            className="BuyerRegister__ele2__form__input"
            type="text"
            name="Pincode"
            value={regBuyer.Pincode}
            placeholder="Enter your Pincode"
            required
            onChange={handleChange}
          />
          <input
            className="BuyerRegister__ele2__form__input"
            type="text"
            name="Country"
            value={regBuyer.Country}
            placeholder="Enter your Country"
            required
            onChange={handleChange}
          />

          <input
            className="BuyerRegister__ele2__form__input"
            type="Number"
            name="MobileNo"
            value={regBuyer.MobileNo}
            placeholder="Enter your Mobile No."
            required
            onChange={handleChange}
          />
          <a href="/TnC">Check Terms of service and Privacy Policy</a>
          <button
            className="BuyerRegister__ele2__form__button"
            type="submit"
            block
          >
            Register
          </button>
          <a href="/BuyerLogin">Already Registered?Login here.</a>
        </form>
        <div className="BuyerRegister__ele2__social">
          <p>Register with :</p>
          <span className="BuyerRegister__ele2__social__icons">
            <FaTwitter
              size={20}
              onClick={() => {
                window.open("https://www.twitter.com", "_blank");
              }}
            />

            <FaFacebook
              size={20}
              onClick={() => {
                window.open("https://www.facebook.com", "_blank");
              }}
            />

            <FaLinkedinIn
              size={20}
              onClick={() => {
                window.open("https://www.linkedin.com", "_blank");
              }}
            />
          </span>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="BuyerRegister__image">
    //     <img
    //       src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg"
    //       className="BuyerRegister__register__image"
    //       alt=""
    //     />
    //   </div>

    //   <div className="BuyerRegister__register-form">
    //     <form onSubmit={onSubmit}>
    //       <input
    //         className="BuyerRegister__form-control BuyerRegister__form-control-lg"
    //         type="fname"
    //         name="FirstName"
    //         value={regBuyer.FirstName}
    //         placeholder="Enter your First Name "
    //         required
    //         onChange={handleChange}
    //       />
    //       <br />
    //       <input
    //         className="BuyerRegister__form-control BuyerRegister__form-control-lg"
    //         type="lname"
    //         name="LastName"
    //         value={regBuyer.LastName}
    //         placeholder="Enter your last Name"
    //         required
    //         onChange={handleChange}
    //       />
    //       <br />
    //       <input
    //         className="BuyerRegister__form-control BuyerRegister__form-control-lg"
    //         type="email"
    //         name="EmailId"
    //         value={regBuyer.EmailId}
    //         placeholder="Enter your Email Id "
    //         required
    //         onChange={handleChange}
    //       />
    //       <br />
    //       <input
    //         className="BuyerRegister__form-control BuyerRegister__form-control-lg"
    //         type="password"
    //         name="Password"
    //         value={regBuyer.Password}
    //         placeholder="Password "
    //         required
    //         onChange={handleChange}
    //       />
    //       <br />
    //       <input
    //         className="BuyerRegister__form-control BuyerRegister__form-control-lg"
    //         type="password"
    //         name="ConfirmPassword"
    //         value={regBuyer.ConfirmPassword}
    //         placeholder="Confirm Password "
    //         required
    //         onChange={handleChange}
    //       />
    //       <br />
    //       <input
    //         className="BuyerRegister__form-control BuyerRegister__form-control-lg"
    //         type="country"
    //         name="Country"
    //         value={regBuyer.Country}
    //         placeholder="Enter your Country"
    //         required
    //         onChange={handleChange}
    //       />
    //       <br />
    //       <input
    //         className="BuyerRegister__form-control BuyerRegister__form-control-lg"
    //         type="mobileNo"
    //         name="MobileNo"
    //         value={regBuyer.MobileNo}
    //         placeholder="Enter your Mobile No."
    //         required
    //         onChange={handleChange}
    //       />

    //       <div className="BuyerRegister__div">
    //         <a href="">Check Terms of service and Privacy Policy</a>
    //         <br />

    //         <button
    //           type="submit"
    //           className="BuyerRegister__btn__register"
    //           block
    //         >
    //           {/* <Link to="/AccountDetails">
    //             <span>Submit</span>
    //           </Link> */}
    //           {/* <Link to={"/AccountDetails"}></Link> */}
    //           <span>Submit</span>
    //         </button>
    //         <br />

    //         <span>
    //           {" "}
    //           <h6>Already Have an Account</h6>
    //           <a href=""> Click here </a>to sign in{" "}
    //         </span>
    //         <br />
    //         <h6 className="BuyerRegister__h6__icon">
    //           {" "}
    //           or Sign In with &nbsp;
    //           <a href="https://twitter.com/home">
    //             {" "}
    //             <FaTwitter className="signin__icon" size={25} />
    //           </a>
    //           &nbsp;
    //           <a href="https://www.facebook.com/">
    //             {" "}
    //             <FaFacebook className="signin__icon" size={25} />
    //           </a>
    //           &nbsp;&nbsp;
    //           <a href="https://www.linkedin.com/">
    //             <FaLinkedinIn className="signin__icon" size={25} />
    //           </a>
    //         </h6>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}

export default BuyerRegister;
