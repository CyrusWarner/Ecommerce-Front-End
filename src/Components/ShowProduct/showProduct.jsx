import React from "react";
import ReviewForm from "../ReviewForm/reviewForm";
import { Col, Container, Row, Button } from "react-bootstrap";
import ShowAllReviews from './../ShowAllReviews/showAllReviews';
import "./showProduct.css";
const ShowProduct = (props) => {
  const { name, description, price, category, averageRating } = props.currentProduct;
  const currentUser = props.currentUser;
  const currentToken = props.currentToken;
  const getProductReviews = props.getProductReviews
  let productReviews = props.productReviews;
  console.log(productReviews.length);
  console.log(averageRating)
  let averageReview = averageRating / productReviews.length
    console.log(averageReview)
  return (
    <React.Fragment>
      <div className="orbit">
      <Container>
        <Row>
        <Col sm={2}></Col>
          <Col className="d-flex justify-content-center" sm={8}>
            <div id="neonText">
            <h1>{name}</h1>
            <h2>${price}</h2>
            <h3>Category:{category.categoryName}</h3>
            <p>Description:{description}</p>
            <p>Average Review: {averageReview}</p>
            <Button onClick={() => props.addItemToCart(props.currentProduct)} style={{
                        backgroundColor: "crimson",
                        borderColor: "crimson",
                      }}>Add to Cart</Button>
                      </div>
          </Col>
          <Col sm={2}></Col>
        </Row>
        <ReviewForm getProductReviews={getProductReviews} currentToken={currentToken} currentUser={currentUser} currentProduct={props.currentProduct}/>
        <ShowAllReviews productReviews={productReviews} currentUser={currentUser}/>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ShowProduct;
