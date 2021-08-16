import React from "react";
import ReviewForm from "../ReviewForm/reviewForm";
import { Col, Container, Row, Button } from "react-bootstrap";
import ShowAllReviews from './../ShowAllReviews/showAllReviews';
import "./showProduct.css";
const ShowProduct = (props) => {
  const { name, description } = props.currentProduct;
  const currentUser = props.currentUser;
  const currentToken = props.currentToken;
  const getProductReviews = props.getProductReviews
  let productReviews = props.productReviews;
  return (
    <React.Fragment>
      <div >
      <Container class="space">
        <Row>
        <Col sm={2}></Col>
          <Col id="neonText" sm={8}>
            <h1>{name}</h1>
            <p>{description}</p>
            <Button onClick={() => props.addItemToCart(props.currentProduct)} style={{
                        backgroundColor: "crimson",
                        borderColor: "crimson",
                      }}>Add to Cart</Button>
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
