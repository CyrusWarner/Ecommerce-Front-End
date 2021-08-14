import React from 'react';  
import { Link } from 'react-router-dom';
import { Navbar,Nav, Form, Container  } from 'react-bootstrap';
import './navigationBar.css';

const NavigationBar = (props) => {
      let currentUser = props.currentUser
      let logout = props.logout
    return (
        <Navbar className="color-nav">
        {/* <Navbar.Brand>Star Wars Ecommerce</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav style={{ maxHeight: '100px' }} navbarScroll >
            <Nav.Link className="customNavLink" as={Link} to="/" ><h4 className="linkText">Home</h4></Nav.Link>
            <Nav.Link className="customNavLink" as={Link} to="/products"><h4 className="linkText">View Products</h4></Nav.Link>
            <Nav.Link className="customNavLink" as={Link} to="/user/shoppingcart"><h4 className="linkText">Shopping Cart</h4></Nav.Link>
            <Nav.Link className="customNavLink" as={Link} to="/user/createproduct"><h4 className="linkText">Sell A Product</h4></Nav.Link>
            {currentUser &&
            <Nav.Link className="customNavLink" as={Link} onClick={logout}><h4 className="linkText">Logout</h4></Nav.Link> 
            }
            {!currentUser &&
            <Nav.Link className="customNavLink" as={Link} to="/Signup"><h4 className="linkText">Signup</h4></Nav.Link>
            }
            {!currentUser &&
            <Nav.Link className="customNavLink" as={Link} to="/Login"><h4 className="linkText">Login</h4></Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavigationBar