import React from 'react';  
import { Container, Row, Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FilteredCategories from '../Categories/filteredCategories';
import SearchBar from '../SearchBar/searchBar';

const ShowAllProducts = (props) => {
    let allProducts = props.allProducts
    let createCurrentProduct = props.createCurrentProduct 
    let getAllProducts = props.getAllProducts
    let getProductReviews = props.getProductReviews
    let userCurrentCategoryId = props.userCurrentCategoryId
    let categories = props.categories
    let setFilteredCategories = props.setFilteredCategories
    let setSearchFilteredProducts = props.setSearchFilteredProducts
    
    return (
        <React.Fragment>
            <Container>
            <Row>
                <Col sm={4}>
                <h1>All Products</h1>
            <FilteredCategories categories={categories} allProducts={allProducts} userCurrentCategoryId={userCurrentCategoryId} setFilteredCategories={setFilteredCategories}/>
                <Col sm={8}></Col>
            </Row>
        </Container>
        <SearchBar allProducts={allProducts} setSearchFilteredProducts={setSearchFilteredProducts} getAllProducts={getAllProducts}/>
            <Container fluid>
                <Row className="d-flex justify-content-center">
                    {allProducts.map((product) =>{
                        return (
                            <Card className="card-container border border-primary " style={{ width: "18rem", margin: "1rem" }}>
                            <Card.Body className="text-center">
                              <Card.Title>{product.name}</Card.Title>
                              <Card.Text>{product.description}</Card.Text>
                              <Card.Text>Price: ${product.price}</Card.Text>
                              <Card.Text>Rating: {product.averageRating}</Card.Text>
                              <Link to="/viewproduct"><Button onClick={() => [(createCurrentProduct(product), getProductReviews(product.productId))]}>View product</Button></Link>
                            </Card.Body>
                          </Card>
                        )
                    })}
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default ShowAllProducts