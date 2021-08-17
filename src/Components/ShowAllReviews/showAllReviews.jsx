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
              <Col className="d-flex justify-content-center" sm={8}>
                <div class="crtTerminal d-flex align-items-center justify-content-center">
                  <div class="crtBezel">
      {" "}
      {productReviews.map((review) => {
        return (
                <div className="d-flex justify-content-center" >
                <div className="crt">
                  <h5 id="blueText">{review.user.userName}</h5>
                  <p id="greenText">{review.description}</p>
                  {stars.map((star, index) => index < review.rating && (
                      <FaStar class="stars" color="orange"/>
                      )  
                      )}
                </div>
                </div> 
        );
      })}
      </div>
      </div>
          </Col>

              <Col sm={2}></Col>
            </Row>
    </Container>
  );
};
export default ShowAllReviews;


