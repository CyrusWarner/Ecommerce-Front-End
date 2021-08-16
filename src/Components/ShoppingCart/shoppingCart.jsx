import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
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
        <Col></Col>
        <Col>
        <div className="title"><h1>{user.user.username}'s Shopping Cart!</h1></div>
        {/* <Table>
          <thead>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </thead>
        <tbody> */}
          
        
          {shoppingCart.map((item) => {
            total += item.product.price * item.quantity;
            return (
              
              // <tr>
                /* <td><div>
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
                <td>${item.product.price * item.quantity}<br/></td> */
                <div className="item card" key={item.id}>
                    <div className="itemBox">
                        <div className="details">
                            <h2>{item.product.name}</h2>
                            <span>${item.product.price} Each</span>
                        </div>
                        <h5>Sold by: {item.product.user.userName}</h5>
                        <hr className="underline"></hr>
                        <p>{item.product.description}</p>
                        <div className="amount">
                        <FaMinus onClick={async () => { await props.decreaseQuantity(item.quantity, item.shoppingCartId); setQuantityDidChange(!quantityDidChange)}} style={{padding: "2px", cursor: "pointer" }}/>
                            <span className="quantity">{item.quantity}</span>
                        <FaPlus onClick={async () => {await props.increaseQuantity(item.quantity, item.shoppingCartId); setQuantityDidChange(!quantityDidChange)}} style={{padding: "2px", cursor: "pointer" }}/>
                        </div>
                    </div>
                    {/* <div className="delete" >X</div> */}
                </div>
            );
          })}
          <div className="total">    
            <h3>Total: ${total}</h3>
          </div>
                
          {/* //     </tr>
              
          //   );
          // })}
          // </tbody>
          // <tfoot>
          //   <tf>
          //   <tr>
            
          //     <td></td>
          //     <td></td>
              
          //      <td className="text-right">Grand Total: {}</td> 
            

          //   </tr>
          //   </tf>
          // </tfoot>
          // </Table> */}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default ShoppingCart;
