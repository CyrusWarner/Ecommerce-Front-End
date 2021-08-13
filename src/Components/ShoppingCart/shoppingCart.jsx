import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

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
      <Row>
        <Col></Col>
        <Col>
        <h1>{user.user.username}'s Shopping Cart!</h1>
        <Table>
          <thead>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </thead>
        <tbody>
          
        
          {shoppingCart.map((item) => {
            total += item.product.price * item.quantity;
            return (
              
              <tr>
                <td><div>
                  {item.product.name}<br/>
                  Sold by: {item.product.user.userName}
                </div></td>
                <td>
                <FaMinus onClick={async () => { await props.decreaseQuantity(item.quantity, item.shoppingCartId); setQuantityDidChange(!quantityDidChange)}} style={{padding: "2px", cursor: "pointer" }}/>
                {item.quantity}
                <FaPlus onClick={async () => {await props.increaseQuantity(item.quantity, item.shoppingCartId); setQuantityDidChange(!quantityDidChange)}} style={{padding: "2px", cursor: "pointer" }}/>
                </td>
                <td>
                    ${item.product.price}
                </td>
                <td>${item.product.price * item.quantity}<br/></td>
                
                
              </tr>
              
            );
          })}
          </tbody>
          <tfoot>
            <tf>
            <tr>
            
              <td></td>
              <td></td>
              
               <td className="text-right">Grand Total: {total}</td> 
            

            </tr>
            </tf>
          </tfoot>
          </Table>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default ShoppingCart;
