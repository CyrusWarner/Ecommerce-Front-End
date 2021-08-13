import React from 'react';  
import { Link } from 'react-router-dom';
import { Navbar,Nav, Form, Container  } from 'react-bootstrap';
import './navigationBar.css';

const NavigationBar = (props) => {
      let currentUser = props.currentUser
      const logout = () => {
        localStorage.clear();
    // you can also like localStorage.removeItem('Token');
        window.location.href = "/login";
      }
    return (
        <Navbar className="color-nav">
        {/* <Navbar.Brand>Star Wars Ecommerce</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav style={{ maxHeight: '100px' }} navbarScroll >
            <Nav.Link as={Link} to="/" ><h4 className="linkText">Home</h4></Nav.Link>
            <Nav.Link as={Link} to="/products"><h4 className="linkText">View Products</h4></Nav.Link>
            <Nav.Link as={Link} to="/user/shoppingcart"><h4 className="linkText">Shopping Cart</h4></Nav.Link>
            <Nav.Link as={Link} to="/user/createproduct"><h4 className="linkText">Sell A Product</h4></Nav.Link>
            {currentUser &&
            <Nav.Link as={Link} onClick={logout}><h4 className="linkText">Logout</h4></Nav.Link> 
            }
            {!currentUser &&
            <Nav.Link as={Link} to="/Signup"><h4 className="linkText">Signup</h4></Nav.Link>
            }
            {!currentUser &&
            <Nav.Link as={Link} to="/Login"><h4 className="linkText">Login</h4></Nav.Link>
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