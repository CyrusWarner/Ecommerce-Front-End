import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';


const ShoppingCart = (props) => {
  const [shoppingCart, setshoppingCart] = useState();
  
  useEffect( async () =>{
    let response = await axios.get("https://localhost:44394/api/shoppingcart", {headers: {Authorization: 'Bearer ' + props.jwt}})
    console.log(response.data);
    //left off here to fix back end methods.
  }, [])
  

  return ( 
    <Container>
      <Row>
        <Col></Col>
        <Col>
          Hellos
        </Col>
        <Col></Col>
      </Row>
    </Container>
   );
}
 
export default ShoppingCart;