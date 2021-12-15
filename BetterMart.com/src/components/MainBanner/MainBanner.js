//////////////////////////////////////////////////////////////////////
// Purpose: MainBanner Component
// Author: Siddharth Karanchery
//////////////////////////////////////////////////////////////////////

import React, { useState } from "react";

import { Carousel, CarouselItem, Container, Row, Col } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import camera from "../../Images/camera1.jpg";
import shoes from "../../Images/shoes.jpg";
import smartwatch from "../../Images/smartwatch.jpg";
import smartphones from "../../Images/smartphones.jpg";

import "./MainBanner.css";

function MainBanner() {
  const navigate = useNavigate();
  return (
    <div className="MainBanner">
      <div className="MainBanner__carousel">
        <Carousel interval="3000">
          <CarouselItem>
            <img
              className="d-block w-100 h-10"
              src={smartphones}
              alt="First slide"
              onClick={() => {
                navigate("/CategoryPage/" + "smart phone");
              }}
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="d-block w-100 h-10"
              src={camera}
              alt="First slide"
              onClick={() => {
                navigate("/CategoryPage/" + "camera");
              }}
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="d-block w-100"
              src={shoes}
              alt="Second slide"
              onClick={() => {
                navigate("/CategoryPage/" + "shoe");
              }}
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="d-block w-100"
              src={smartwatch}
              alt="Third slide"
              onClick={() => {
                navigate("/CategoryPage/" + "smart watch");
              }}
            />
          </CarouselItem>
        </Carousel>
      </div>
      <div className="MainBanner__columns">
        <h2>Top Sellers</h2>
        <Container>
          <Row>
            <Col>
              <Row>
                <img
                  className="MainBanner__columns__column__img"
                  src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
              </Row>
              <Row>
                <Col>RayBan Sunglasses</Col>
                <Col>
                  <p>Price:$$</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <img
                  className="MainBanner__columns__column__img"
                  src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
              </Row>
              <Row>
                <Col>Nike Shoes</Col>
                <Col>
                  <p>Price:$$</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <img
                  className="MainBanner__columns__column__img"
                  src="https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
              </Row>
              <Row>
                <Col>Nintendo Gameboy</Col>
                <Col>
                  <p>Price:$$</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <img
                  className="MainBanner__columns__column__img"
                  src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
              </Row>
              <Row>
                <Col>Jimmy Choo Shoes</Col>
                <Col>
                  <p>Price:$$</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default MainBanner;
