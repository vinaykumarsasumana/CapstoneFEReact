//////////////////////////////////////////////////////////////////////
// Purpose: Category Page Component
// Author: Siddharth Karanchery
//////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import "./CategoryPage.css";

function CategoryPage(props) {
  const [filter, setFilter] = useState("BS");
  const [productData, setProductData] = useState([]);

  const { category } = useParams();

  const navigate = useNavigate();

  ///////////////////// USE EFFECT ///////////////////////////
  useEffect(() => {
    axios
      .get(
        "http://localhost:34365/api/Product/Sorting?SubType=" +
          category +
          "&sortOrder=" +
          filter
      )
      .then((results) => {
        console.log(results.data.$values);
        setProductData(results.data.$values);
      });
  }, [filter, category]);

  ///////////////////// HANDLERS ///////////////////////////
  const selectHandler = (e) => {
    setFilter(e.target.value);
    console.log("filter:", filter);
  };

  return (
    <div className="CategoryPage">
      <div className="CategoryPage__header">
        <h4
          style={{
            color: "white",
            width: "45%",
            alignSelf: "center",
          }}
        >
          {category}
        </h4>
        <div className="CategoryPage__header__filter">
          <p style={{ color: "white" }}> Sort by:</p>
          <select value={filter} onChange={selectHandler}>
            <option value="BS">Best Selling</option>
            <option value="L2H">Price: Low to High</option>
            <option value="H2L">Price: High to Low</option>
            <option value="A2Z">Name: A to Z</option>
            <option value="Z2A">Name: Z to A</option>
          </select>
        </div>
      </div>

      <Container fluid="xxl">
        <Row>
          {productData.map((product) => {
            return (
              <Col xs="12" sm="3">
                <Card style={{ width: "18rem" }}>
                  {product.imageURL === null ||
                  product.imageURL.length === 0 ? (
                    <Card.Img
                      variant="top"
                      src="https://www.cloudfuze.com/wp-content/uploads/2021/04/default-post.jpg"
                    />
                  ) : (
                    <Card.Img
                      variant="top"
                      src={product.imageURL.productImageUrl}
                    />
                  )}
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        navigate("/ProductPage/" + product.name);
                      }}
                    >
                      Product Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default CategoryPage;
