//////////////////////////////////////////////////////////////////////
// Purpose: Category Page Component
// Author: Siddharth Karanchery
//////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";

import emailjs from "emailjs-com";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  Row,
} from "reactstrap";

import "./ContactUs.css";

function ContactUs(props) {
  const [mail, setMail] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
  });

  ///////////////////// USE EFFECT ///////////////////////////
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  ///////////////////// HANDLERS ///////////////////////////

  const onChangeHandler = (e) => {
    e.persist();

    setMail({ ...mail, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      mail.Name.length === 0 ||
      mail.Email.length === 0 ||
      mail.Subject.length === 0 ||
      mail.Message.length === 0
    ) {
      alert("Please fill all the details before submitting.");
      return;
    }

    const data = {
      Name: mail.Name,
      Email: mail.Email,
      Phone: mail.Phone,
      Subject: mail.Subject,
      Message: mail.Message,
    };

    emailjs.init("user_dnwbctoN27KW7QfBkRJHH");

    // console.log("Data:", data);

    emailjs
      .send(
        "service_3e6grlj",
        "template_iz2trua",
        data,
        "user_dnwbctoN27KW7QfBkRJHH"
      )
      .then(
        function () {
          alert("Thank you for contacting BetterMart.com.");
          //   console.log("SUCCESS!");
        },
        function (error) {
          alert("Oops!Something went wrong.", error);
          //   console.log("FAILED...", error);
        }
      );

    setMail({
      Name: "",
      Email: "",
      Subject: "",
      Message: "",
    });
  };

  return (
    <div className="ContactUs">
      <div className="ContactUs__card">
        <div className="ContactUs__card__ele" id="card__ele">
          <h3>Contact Us</h3>
          <img
            className="ContactUs__card__ele__img"
            src="https://img.freepik.com/free-vector/users-with-speech-bubbles-vector_53876-82250.jpg?size=626&ext=jpg"
            alt=""
          />
        </div>
        <div className="ContactUs__card__ele" id="card__ele1">
          <Container className="w-100">
            <Row className="justify-content-center">
              <Col fluid="true">
                <Card className="mx-4">
                  <CardBody className="p-4">
                    <Form onSubmit={onSubmitHandler}>
                      <InputGroup className="mb-3">
                        <Input
                          type="text"
                          name="Name"
                          id="Name"
                          placeholder="Name"
                          value={mail.Name}
                          onChange={onChangeHandler}
                        />
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <Input
                          type="email"
                          placeholder="Email"
                          name="Email"
                          id="Email"
                          value={mail.Email}
                          onChange={onChangeHandler}
                        />
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <Input
                          type="text"
                          placeholder="Subject"
                          name="Subject"
                          id="Subject"
                          value={mail.Subject}
                          onChange={onChangeHandler}
                        />
                      </InputGroup>

                      <InputGroup className="mb-4">
                        <Input
                          type="textarea"
                          placeholder="Message"
                          name="Message"
                          id="Message"
                          value={mail.Message}
                          onChange={onChangeHandler}
                        />
                      </InputGroup>

                      <CardFooter className="p-4 ">
                        <Row>
                          <Button
                            type="submit"
                            className="btn btn-success mb-1"
                            block
                          >
                            <span>Send</span>
                          </Button>
                        </Row>
                      </CardFooter>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
