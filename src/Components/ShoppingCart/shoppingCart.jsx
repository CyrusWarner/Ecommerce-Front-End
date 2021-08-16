import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./shoppingCart.css"

const ShoppingCart = (props) => {
  let shoppingCart = props.shoppingCart;
  let user = props.user;
  const [quantityDidChange, setQuantityDidChange] = useState(false);
  let total = 0;
  useEffect( () =>{
    props.getUsersCart()
  }, [quantityDidChange])

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col sm md lg ={2}></Col>
        <Col sm md lg ={8}>
        <div className="title"><h1>{user.user.username}'s Shopping Cart!</h1></div>
        
          {shoppingCart.map((item) => {
            total += item.product.price * item.quantity;
            return (
                    <div className="itemBox" key={item.id}>
                      <Row>
                        <Col>
                        <div className="details">
                              <h2 className="name">{item.product.name}</h2>
                            
                          </div>
                          <>Sold by: {item.product.user.userName}</></Col>
                        <Col>
                         
                          <p className="description">{item.product.description}</p>
                          <div className="amount">
                          
                          </div>
                        </Col>
                        <Col>
                          
                              <span className="pricing">
                              <FaMinus onClick={async () => { await props.decreaseQuantity(item.quantity, item.shoppingCartId); setQuantityDidChange(!quantityDidChange)}} style={{padding: "2px", margin: ".5rem", cursor: "pointer" }}/>
                                {item.quantity}
                                <FaPlus onClick={async () => {await props.increaseQuantity(item.quantity, item.shoppingCartId); setQuantityDidChange(!quantityDidChange)}} style={{padding: "2px", margin: ".5rem", cursor: "pointer" }}/>
                                <div style={{ marginLeft: "1rem" }}>${item.product.price} Each</div>
                                </span>
                        </Col>
                      </Row>
                    </div>
                    
                    
            )})}
          <div className="total">    
            <h3>Total: ${total}</h3>
          </div>
        </Col>
        <Col sm md lg ={2}></Col>
      </Row>
    </Container>
  );
};

export default ShoppingCart;
