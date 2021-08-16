import React from "react";
import './showAllReviews.css';
import { Container, Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
const ShowAllReviews = (props) => {
  let productReviews = props.productReviews;

  const stars = Array(5).fill(0);
  return (
    <div class="console">
      {" "}
      {productReviews.map((review) => {
        return (
          <Container>
            <div>
            <Row sm={8}>
              <Col sm={8}>
                <div class="crt">
                  <h5 >{review.user.userName}</h5>
                  <p>{review.description}</p>
                  {stars.map((star, index) => index < review.rating && (
                      <FaStar class="stars"/>
                      )  
                      )}
                </div>
              </Col>
              <Col sm={2}></Col>
            </Row>
            </div>
          </Container>
        );
      })}
    </div>
  );
};
export default ShowAllReviews;
const starColors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      // alignItems: "center"
    },
  };
