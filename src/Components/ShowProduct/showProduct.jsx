import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const ShowProduct = (props) => {
  const { name, description } = props.currentProduct;
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
                  {/* PUT THE SHOWALLREVIEW COMPONENT HERE WHEN FINISHED */}
              </Col>
              <Col sm={4}></Col>
          </Row>
      </Container>
    </React.Fragment>
  );
};

export default ShowProduct;
