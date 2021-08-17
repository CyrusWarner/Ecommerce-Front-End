
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaPlus, FaMinus, FaDollarSign } from "react-icons/fa";
import "./shoppingCart.css"

const ShoppingCart = (props) => {
  let shoppingCart = props.shoppingCart;
  let user = props.user;
  const [quantityDidChange, setQuantityDidChange] = useState(false);
  let total = 0;
  shoppingCart.map((item) => {
    total += item.product.price * item.quantity
  })
  useEffect( () =>{
    props.getUsersCart()
  }, [quantityDidChange])
  var image = new Image(),
    containerWidth = null,
    containerHeight = null;
  return (
    <React.Fragment>
       <Container>
          <Row>
            <Col sm={8}><div className="title"><h1>{user.user.username}'s Shopping Cart!</h1></div>
            <div className="total">         
              <h4>Total:<FaDollarSign size="1.5rem" style={{color: "green"}}/>{total}</h4>
            </div>
            </Col>
            <Col sm={4}>
            </Col>
          </Row>
        </Container>
          {shoppingCart.map((item) => {
            
            

            image.onload=function(){
              containerWidth = image.width;
              containerHeight = image.height;
            }
            if(item.product.image == null || item.product.image == ""){
              image.src = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
            }
            else{
              image.src = item.product.image; 
            }
            {total += item.product.price * item.quantity;}
            return (
              <React.Fragment> 
                <Container>
                  <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                    <div className="mb-2 fs-5" style={{color: "white"}}>Sold by: {item.product.user.userName}</div>
                    </Col>
                    <Col sm={1}></Col>
                  </Row>
                </Container>
              <Container> 
                <Row>
                  <Col sm={1}></Col>
                  <Col sm={10}>
                  <React.Fragment>
                      <Card className=" cardGlow mb-4">
                      <Card.Img className="image ms-1 mt-1" src={image.src}  responsive rounded />
    <Card.Title className="fs-2 ms-3 mt-2">{item.product.name}</Card.Title>
  <Card.Body>
    <Card.Text>
    {item.product.description}
    </Card.Text>
        <Row >
          <Col sm={4}>
          <span style={{marginRight: "0.5rem"}} className="fs-5"> Quantity: {item.quantity}</span> 
          <FaPlus size="1.5rem" onClick={async () => {await props.increaseQuantity(item.quantity, item.shoppingCartId); setQuantityDidChange(!quantityDidChange)}} />
          <FaMinus  size="1.5rem" onClick={async () => { await props.decreaseQuantity(item.quantity, item.shoppingCartId); setQuantityDidChange(!quantityDidChange)}} /> 
          </Col>
        </Row>
      <div className="fs-5 mb-2">Price: <FaDollarSign size="1.5rem" style={{color: "green"}}/>{item.product.price * item.quantity}</div>
    <Button style={{backgroundColor: "crimson", borderColor: "crimson"}}>Checkout</Button>
  </Card.Body>
</Card>
</React.Fragment>           
                  </Col>
                  <Col sm={1}></Col>
</Row>
</Container>
</React.Fragment>
            );
          })}
            </React.Fragment>
            );
          };                     
export default ShoppingCart; 

                             
                           
        
