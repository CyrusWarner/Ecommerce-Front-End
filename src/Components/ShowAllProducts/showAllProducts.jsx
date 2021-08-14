import React from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStar, FaDollarSign } from "react-icons/fa";
import FilteredCategories from "../Categories/filteredCategories";
import SearchBar from "../SearchBar/searchBar";
import "./showAllProducts.css";

const ShowAllProducts = (props) => {
  const stars = Array(5).fill(0);

  let allProducts = props.allProducts;
  let createCurrentProduct = props.createCurrentProduct;
  let getAllProducts = props.getAllProducts;
  let getProductReviews = props.getProductReviews;
  let userCurrentCategoryId = props.userCurrentCategoryId;
  let categories = props.categories;
  let setFilteredCategories = props.setFilteredCategories;
  let setSearchFilteredProducts = props.setSearchFilteredProducts;

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={4}>
            <h1 className="title">All Products</h1>
          </Col>
          <SearchBar
            allProducts={allProducts}
            setSearchFilteredProducts={setSearchFilteredProducts}
            getAllProducts={getAllProducts}
          />
          <FilteredCategories
            categories={categories}
            allProducts={allProducts}
            userCurrentCategoryId={userCurrentCategoryId}
            setFilteredCategories={setFilteredCategories}
            getAllProducts={getAllProducts}
          />
          <Col sm={8}></Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="d-flex justify-content-center">
          {allProducts.map((product) => {
            return (
              <Card
                className="customCard card-container border"
                style={{ width: "18rem", margin: "1rem" }}
              >
                <Card.Body className="text-center">
                  <Card.Title className="fs-4">{product.name}</Card.Title>
                  <hr className="titleSeperator"></hr>
                  <Card.Text className="fs-5">{product.description}</Card.Text>
                  <Card.Text className="fs-5">
                    <FaDollarSign />
                    {product.price}
                  </Card.Text>
                  {stars.map(
                    (star, index) =>
                      index < product.averageRating && (
                        <FaStar color={starColors.orange} />
                      )
                  )}
                  <div className="mb-2"></div>
                  <Link to="/viewproduct">
                    <Button
                      style={{
                        backgroundColor: "crimson",
                        borderColor: "crimson",
                      }}
                      onClick={() => [
                        (createCurrentProduct(product),
                        getProductReviews(product.productId)),
                      ]}
                    >
                      View product
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
};
const starColors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export default ShowAllProducts;
