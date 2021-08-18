import React from "react";
import ReviewForm from "../ReviewForm/reviewForm";
import { Col, Container, Row, Button } from "react-bootstrap";
import ShowAllReviews from './../ShowAllReviews/showAllReviews';
import "./showProduct.css";
import { FaStar } from "react-icons/fa";
const ShowProduct = (props) => {
  const { name, description, price, averageRating } = props.currentProduct;
  const {currentUser, currentToken, getProductReviews, productReviews, addItemToCart, currentProduct} = props;
  const stars = Array(5).fill(0);
  return (
    <React.Fragment>
      {currentProduct.length !== 0 &&
      <div className="orbit">
      <Container>
        <Row>
        <Col sm={2}></Col>
          <Col className="d-flex justify-content-center" sm={8}>
            <div id="neonText">
            <h1>{name}</h1>
            <h2>${price}</h2>
            <h3>Category:{currentProduct.category.categoryName}</h3>
            <h4>Description:{description}</h4>
            <p>{stars.map((star, index) => index < averageRating && (
                      <FaStar/>
                      )  
                      )}</p>
            <Button onClick={() => addItemToCart(props.currentProduct)} style={{
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
      }
    </React.Fragment>
  );
};

export default ShowProduct;
