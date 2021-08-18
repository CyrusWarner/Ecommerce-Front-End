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
            <Col sm={1}></Col>
              <Col className="d-flex justify-content-center" sm={10}>
                <div className="crtTerminal d-flex align-items-center justify-content-center">
                  <div className="crtBezel">
      {" "}
      {productReviews.map((review) => {
        return (
                <div className="d-flex justify-content-center" >
                <div className="crt mt-2">
                  <h5 id="blueText">{review.user.userName}</h5>
                  <p id="greenText">{review.description}</p>
                  {stars.map((star, index) => index < review.rating && (
                      <FaStar className="stars" color="orange"/>
                      )  
                      )}
                </div>
                </div> 
        );
      })}
      </div>
      </div>
          </Col>

              <Col sm={1}></Col>
            </Row>
    </Container>
  );
};
export default ShowAllReviews;


