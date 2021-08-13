import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
const ShowAllReviews = (props) => {
  let productReviews = props.productReviews;
  let currentUser = props.currentUser.user
  const stars = Array(5).fill(0);
  return (
    <div>
      {" "}
      {productReviews.map((review) => {
        return (
          <Container>
            <Row>
              <Col sm={8}>
                  <h5>{currentUser.username}</h5>
                <p>{review.description}</p>
                {}
                
                {stars.map((star, index) => index < review.rating && (
                    <FaStar color={starColors.orange}/>
                )  
                )}
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
