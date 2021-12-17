//////////////////////////////////////////////////////////////////////
// Purpose: Product Page Component
// Author: Siddharth Karanchery
//////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";

import ImageCarousel from "../ImageCarousel/ImageCarousel";

import {
  FaShareAlt,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

import axios from "axios";

import { Container, Row, Col, Accordion, Button, Modal } from "react-bootstrap";

import { useParams, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import "./ProductPage.css";
import ShareModal from "./ShareModal";

function ProductPage(props) {
  const [showModal, setShowModal] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const [productImages, setProductImages] = useState([]);

  const { product } = useParams();

  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.userDetails);

  ///////////////////// USE EFFECT ///////////////////////////
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(
        "http://localhost:34365/api/Product/GetProductDetailsByProductName?ProductName=" +
          product
      )
      .then((result) => {
        console.log(result);
        setProductDetails(result.data[0]);
        axios
          .get(
            "http://localhost:34365/api/Product/GetProductImageDetailsByProductId?ProductId=" +
              result.data[0].productId
          )
          .then((results) => {
            console.log("Images retrieved:", results);
            setProductImages(results.data);
          });
      });
  }, []);

  ///////////////////// HANDLERS ///////////////////////////
  const addToCartHandler = () => {
    if (userDetails.Id === undefined) {
      alert("Please login to add item to cart.");
      navigate("/BuyerLogin");
      return;
    }
    let itemDetails = {
      buyerId: userDetails.Id,
      productId: productDetails.productId,
      productName: productDetails.productName,
      productPrice: productDetails.productPrice,
      deliveryCharge: productDetails.deliveryCharge,
      deliveryTime: productDetails.deliveryTime,
      productQuantity: 1,
      productImage: "https://picsum.photos/200?random=1",
    };

    axios
      .post("http://localhost:34365/api/Cart/AddToCart", itemDetails)
      .then((result) => {
        console.log("add to cart response:", result);
        if (result.data.message === "Added to cart successfully.")
          alert("Item added to cart!");
        else {
          alert("Oops!Something went wrong");
        }
      });
  };

  const addToWishlistHandler = () => {
    if (userDetails.Id === undefined) {
      alert("Please login to add item to wishlist.");
      navigate("/BuyerLogin");
      return;
    }
    let itemDetails = {
      buyerId: userDetails.Id,
      productId: productDetails.productId,
      productName: productDetails.productName,
      productPrice: productDetails.productPrice,
      oneImage: "https://picsum.photos/200?random=1",
      deliveryCharge: productDetails.deliveryCharge,
      deliveryTime: productDetails.deliveryTime,
      productQuantity: 1,
    };
    console.log("itemDetails:", itemDetails);
    axios
      .post("http://localhost:34365/api/Wishlists", itemDetails)
      .then((result) => {
        console.log("add to wishlist response:", result);
        if (result.statusText === "Created") alert("Item added to wishlist!");
        else {
          alert("Oops!Something went wrong");
        }
      });
  };

  return (
    <div className="ProductPage">
      {showModal ? (
        <ShareModal setShowModal={setShowModal} showModal={showModal} />
      ) : null}
      <div className="ProductPage__ele">
        {productImages === undefined || productImages.length !== 0 ? (
          <ImageCarousel images={productImages} />
        ) : (
          <img
            src="https://www.cloudfuze.com/wp-content/uploads/2021/04/default-post.jpg"
            alt=""
          />
        )}
      </div>
      <div className="ProductPage__ele" id="ele__details">
        <Container class="d-flex align-items-center">
          <Row>
            <h2>{productDetails.productName}</h2>
          </Row>
          <Row>
            <h4>Description</h4>
            <p>{productDetails.productDescription}</p>
          </Row>
          <Row>
            <Col>
              <h4>Price</h4>
            </Col>
            <Col>
              <h4>Rs. {productDetails.productPrice}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Shipping Charges</p>
            </Col>
            <Col>
              <p>Rs. {productDetails.deliveryCharge}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="success" onClick={addToCartHandler}>
                Add to Cart
              </Button>
            </Col>
            <Col>
              <Button
                variant="warning"
                onClick={() => {
                  navigate("/Cart");
                }}
              >
                Go to Cart
              </Button>
            </Col>
            <Col>
              <Button variant="secondary">Enquiry</Button>
            </Col>
          </Row>
          <Row className="ProductPage__ele__social">
            <Col>
              <FaHeart onClick={addToWishlistHandler} />
            </Col>
            <Col>
              <FaShareAlt
                onClick={() => {
                  setShowModal(true);
                }}
              />
            </Col>
            <Col>
              <FaTwitter
                className="Header__header__nav__icons"
                size={20}
                onClick={() => {
                  window.open("https://www.twitter.com", "_blank");
                }}
              />
            </Col>
            <Col>
              <FaFacebook
                className="Header__header__nav__icons"
                size={20}
                onClick={() => {
                  window.open("https://www.facebook.com", "_blank");
                }}
              />
            </Col>
            <Col>
              <FaLinkedin
                className="Header__header__nav__icons"
                size={20}
                onClick={() => {
                  window.open("https://www.linkedin.com", "_blank");
                }}
              />
            </Col>
          </Row>
          <Row>
            <h4>Product Details</h4>
            <Accordion defaultActiveKey="" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Brand</Accordion.Header>
                <Accordion.Body>
                  {productDetails.productBrandName}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Type</Accordion.Header>
                <Accordion.Body>{productDetails.productSubType}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Origin</Accordion.Header>
                <Accordion.Body>
                  {productDetails.productionCountryOrigin}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ProductPage;
