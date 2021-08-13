import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';



const ShoppingCart = (shoppingCart) => {
  
  
    
  

  return ( 
    <Container>
      <Row>
        <Col></Col>
        <Col>
          {shoppingCart.forEach(item => {
            <h1>{item}</h1>
          })}
        </Col>
        <Col></Col>
      </Row>
    </Container>
   );
}
 
export default ShoppingCart;