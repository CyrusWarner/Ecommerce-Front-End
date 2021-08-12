import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ShowAllReviews from './../ShowAllReviews/showAllReviews';
const ShowProduct = (props) => {
  const { name, description } = props.currentProduct;
  let productReviews = props.productReviews;
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={4}>
            <h1>{name}</h1>
            <p>{description}</p>
          </Col>
          <Col sm={8}></Col>
        </Row>
      </Container>
      <Container>
          <Row>
              <Col sm={8}>
                  <ShowAllReviews productReviews={productReviews}/>
              </Col>
              <Col sm={4}></Col>
          </Row>
      </Container>
    </React.Fragment>
  );
};

export default ShowProduct;
