import React from "react";
import { useState } from "react";
import axios from "axios";
import "./BuyerLogin.css";

import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router";

import { useSelector, useDispatch } from "react-redux";

function BuyerLogin() {
  const [buyer, setBuyer] = useState({ EmailId: "", Password: "" });

  const apiUrl = "http://localhost:34365/api/BuyerLogin/BuyerLogin";

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    e.persist();
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const loginData = {
      emailId: buyer.EmailId,
      sellerPassword: buyer.Password,
    };

    axios.post(apiUrl, loginData).then((result) => {
      // console.log(result);
      if (result.data.status === "Success") {
        localStorage.setItem("loggedIn", true);
        dispatch({ type: "setLogin" });
        dispatch({ type: "addUserDetails", userDetails: {} });
        navigate("/AccountDetails/" + loginData.emailId);
        // alert("You have been successfully registered at BetterMart.com");
        // navigate("/BuyerLogin");
      } else {
        alert("Incorrect Email or Password!");
      }

      // if (result.regBuyer.status == "Invalid") alert("Invalid User");
      // else props.history.push("/AccountDetails");
    });
  };

  return (
    <div className="BuyerLogin">
      <div className="BuyerLogin__ele1">
        <img
          src="https://image.freepik.com/free-vector/account-concept-illustration_114360-399.jpg"
          className="BuyerLogin__ele1__img"
          alt=""
        />
      </div>
      <div className="BuyerLogin__ele2">
        <h4>Login</h4>
        <form className="BuyerLogin__ele2__form" onSubmit={onSubmit}>
          <input
            className="BuyerLogin__ele2__form__input"
            type="email"
            name="EmailId"
            placeholder="Enter your Email Id "
            required
            onChange={handleChange}
          />

          <input
            className="BuyerLogin__ele2__form__input"
            type="password"
            name="Password"
            placeholder="Password "
            required
            onChange={handleChange}
          />

          <a href="">Forgot Password?</a>
          <button
            className="BuyerLogin__ele2__form__button"
            type="submit"
            block
          >
            Login
          </button>
          <a href="/BuyerRegister">Not Registered?Register here.</a>
        </form>
        <div className="BuyerLogin__ele2__social">
          <p>Login with :</p>
          <span className="BuyerLogin__ele2__social__icons">
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
    //   <h2>Login</h2>
    //   <div className="BuyerLogin__container">
    //     <div className="BuyerLogin__image">
    //       {/* <Image src="holder.js/100px250" fluid /> */}
    //       <img
    //         src="https://image.freepik.com/free-vector/account-concept-illustration_114360-399.jpg"
    //         className="BuyerLogin__login__image"
    //         alt=""
    //       />
    //     </div>

    //     <div className="BuyerLogin__login-form">
    //       <form onSubmit={onSubmit}>
    //         <input
    //           className="BuyerLogin__form-control BuyerLogin__form-control-lg"
    //           type="email"
    //           name="EmailId"
    //           placeholder="Enter your registered Email "
    //           required
    //           onChange={handleChange}
    //         />
    //         <br />
    //         <input
    //           className="BuyerLogin__form-control BuyerLogin__form-control-lg"
    //           type="password"
    //           name="Password"
    //           placeholder="Enter your Password"
    //           required
    //           onChange={handleChange}
    //         />
    //         <br />
    //         <h6 className="BuyerLogin__alignright">
    //           <a href="">Forgot Password</a>
    //         </h6>
    //         <button type="submit" className="BuyerLogin__btn__login" block>
    //           <span>Login</span>
    //         </button>
    //         <br />
    //         <h6 className="BuyerLogin__h6__icon">
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
    //       </form>
    //       <h6 className="BuyerLogin__alignright">
    //         <a
    //           onClick={() => {
    //             navigate("/BuyerRegister");
    //           }}
    //         >
    //           Not Registered?&nbsp;Register here.
    //         </a>
    //       </h6>
    //     </div>
    //   </div>
    // </div>
  );
}

export default BuyerLogin;
