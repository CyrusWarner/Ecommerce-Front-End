import React from 'react';  
import { Link } from 'react-router-dom';
import { Navbar,Nav, Container } from 'react-bootstrap';
import './navigationBar.css';

const NavigationBar = (props) => {
  const {currentUser, getUsersCart, logout, getUsersProducts} = props
    return (
        <Navbar className="color-nav" expand="lg">
  <Container>
    {currentUser &&
    <Navbar.Brand > <h4 className="linkText">Welcome {currentUser.user.username}!</h4></Navbar.Brand>
    }
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse  id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link  className="customNavLink" as={Link} to="/" ><h4 className="linkText">Home</h4></Nav.Link>
       <Nav.Link  className="customNavLink" as={Link} to="/products"><h4 className="linkText">View Products</h4></Nav.Link>
      <Nav.Link  onClick = {() => (getUsersCart())} className="customNavLink" as={Link} to="/user/shoppingcart"><h4 className="linkText">Shopping Cart</h4></Nav.Link>
      <Nav.Link  className="customNavLink" as={Link} to="/user/createproduct"><h4 className="linkText">Sell A Product</h4></Nav.Link>
      {currentUser &&
            <Nav.Link className="customNavLink" as={Link} onClick={getUsersProducts} to="/userProducts"><h4 className="linkText">My Products</h4></Nav.Link> 
          }
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
  </Container>
</Navbar>
    ) 
}

export default NavigationBar