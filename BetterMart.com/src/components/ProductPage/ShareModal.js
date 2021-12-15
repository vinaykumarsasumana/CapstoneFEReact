//////////////////////////////////////////////////////////////////////
// Purpose: Share Modal Component
// Author: Siddharth Karanchery
//////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";

import emailjs from "emailjs-com";

import ImageCarousel from "../ImageCarousel/ImageCarousel";

import {
  FaShareAlt,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

import { Container, Row, Col, Accordion, Button, Modal } from "react-bootstrap";
import {
  Card,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroup,
  Textarea,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

import { useParams, useNavigate } from "react-router-dom";

import productDetails from "../../Data/ProductDetails.json";

import "./ProductPage.css";

function ShareModal(props) {
  const [mail, setMail] = useState({
    FromName: "",
    FromEmail: "",
    ToName: "",
    ToEmail: "",
  });

  const onChangeHandler = (e) => {
    e.persist();

    setMail({ ...mail, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    console.log("Mail:", mail);
    e.preventDefault();
    if (
      mail.FromName.length === 0 ||
      mail.FromEmail.length === 0 ||
      mail.ToName.length === 0 ||
      mail.ToEmail.length === 0
    ) {
      alert("Please fill all the details before sharing message.");
      return;
    }

    const data = {
      FromName: mail.FromName,
      FromEmail: mail.FromEmail,
      ToName: mail.ToName,
      ToEmail: mail.ToEmail,
      URL: window.location.href,
    };

    emailjs.init("user_dnwbctoN27KW7QfBkRJHH");

    // console.log("Data:", data);

    emailjs
      .send(
        "service_3e6grlj",
        "template_33aom0v",
        data,
        "user_dnwbctoN27KW7QfBkRJHH"
      )
      .then(
        function () {
          alert("Your message to " + data.ToName + " has been sent!");
          //   console.log("SUCCESS!");
        },
        function (error) {
          alert("Oops!Something went wrong.", error);
          //   console.log("FAILED...", error);
        }
      );

    setMail({
      FromName: "",
      FromEmail: "",
      ToEmail: "",
      ToName: "",
    });
    props.setShowModal(false);
  };
  return (
    <Modal
      show={props.showModal}
      onHide={() => {
        props.setShowModal(false);
      }}
      keyboard={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>Share </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container className="w-100">
          <Row className="justify-content-center">
            <Col fluid="true">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        name="FromName"
                        id="Name"
                        placeholder="Your Name"
                        value={mail.FromName}
                        onChange={onChangeHandler}
                      />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <Input
                        type="email"
                        placeholder="Your Email"
                        name="FromEmail"
                        id="Email"
                        value={mail.YourEmail}
                        onChange={onChangeHandler}
                      />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <Input
                        type="text"
                        placeholder="To Name"
                        name="ToName"
                        id="Subject"
                        value={mail.ToName}
                        onChange={onChangeHandler}
                      />
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <Input
                        type="text"
                        placeholder="To Email"
                        name="ToEmail"
                        id="Message"
                        value={mail.Message}
                        onChange={onChangeHandler}
                      />
                    </InputGroup>

                    {/* <CardFooter className="p-4 ">
                  <Row>
                    <Button
                      type="submit"
                      className="btn btn-success mb-1"
                      block
                    >
                      <span>Send</span>
                    </Button>
                  </Row>
                </CardFooter> */}
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={onSubmitHandler}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShareModal;
