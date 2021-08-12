import React from 'react';  
import { Link } from 'react-router-dom';
import { Navbar,Nav, FormControl, Form, Button } from 'react-bootstrap';
const NavigationBar = () => {
    //CHANGE LINE 20 TO A ONCLICK EVENT TO LOG A USER OUT
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
        navbarScroll
    >
      <Nav.Link as={Link} to="/" >home</Nav.Link>
      <Nav.Link as={Link} to="/products">View Products</Nav.Link>
      <Nav.Link as={Link} to="/user/shoppingcart">Shopping Cart</Nav.Link>
      <Nav.Link as={Link} to="/user/createproduct">Sell A Product</Nav.Link>
      <Nav.Link as={Link} to="/logout">Logout</Nav.Link> 
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
    <Nav>
   
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavigationBar