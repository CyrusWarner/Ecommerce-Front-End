import React from 'react';  
import { Link } from 'react-router-dom';
import { Navbar,Nav, Form  } from 'react-bootstrap';
const NavigationBar = (props) => {
      let currentUser = props.currentUser
      const logout = () => {
        localStorage.clear();
    // you can also like localStorage.removeItem('Token');
        window.location.href = "/login";
      }
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand className="ms-2">Star Wars Ecommerce</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
        navbarScroll
    >
      <Nav.Link as={Link} to="/" >Home</Nav.Link>
      <Nav.Link as={Link} to="/products">View Products</Nav.Link>
      <Nav.Link as={Link} to="/user/shoppingcart">Shopping Cart</Nav.Link>
      <Nav.Link as={Link} to="/user/createproduct">Sell A Product</Nav.Link>
      {currentUser &&
      <Nav.Link as={Link} onClick={logout}>Logout</Nav.Link> 
      }
      {!currentUser &&
      <Nav.Link as={Link} to="/Signup">Signup</Nav.Link>
      }
      {!currentUser &&
      <Nav.Link as={Link} to="/Login">Login</Nav.Link>
      }
    </Nav>
    <Form className="d-flex">

    </Form>
    <Nav>
   
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavigationBar