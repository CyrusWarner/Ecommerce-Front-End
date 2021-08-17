import React from "react";
import './showAllReviews.css';
import { Container, Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
const ShowAllReviews = (props) => {
  let productReviews = props.productReviews;
  const stars = Array(5).fill(0);
  return (
    <Container>
            <Row>
            <Col sm={2}></Col>
              <Col sm={8}>
      {" "}
      {productReviews.map((review) => {
        return (
                <div className="d-flex justify-content-center" >
                <div className="crt">
                  <h5 >{review.user.userName}</h5>
                  <p>{review.description}</p>
                  {stars.map((star, index) => index < review.rating && (
                      <FaStar class="stars"/>
                      )  
                      )}
                </div>
                </div> 
        );
      })}
          </Col>

              <Col sm={2}></Col>
            </Row>
    </Container>
  );
};
export default ShowAllReviews;


