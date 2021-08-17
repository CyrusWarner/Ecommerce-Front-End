import React from "react";
import './showAllReviews.css';
import { Container, Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
const ShowAllReviews = (props) => {
  let productReviews = props.productReviews;

  const stars = Array(5).fill(0);
  return (
    <Container >
      <Row>
        
      {" "}
      {productReviews.map((review) => {
        return (
          <Container>
            <div>
            
            <Row>
            <Col sm={2}></Col>
              <Col className="d-flex justify-content-center" sm={8}>
                <div>
                <div className="crt">
                  <h5 >{review.user.userName}</h5>
                  <p>{review.description}</p>
                  {stars.map((star, index) => index < review.rating && (
                      <FaStar class="stars"/>
                      )  
                      )}
                </div>
                </div>
              </Col>
              <Col sm={2}></Col>
            </Row>
            </div>
          </Container>
        );
      })}
      </Row>
    </Container>
  );
};
export default ShowAllReviews;


