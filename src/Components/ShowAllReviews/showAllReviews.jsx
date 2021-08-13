import React from "react";
import './showAllReviews.css';
import { Container, Col, Row } from "react-bootstrap";
const ShowAllReviews = (props) => {
  let productReviews = props.productReviews;
  let currentUser = props.currentUser.user
  console.log(currentUser)
  return (
    <div>
      {" "}
      {productReviews.map((review) => {
        return (
          <Container>
            <Row>
              <Col sm={8}>
                <div class="content-m">
                  <h5>{currentUser.username}</h5>
                <p>{review.description}</p>
                <p>Rating: {review.rating}</p>
                <div class="rating">
                  
                </div>
                {console.log(review.rating)}
                </div>
              </Col>
              <Col sm={4}></Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
};
export default ShowAllReviews;
